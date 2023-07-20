<script>
    import { page } from '$app/stores';
    import { Tooltip, Modal } from 'flowbite-svelte';

    export let user;
    export let recentMessages;

    let display;
    let conversationsUsers;
    let conversationsModal = false;

    $: display = user && !$page.url.pathname.startsWith("/dashboard/messages");

    function searchConversation(value){
        try {
            for(const child of conversationsUsers.children){
                if (child.getAttribute("data-username").toUpperCase().indexOf(value.toUpperCase()) > -1) {
                    child.style.display = "";
                } else {
                    child.style.display = "none";
                }
            }
        }catch(_){}
    }
</script>

{#if display}
    <div class=" fixed z-30 w-full px-2 max-w-lg -translate-x-1/2 bottom-2 sm:bottom-4 left-1/2">
        <div class="w-full h-16 bg-white bg-opacity-50 backdrop-blur border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
                <a href="/" class="inline-flex flex-col items-center justify-center rounded-l-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group transition-all duration-200">
                    <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-all duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span class="sr-only">Home</span>
                </a>
                <Tooltip>Home</Tooltip>
                <div class="flex items-center justify-center">
                    <button type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800" on:click={() => {conversationsModal = !conversationsModal}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                          </svg>                          
                        <span class="sr-only">Chat</span>
                    </button>
                </div>
                <Tooltip>Chat with someone</Tooltip>
                <a href="/dashboard" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group transition-all duration-200">
                    <svg class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-all duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/></svg>
                </a>
                <Tooltip>Profile</Tooltip>
            </div>
        </div>
    </div>
{/if}


<Modal title="Chat with someone" bind:open={conversationsModal} autoclose>
    <div class="relative w-full text-gray-500 dark:text-gray-400">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search conversations users..." autocomplete="off" on:keyup={(e) => {searchConversation(e.target.value)}}>
    </div>
    <div class="flex flex-col gap-4 h-full" bind:this={conversationsUsers}>
        {#each recentMessages as message (message.id)}
            <a href="/dashboard/messages/{ message.user.id }" class="p-2 flex flex-row justify-start gap-4 {message.seen ? "bg-white hover:bg-gray-50 dark:bg-gray-700 hover:dark:bg-gray-600" : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-500"} rounded-xl transition-all relative" data-username="{message.user.username}" on:click={() => {conversationsModal = !conversationsModal}}>
                <img src="http://127.0.0.1:8090/api/files/_pb_users_auth_/{message.user.id}/{message.user.avatar}?thumb=100x100" alt="Avatar" class="h-8 w-8 rounded-full flex-shrink-0"/>
                <div class="flex flex-col">
                    <h6>{ message.user.username }</h6>
                    <p class="line-clamp-1 text-ellipsis">
                        {#if message.seen}
                            {message.text}
                        {:else}
                            <b>{message.text}</b>
                        {/if}
                    </p>
                </div>
                {#if !message.seen}
                    <div class="bg-primary-400 w-4 h-4 rounded-full dark:bg-primary-900 absolute top-0 right-0 translate-x-1/3 -translate-y-1/3"></div>
                {/if}
            </a>
        {/each}
    </div>
</Modal>