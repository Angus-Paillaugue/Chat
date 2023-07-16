<script>
    import "../app.css";
    import { pageMetaData } from "$lib/stores"
    import Navbar from "$lib/components/Navbar.svelte";

    export let data;

    const { user } = data;
</script>

<svelte:head>
    <title>{$pageMetaData.title}</title>
    <meta name="description" content="{$pageMetaData.description}">
</svelte:head>

<Navbar user={user}/>

<main class="md:ml-64 relative">
    {#if $pageMetaData?.headerText}
        <nav class="p-4 bg-white bg-opacity-50 sticky w-full left-0 top-0 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-30 backdrop-blur">
            <h4>{$pageMetaData.headerText}</h4>
        </nav>
    {/if}
    <slot />
</main>