<script>
    import { Tabs, TabItem, Tooltip, Modal  } from 'flowbite-svelte';
    import { pageMetaData, preferences } from "$lib/stores"
    import { enhance } from '$app/forms'

    export let data;
    export let form;

    const { user } = data;
    let deleteAccountModal = false;
    let theme = $preferences.theme

    function switchTheme() {
        console.log(theme);
        preferences.set({ theme: theme})

        theme == "dark" ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }

    $pageMetaData.title = `Settings`,
    $pageMetaData.description = "";
    $pageMetaData.headerText = `Settings`;
</script>

<div class="max-w-md mx-auto w-full mt-10">
    <h1 class="text-5xl font-semibold">Settings</h1>
    <div class="w-full mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6">
        <Tabs style="full" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 w-full">
            <TabItem class="w-full" open>
                <span slot="title">Profile</span>
                <form use:enhance method="POST" action="?/save" class="flex flex-col gap-6">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                        <input type="email" placeholder="E-mail" name="email" value="{user.email}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div>
                        <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                        <textarea id="bio" name="bio" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your bio...">{user.bio}</textarea>
                    </div>
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username
                            <i class="bi bi-info-circle ml-1"></i>
                            <Tooltip class="text-center">You can <b>not</b> change your username<br>You should have thought twice</Tooltip>
                        </label>
                        <input type="text" placeholder="Username" name="username" readonly value="{user.username}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <button class="button-primary w-full" type="submit">Save</button>
                </form>
                {#if form?.err}
                    <div class="mt-2 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"><strong>Error : </strong>{form?.msg ?? "An error occurred"}</div>
                {/if}
            </TabItem>
            <TabItem class="w-full p-0">
                <span slot="title">Theme</span>
                <div class="flex flex-col gap-6">
                    <div class="flex items-center mb-4">
                        <input type="radio" name="lightTheme" bind:group={theme} value={"light"} on:change={switchTheme} class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="lightTheme" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Light</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" name="darkTheme" bind:group={theme} value={"dark"} on:change={switchTheme} class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="darkTheme" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</label>
                    </div>
                </div>
            </TabItem>
            <TabItem class="w-full p-0">
                <span slot="title">Danger</span>
                <div class="flex flex-col gap-6">
                    <button class="button-red w-full" type="button" on:click={() => {deleteAccountModal = !deleteAccountModal}}>Delete account <i class="bi bi-exclamation-triangle"></i></button>
                </div>
            </TabItem>
        </Tabs>
    </div>
</div>

<Modal title="Delete account" bind:open={deleteAccountModal}>
    <p>Are you sure you want to delete your account</p>
    <svelte:fragment slot='footer'>
        <form use:enhance action="?/deleteAccount" method="POST" class="w-full flex flex-row justify-between">
            <button class="button-border-gray" type="button" on:click={() => {deleteAccountModal = !deleteAccountModal}}>Cancel</button>
            <button class="button-red" type="submit">Delete</button>
        </form>
    </svelte:fragment>
</Modal>