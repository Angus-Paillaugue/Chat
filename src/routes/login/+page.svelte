<script>
    import { enhance } from '$app/forms';
    import { pageMetaData } from "$lib/stores"
  
    export let form;

    $pageMetaData.title = "Log-in",
    $pageMetaData.description = "";
    $pageMetaData.headerText = "Log-in";
</script>

<div class="max-w-md mx-auto w-full h-screen flex flex-col justify-center">
    <form class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-6" method="POST" use:enhance>
        <h3>Log-in</h3>
        <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" placeholder="Username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" placeholder="Password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
        </div>

        <button class="button-primary w-full" type="submit">Log-in</button>

        {#if form?.err}
            <div class="p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                Incorrect credentials
            </div>
        {/if}
        
        <a class="link" href="/signin">Don't have an account ?</a>
    </form>
</div>