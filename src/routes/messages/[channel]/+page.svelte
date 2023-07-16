<script>
    import { onMount, onDestroy } from 'svelte';
    import { page } from "$app/stores"
    import { currentUser, pb } from '$lib/pocketbase';
    import { error } from '@sveltejs/kit';
  
    let newMessage;
    let messages = [];
    let unsubscribe;
    let textarea;
    let chattingWith;

    const { channel } = $page.params;

    if(!$currentUser) {
        throw error(402, { status:402, message:"You need to be logged-in to access this page", buttonText:"Log-in", link:"/login" })
    }

    function calcHeight(value) {
        let numberOfLineBreaks = (value.match(/\n/g) || []).length;
        return 42 + Math.min(numberOfLineBreaks, 3) * 20;
    }
  
    onMount(async () => {
        // Get initial messages
        const resultList = await pb.collection('messages').getFullList({
            sort: 'created',
            filter:`from.id="${channel}" || to.id="${$currentUser.id}" || from.id="${$currentUser.id}" || to.id="${channel}"`,
            expand: 'from,to',
        });
        messages = resultList;
    
        // Subscribe to realtime messages
        unsubscribe = await pb.collection('messages').subscribe('*', async ({ action, record }) => {
            if (action === 'create') {
                // Fetch associated user
                const from = await pb.collection('users').getOne(record.from);
                record.expand = { from };
                messages = [...messages, record];
            }
            if (action === 'delete') {
                messages = messages.filter((m) => m.id !== record.id);
            }
        });
        chattingWith = await pb.collection("users").getFirstListItem(`id="${channel}"`);
    });
  
    // Unsubscribe from realtime messages
    onDestroy(() => {
        unsubscribe?.();
    });
  
    async function sendMessage() {
        const data = {
            text: newMessage,
            from: $currentUser.id,
            to:channel
        };
        const createdMessage = await pb.collection('messages').create(data);
        newMessage = '';
        textarea.style.height = "42px";
    }

    const scrollToBottom = node => {
		const scroll = () => node.scroll({
			top: node.scrollHeight,
			behavior: 'smooth',
		});

		return { update: scroll }
	};
</script>
  
<div class="flex flex-col h-full justify-between max-w-screen-lg w-full">
    <div>
        <header>
    
        </header>
        <div class="grid grid-cols-12 gap-y-2 p-4 overflow-y-auto" use:scrollToBottom={messages}>
            {#each messages as message (message.id)}
                <div class="{$currentUser.id == message.expand?.from?.id ? "col-start-5 col-end-13" : "col-start-1 col-end-9"} p-3 rounded-lg">
                    <div class="flex {$currentUser.id == message.expand?.from?.id ? "flex-row-reverse" : "flex-row"} items-end">
                        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-primary-500 flex-shrink-0">
                            {message.expand?.from?.username.split("")[0].toUpperCase() ?? "X"}
                        </div>
                        <div class="relative {$currentUser.id == message.expand?.from?.id ? "mr-3 bg-primary-100" : "ml-3 bg-white"} text-sm py-2 px-4 shadow rounded-xl">
                            <p class="leading-6 font-normal text-neutral-700">{@html message.text.replaceAll("\n", "<br />")}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
      
    <form on:submit|preventDefault={sendMessage} class="max-w-screen-lg w-full">
        <label for="chat" class="sr-only">Your message</label>
        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <textarea id="chat" rows="1" class="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none resize-none" placeholder="Your message..." bind:value={newMessage} bind:this={textarea} on:keyup={(el) => {el.target.style.height = calcHeight(textarea.value) + "px";}}></textarea>
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