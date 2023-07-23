<script>
    import { pageMetaData } from "$lib/stores"

    export let data;

    const { numberOfUsers } = data;

    $pageMetaData.title = "Home",
    $pageMetaData.description = "Welcome to ChitChat";
    $pageMetaData.headerText = "Home";
</script>

<section class="bg-primary-100 dark:bg-primary-700/30 p-6 justify-between w-full grid grid-cols-1 xl:grid-cols-2 text-center min-h-screen items-center">
    <div class="flex flex-col justify-center">
        <h2 class="font-bold leading-snug text-gray-700 dark:text-neutral-100 mb-4">Realtime chat app</h2>
        <p class="mb-10">
            With <b>ChitChat</b> you can send direct messages to any users at any time.
        </p>
        <a href="/signin" class="button-primary w-fit mx-auto mb-10">
            Sign up now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg>    
        </a>
    </div>
    <img class="mx-auto" src="/hero.svg" alt="" />
</section>

<section id="services" class="py-24">
    <h2 class="mb-24 mx-auto w-fit">Our Services</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-6 gap-2">
        
        <div class="p-8 bg-white dark:bg-gray-800 rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-primary-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <h3>Security</h3>
            <p>At our core, we prioritize your security. We employ state-of-the-art encryption protocols and robust security measures to ensure your data remains safe and protected, allowing you to chat with confidence.</p>
        </div>

        <div class="p-8 bg-white dark:bg-gray-800 rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-primary-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
            </svg>
            <h3>Privacy</h3>
            <p>Your privacy matters to us. We are committed to maintaining strict confidentiality and never sharing your personal information with third parties. Rest assured that your conversations and content are kept private, giving you complete control over your digital footprint.</p>
        </div>

        <div class="p-8 bg-white dark:bg-gray-800 rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-primary-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>              
            <h3>Pricing</h3>
            <p>To use our app, you d'ont have to spend a dime! Our app doesn't include <b>any</b> kind of purchases !</p>
        </div>

        <div class="p-8 bg-white dark:bg-gray-800 rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-primary-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>              
            <h3>Community</h3>
            <p>At this moment, <b>{numberOfUsers}</b> {numberOfUsers > 1 ? "users" : "user"} have joined the app. Now is your turn. <a href="/signin" class="link">Sign-up here</a></p>
        </div>
    </div>
</section>

<section id="feature" class="bg-primary-100 dark:bg-primary-700/30 py-24">
    <h2 class="mb-24 w-fit mx-auto">Learn More About Us</h2>
    <div class="grid grid-cols-1 xl:grid-cols-2 px-6 gap-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 text-text-main dark:text-white">
            <div class="w-full p-4 flex flex-col gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>                  
                <h4>Built with TailwindCSS</h4>
                <p>This website has been built with state of the art tools like <a href="https://kit.svelte.dev/" target="_blank" class="link">SvelteKit</a>, <a href="https://tailwindcss.com/" target="_blank" class="link">TailwindCSS</a> ad even <a href="https://pocketbase.io/" target="_blank" class="link">PocketBase</a></p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>                  
                <h4>Free to Use</h4>
                <p>Being free across the whole app was important to us to insure equality between all users.</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>                  
                <h4>Fully Responsive</h4>
                <p>This website can adapt to any screen size you have (computer, smartphone, tablet, smart-fridge, ...)</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>                  
                <h4>Easy to Use</h4>
                <p>This website has been built to be as simple as possible. No extra feature, just what you need and want.</p>
            </div>
        </div>
        <img src="rocket.svg" alt="" />
    </div>
</section>