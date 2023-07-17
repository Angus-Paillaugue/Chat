<script>
    import { page } from '$app/stores';
    import { Tooltip  } from 'flowbite-svelte';

    export let user;
    let display;
    $: display = user && !$page.url.pathname.startsWith("/dashboard/messages");
</script>

{#if display}
    <div class=" fixed z-30 w-full px-2 max-w-lg -translate-x-1/2 bottom-2 sm:bottom-4 left-1/2">
        <div class="w-full h-16 bg-white bg-opacity-50 backdrop-blur border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
                <a href="/" class="inline-flex flex-col items-center justify-center rounded-l-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span class="sr-only">Home</span>
                </a>
                <Tooltip>Home</Tooltip>
                <a href="/dashboard/settings" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                    </svg>
                    <span class="sr-only">Settings</span>
                </a>
                <Tooltip>Settings</Tooltip>
                <a href="/dashboard" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <span class="sr-only">Profile</span>
                </a>
                <Tooltip>Profile</Tooltip>
            </div>
        </div>
    </div>
{/if}

<!-- <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex fixed top-0 left_0 items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <i class="bi bi-list text-2xl"></i>
</button> -->

 
<!-- <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidenav">
   <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 justify-between flex flex-col">
    <div>
        <ul class="space-y-2">
            <li>
                <a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <i class="bi bi-house text-xl text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                    <span class="ml-3">Home</span>
                </a>
            </li>
            <li>
                {#if user}
                    <a href="/dashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <i class="bi bi-person-circle text-xl text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ml-3">Dashboard</span>
                    </a>
                {:else}
                    <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
                        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
                        <li>
                            <a href="/login" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="ml-3">Log-in</span>
                            </a>
                        </li>
                        <li>
                            <a href="/signin" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span class="ml-3">Sign-in</span>
                            </a>
                        </li>
                    </ul>
                {/if}
            </li>
        </ul>
    </div>
        <a href="/dashboard/settings" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <i class="bi bi-sliders flex-shrink-0 text-xl text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
            <span class="ml-3">Settings</span>
        </a>
   </div>
</aside>  -->