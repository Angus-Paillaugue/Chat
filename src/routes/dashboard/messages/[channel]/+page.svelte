<script>
    import { onDestroy, onMount } from 'svelte';
    import { pageMetaData } from "$lib/stores"
    import { page } from "$app/stores"
    import { pb } from "$lib/poketbase"

    export let data;
  
    let unsubscribe;
    let newMessage;
    let textarea;
    let mentionUserContainer;
    let atMenuDisplay = false;

    let { messages, chattingWith, user, users } = data;
    const { channel } = $page.params;

    onMount(async() => {
        const parseMentions = (text) => {
            const regexExp = new RegExp(/(?=(<user>))(\w|\W)*(?<=<\/user>)/, "gm")
            return text.replace(regexExp, function(match) {
                return `<a href="/u/${match.trim().slice(7, -7)}" class="link">${match}</a> `;
            });
        }
        unsubscribe = await pb.collection('messages').subscribe('*', async ({ action, record }) => {
            if (action === 'create') {
                // Fetch associated user
                const from = await pb.collection('users').getOne(record.from);
                record.expand = { from };
                record.text = parseMentions(record.text)
                messages = [...messages, record];
            }
            if (action === 'delete') {
                messages = messages.filter((m) => m.id !== record.id);
            }
        });
    });

    function calcHeight(value) {
        let numberOfLineBreaks = (value.match(/\n/g) || []).length;
        return 42 + Math.min(numberOfLineBreaks, 3) * 20;
    }
  
    // Unsubscribe from realtime messages
    onDestroy(() => {
        unsubscribe?.();
    });
  
    async function sendMessage() {
        const response = await fetch("/api/newMessage", { method:"POST", body:JSON.stringify({ newMessage, channel }) });
        const data = await response.json();
        if(data.success){
            newMessage = '';
            textarea.style.height = "42px";
        }
    }

    $pageMetaData.title = `Chatting with ${chattingWith.username}`,
    $pageMetaData.description = "";
    $pageMetaData.headerText = null;

    function oninput(){
        textarea.style.height = calcHeight(textarea.value) + "px";
        const positionIndex = textarea.selectionStart;
        const textBeforeCaret = textarea.value.slice(0, positionIndex);
        const tokens = textBeforeCaret.split(/\s/);
        const lastToken = tokens[tokens.length - 1];
        const triggerIdx = textBeforeCaret.endsWith(lastToken) ? textBeforeCaret.length - lastToken.length : -1;
        const maybeTrigger = textBeforeCaret[triggerIdx];
        const keystrokeTriggered = maybeTrigger === '@';
        if(!keystrokeTriggered) { 
            atMenuDisplay = false; 
            return 
        }
        const query = textBeforeCaret.slice(triggerIdx+1);

        atMenuDisplay = true;
        try {
            for(const child of mentionUserContainer.children){
                if (child.getAttribute("data-username").toUpperCase().indexOf(query.toUpperCase()) > -1) {
                    child.style.display = "";
                } else {
                    child.style.display = "none";
                }
            }
            for(const child of mentionUserContainer.children.slice(10)){
                child.style.display = "none";
            }
        }catch(_){}
    }

    function identifyUser(username){
        atMenuDisplay = false; 
        const positionIndex = textarea.selectionStart;
        const textBeforeCaret = newMessage.slice(0, positionIndex);
        let start = textBeforeCaret.split("@")
        start.pop();
        newMessage = start.join("@") + `@${username}`;

        try {
            for(const child of mentionUserContainer.children){
                child.style.display = "";
            }
        }catch(_){}
    }
</script>

  
<header class="w-full p-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-30 backdrop-blur bg-white bg-opacity-50">
    <a href="/u/{chattingWith.username}" class="p-2 flex flex-row justify-start items-center gap-4 w-fit">
        <img src="http://127.0.0.1:8090/api/files/_pb_users_auth_/{chattingWith.id}/{chattingWith.avatar}?thumb=32x32" alt="Avatar" class="h-8 w-8 rounded-full flex-shrink-0"/>
        <div class="flex flex-col"><h6>{ chattingWith.username }</h6></div>
    </a>
</header>
<div class="h-screen max-w-screen-lg mx-auto w-full">
    <div class="flex flex-col h-full justify-between max-w-screen-lg w-full">
        <div>
            <div class="grid grid-cols-12 gap-y-2 p-4 overflow-y-auto">
                {#each messages as message (message.id)}
                    <div class="{user.id == message.expand?.from?.id ? "col-start-5 col-end-13" : "col-start-1 col-end-9"} p-3 rounded-lg">
                        <div class="flex {user.id == message.expand?.from?.id ? "flex-row-reverse" : "flex-row"} items-end">
                            <img src="http://127.0.0.1:8090/api/files/_pb_users_auth_/{message.expand?.from.id}/{message.expand?.from.avatar}?thumb=32x32" alt="Avatar" class="h-8 w-8 rounded-full flex-shrink-0"/>
                            <div class="relative {user.id == message.expand?.from?.id ? "mr-3 bg-primary-100" : "ml-3 bg-white"} text-sm py-2 px-4 shadow rounded-xl">
                                <p class="leading-6 font-normal text-neutral-700">{@html message.text.replaceAll("\n", "<br />")}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
          
        <form on:submit|preventDefault={sendMessage} class="max-w-screen-lg w-full sticky bottom-0 bg-gray-50 dark:bg-gray-700 shadow z-20">
            {#if atMenuDisplay}
                <div class="w-full p-4">
                    <div class="flex flex-row flex-wrap gap-4" bind:this={mentionUserContainer}>
                        {#each users as user}
                            <button class="p-2 flex flex-row justify-start gap-4 hover:bg-white border border-gray-300 text-gray-900 w-fit rounded-xl transition-all" data-username="{user.username}" on:click={() => {identifyUser(user.username)}}>
                                <div class="p-2 flex flex-row justify-start items-center gap-4 w-fit">
                                    <img src="http://127.0.0.1:8090/api/files/_pb_users_auth_/{user.id}/{user.avatar}?thumb=32x32" alt="Avatar" class="h-8 w-8 rounded-full flex-shrink-0"/>
                                    <div class="flex flex-col"><h6>{ user.username }</h6></div>
                                </div>
                            </button>
                        {/each}
                    </div>
                </div>
            {/if}
            <label for="chat" class="sr-only">Your message</label>
            <div class="flex items-center px-3 py-2 rounded-lg">
                <textarea id="chat" rows="1" class="block mr-4 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none resize-none" placeholder="Your message..." bind:value={newMessage} bind:this={textarea} on:keyup={oninput}></textarea>
                <!-- oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' -->
                    <button type="submit" class="inline-flex justify-center p-2 text-primary-600 rounded-full cursor-pointer hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600">
                    <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                    </svg>
                    <span class="sr-only">Send message</span>
                </button>
            </div>
        </form>
    </div>
</div>