<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'
    import { Modal } from 'flowbite-svelte'
    import { currentUser, pb } from '$lib/pocketbase'

    let messages = [];
    let users = []
    let newChatModal = false;
    let logOutModal = false;
    let newChatUserSuggest;
    let conversationsUsers;

    if(!$currentUser) goto("/login")
  
    onMount(async () => {
        // Get initial messages
        const resultList = await pb.collection('messages').getList(1, 50, {
            sort: '-created',
            filter:`to="${$currentUser.id}" || from="${$currentUser.id}"`,
            expand: 'to,from',
        });
        let ids = []
        messages = resultList.items;
        messages = messages.map(message => {
            return { text:message.text, id:message.id, user:message.expand.from.id == $currentUser.id ? message.expand.to : message.expand.from }
        });
        messages = messages.filter(message => {
            if(ids.includes(message.user.id)){
                return false;
            }else{
                ids.push(message.user.id);
                return true;
            }
        });

        users = await pb.collection("users").getFullList();
        users = users.filter(user => user.id !== $currentUser.id);
        searchUser("");
    });

    function signOut() {
        pb.authStore.clear();
        goto("/login")
    }

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
</script>

<div class="flex flex-col-reverse sm:flex-row justify-start items-start">
    <aside class="flex flex-col gap-4 md:w-60 lg:w-80 p-2 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:h-screen w-full">
        <button class="button-primary" on:click={() =>newChatModal = true}>New chat<i class="bi bi-plus-lg"></i></button>
        <hr class="my-2">
        <div class="relative w-full text-gray-500 dark:text-gray-400">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="bi bi-person-circle"></i>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search conversations users..." autocomplete="off" on:keyup={(e) => {searchConversation(e.target.value)}}>
        </div>
        <div class="flex flex-col gap-4 h-full overflow-auto" bind:this={conversationsUsers}>
            {#each messages as message (message.id)}
                <a href="/messages/{ message.user.id }" class="p-2 flex flex-row justify-start gap-4 hover:bg-gray-50 rounded-xl transition-all" data-username="{message.user.username}">
                    <div class="flex items-center justify-center h-16 w-16 rounded-full bg-primary-500 flex-shrink-0">
                        { message.user.username.split("")[0].toUpperCase() ?? "X" }
                    </div>
                    <div class="flex flex-col">
                        <h6>{ message.user.username }</h6>
                        <p class="line-clamp-1 text-ellipsis">{message.text}</p>
                    </div>
                </a>
            {/each}
        </div>
    </aside>

    <div class="p-4 grid grid-cols-1 lg:grid-cols-2 w-max">
        <button  class="card-button" on:click={() => {logOutModal  =true;}}><i class="bi bi-door-closed"></i><span>Sign out<p>Disconnect from this account</p></span></button>
    </div>
</div>


<Modal bind:open={newChatModal} size="xs" autoclose>
    <div class="text-center">
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Chat with a new user?</h3>
        <div class="flex items-center relative mb-4">   
            <label for="simple-search" class="sr-only">Username</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i class="bi bi-person-circle"></i>
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search username..." autocomplete="off" on:keyup={(e) => {searchUser(e.target.value)}}>
            </div>
        </div>
        <div class=" w-full bg-gray-100 mb-4 rounded-lg overflow-hidden" bind:this={newChatUserSuggest}>
            {#each users as user (user.id)}
                <a href="/messages/{user.id}" class="p-2 flex flex-row justify-start gap-4 hover:bg-gray-200 transition-all" data-username="{user.username}">
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
            <button class="button-border-gray w-full" on:click={() => {logOutModal = false;}}>No, cancel</button>
            <button class="button-red w-full" on:click={signOut}>Yes, sign-out</button>
        </div>
    </div>
</Modal>