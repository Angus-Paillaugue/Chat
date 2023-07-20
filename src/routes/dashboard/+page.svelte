<script>
    import { Modal } from 'flowbite-svelte'
    import { pageMetaData } from "$lib/stores"

    export let data;

    const { recentMessages, users, commits } = data;

    let newChatModal = false;
    let logOutModal = false;
    let newChatUserSuggest;
    let conversationsUsers;
    let isDown = false;
    let startX;
    let scrollLeft;

    function searchUser(value){
        try {
            for(const child of newChatUserSuggest.children){
                if (child.getAttribute("data-username").toUpperCase().indexOf(value.toUpperCase()) > -1) {
                    child.style.display = "";
                } else {
                    child.style.display = "none";
                }
            }
            for(const child of newChatUserSuggest.children.slice(5)){
                child.style.display = "none";
            }
        }catch(_){}
    }

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

    $pageMetaData.title = "Dashboard",
    $pageMetaData.description = "";
    $pageMetaData.headerText = "Dashboard";
</script>

<div class="grid grid-cols-1 md:grid-cols-12 max-md:flex max-md:flex-col-reverse justify-start items-start">
    <aside class="col-span-1 md:col-span-5 col-start-1 flex flex-col gap-4 p-4 max-md:mt-10 bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-600 md:h-screen w-full">
        <button class="button-primary button-lg" on:click={() =>newChatModal = true}>
            New chat
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
        </button>
        <hr class="my-2">
        <div class="relative w-full text-gray-500 dark:text-gray-400">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>                  
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search conversations users..." autocomplete="off" on:keyup={(e) => {searchConversation(e.target.value)}}>
        </div>
        <div class="flex flex-col gap-4 h-full" bind:this={conversationsUsers}>
            {#each recentMessages as message (message.id)}
                <a href="/dashboard/messages/{ message.user.id }" class="p-2 flex flex-row justify-start gap-4 {message.seen ? "bg-white hover:bg-gray-50 dark:bg-gray-700 hover:dark:bg-gray-600" : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-500"} rounded-xl transition-all relative" data-username="{message.user.username}">
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
    </aside>

    <!-- Action cards -->
    <div class="flex flex-col gap-4 p-4 md:col-span-7 md:col-start-6 w-full">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
            <a href="/dashboard/settings" class="card-button" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <span>Settings<p>Change some informations</p></span>
            </a>
            <button  class="card-button" on:click={() => {logOutModal  =true;}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span>Sign out<p>Disconnect from this account</p></span>
            </button>
        </div>
        {#if commits}
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-600 p-6">
                <h4 class="mb-4">Latest commits</h4>
                <!-- svelte-ignore missing-declaration -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <ol 
                    class=" flex flex-row w-auto overflow-x-auto will-change-transform cursor-pointer no-scrollbar"
                    on:mousedown={(e) => {let slider = e.target.closest("ol");isDown = true;slider.classList.add('cursor-grab');startX = e.pageX - slider.offsetLeft;scrollLeft = slider.scrollLeft;}} 
                    on:mouseleave={(e) => {isDown = false;e.target.closest("ol").classList.remove('cursor-grab');}} 
                    on:mouseup={(e) => {isDown = false;e.target.closest("ol").classList.remove('cursor-grab');}} 
                    on:mousemove={(e) => {let slider = e.target.closest("ol");if(!isDown) return;e.preventDefault();const x = e.pageX - slider.offsetLeft;const walk = (x - startX) * 2; slider.scrollLeft = scrollLeft - walk;}}
                >
                    {#each commits as commit}
                        <li class="relative mb-0 shrink-0 w-80">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-white dark:bg-blue-900 ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-8 pr-8">
                                <a href="{commit.html_url}" target="_blank" class="w-full text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 text-ellipsis">{new URL(commit.commit.url).pathname.split("/").pop()}</a>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{new Date(commit.commit.author.date).toLocaleString()}</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3 text-ellipsis">{commit.commit.message}</p>
                            </div>
                        </li>
                    {/each}
                </ol>
            </div>
        {/if}
    </div>
</div>



<Modal bind:open={newChatModal} size="xs" autoclose>
    <div class="text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Chat with a new user?</h3>
        <div class="flex items-center relative mb-4">   
            <label for="simple-search" class="sr-only">Username</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>                      
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search username..." autocomplete="off" on:keyup={(e) => {searchUser(e.target.value)}}>
            </div>
        </div>
        <div class=" w-full bg-gray-100 mb-4 rounded-lg overflow-hidden" bind:this={newChatUserSuggest}>
            {#each users as user (user.id)}
                <a href="/dashboard/messages/{user.id}" class="p-2 flex flex-row justify-start gap-4 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 transition-all" data-username="{user.username}">
                    <div class="flex items-center justify-center h-8 w-8 rounded-full bg-primary-500 flex-shrink-0">
                        { user.username.split("")[0].toUpperCase() ?? "X" }
                    </div>
                    <div class="flex flex-col">
                        <h6>{ user.username }</h6>
                    </div>
                </a>
            {/each}
        </div>
        <button class="button-border-gray w-full" >Cancel</button>
    </div>
</Modal>

<Modal bind:open={logOutModal} size="xs" autoclose>
    <div class="text-start">
        <h4 class="mb-2">Sign out?</h4>
        <p>Are you sure you want to sign out of this account ?</p>
        <div class="flex flex-row gap-2 mt-4">
            <button class="button-border-gray w-full" type="button" on:click={() => {logOutModal = false;}}>No, cancel</button>
            <a href="/sign-out" class="button-red w-full">Yes, sign-out</a>
        </div>
    </div>
</Modal>