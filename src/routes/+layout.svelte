<script>
    import "../app.css";
    import { page } from '$app/stores'
    import Navbar from "$lib/components/Navbar.svelte";

    export let data;

    const { user } = data;
</script>

<Navbar user={user}/>


{#if $page.url.pathname.startsWith("/dashboard/messages")}
    <main class="md:ml-64 relative">
        <slot />
    </main>
{:else}
    <main class="md:ml-64 relative">
        <nav class="p-4 bg-white bg-opacity-50 sticky w-full left-0 top-0 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-30 backdrop-blur">
            <h4>Page</h4>
        </nav>
        <slot />
    </main>
{/if}