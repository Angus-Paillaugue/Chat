<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error.status || "404"} Error</title>
</svelte:head>

<div class="mx-auto max-w-screen-md text-center py-8 px-4 lg:py-16 lg:px-6">
    <h1 class="mb-6 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">{$page.error.status || "404"}</h1>

    <p class="mb-6 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{$page.error.message || "Page not found"}</p> 

    <a href="{$page.error.link || "/"}" class="button-primary w-fit mx-auto hover:gap-4">
        {$page.error.buttonText || "Back to Homepage"} 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>      
    </a>
</div>