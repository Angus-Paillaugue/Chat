<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error.status || "404"} Error</title>
</svelte:head>

<div class="mx-auto max-w-screen-md text-center py-8 px-4 lg:py-16 lg:px-6">
    <h1 class="mb-6 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">{$page.error.status || "404"}</h1>
    <p class="mb-6 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{$page.error.message || "Page not found"}</p> 
    <a href="{$page.error.link || "/"}" class="button-primary w-fit mx-auto hover:gap-4">{$page.error.buttonText || "Back to Homepage"} <i class="bi bi-arrow-right text-xl font-bold transition-all"></i></a>
</div>