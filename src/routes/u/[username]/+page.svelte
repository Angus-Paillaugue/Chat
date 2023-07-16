<script>
    import { pageMetaData } from "$lib/stores"

    export let data;

    let fullBio;

    const { watchingUser } = data;

    $pageMetaData.title = `${watchingUser.username}'s profile`,
    $pageMetaData.description = "";
    $pageMetaData.headerText = `${watchingUser.username}'s profile`;
</script>

<div class="w-full relative bg-no-repeat bg-center bg-cover max-h-64 lg:max-h-80" style="height: 25vw; background-image: url('http://127.0.0.1:8090/api/files/_pb_users_auth_/{watchingUser.id}/{watchingUser.banner}');">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="http://127.0.0.1:8090/api/files/_pb_users_auth_/{watchingUser.id}/{watchingUser.avatar}?thumb=144x144" alt="Profile picture" class="rounded-full lg:h-36 lg:w-36 h-24 w-24 absolute bottom-0 left-5 translate-y-3/4">
</div>
<div class="lg:h-[108px] h-[70px] mb-2 flex justify-between items-center lg:p-4 p-2 dark:text-white text-neutral-900 lg:pl-44 pl-32">
    <div class="h-full flex items-start">
        <h1 class="lg:text-4xl text-2xl">{watchingUser.username}</h1>
    </div>
</div>
<div class="pl-5">
    <p class="text-lg">
        {#if fullBio}
            {@html watchingUser?.bio?.replaceAll("\n", "<br />") ?? "No bio for now"}
        {:else}
            {@html watchingUser?.bio?.split("\n")[0] ?? "No bio for now"}
        {/if}
    </p>
    <button class="mb-2 class link" on:click={() => {fullBio = !fullBio}}>
        {#if fullBio}
            Show less <i class="bi bi-chevron-compact-up"></i>
        {:else}
            Show More <i class="bi bi-chevron-compact-down"></i>
        {/if}
    </button>

    <hr>
</div>