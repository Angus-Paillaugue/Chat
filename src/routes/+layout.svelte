<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { pageMetaData, preferences } from "$lib/stores"
    import Navbar from "$lib/components/Navbar.svelte";
    import { browser } from '$app/environment';


    export let data;
    
    let user;
    $: user = data.user;
    let backButton = false;
    let cookieModal = false;

    if (browser) {
        preferences.subscribe((data) => {
            const { theme } = data;
            if(theme == "dark"){
                document.documentElement.classList.add('dark');
            }else{
                document.documentElement.classList.remove('dark');
            }
        });
    }

    onMount(() => {
        if((history && history?.length) > 1) backButton = true;
        if(!localStorage.getItem("acceptsCookies")) cookieModal = true;
    });
</script>

<svelte:head>
    <title>{$pageMetaData.title}</title>
    <meta name="description" content="{$pageMetaData.description}">
</svelte:head>


<main class="relative min-h-screen">
    <nav class="p-4 bg-white bg-opacity-50 sticky w-full left-0 top-0 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-30 backdrop-blur flex flex-row gap-6 justify-between items-center h-20">
        <div class="flex flex-row gap-6 justify-start items-center">
            {#if backButton}
                <button on:click={() => {history.back()}} class="button-border-gray" name="back">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/></svg>
                </button>
            {/if}
            <h4>{@html $pageMetaData.headerText}</h4>
        </div>
        {#if $page.url.pathname == "/"}
            <img src="/logo.svg" alt="Logo" class="h-2/3">
        {/if}
    </nav>
    <slot />
    <Navbar user={user}/>
</main>

{#if cookieModal}
    <div class="fixed top-0 left-0 w-full h-full z-50 bg-neutral-800 bg-opacity-50 flex flex-col justify-end items-start p-6">
        <div class="p-6 flex bg-white dark:bg-gray-800 rounded-lg flex-col space-y-4 max-w-sm">
            <img src="https://www.svgrepo.com/show/30963/cookie.svg" class="w-1/3 mx-auto" alt="">
            <p>We use cookies to provide a better user experience.</p>
            <div class="flex flex-row justify-between items-center">
                <a href="/privacy-policy" class="link text-sm">Privacy Policy</a>
                <button class="button-primary"
                    on:click={() => {
                        localStorage.setItem("acceptsCookies", true);
                        cookieModal = false;
                    }}
                >Accept</button>
            </div>
        </div>
    </div>
{/if}