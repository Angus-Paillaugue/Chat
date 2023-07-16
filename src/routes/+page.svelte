<script>
    import { pageMetaData } from "$lib/stores"

    export let data;

    const { numberOfUsers } = data;

    $pageMetaData.title = "Home",
    $pageMetaData.description = "Welcome to ChitChat";
    $pageMetaData.headerText = "Home";
</script>

<section id="hero-area" class="bg-primary-100 p-6 justify-between w-full grid grid-cols-1 xl:grid-cols-2 text-center min-h-screen items-center">
    <div class="flex flex-col justify-center">
        <h2 class="text-4xl font-bold leading-snug text-gray-700 mb-10">
            Startup and SaaS Landing Page
            <br /> Built with TailwindCSS
        </h2>
        <a href="/signin" class="button-primary w-fit mx-auto mb-10">Sign up now</a>
    </div>
    <img class="mx-auto" src="/hero.svg" alt="" />
</section>

<section id="services" class="py-24">
    <h2 class="mb-24 mx-auto w-fit">Our Services</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-6 gap-2">
        
        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-lock-fill text-5xl text-primary-500" />
            <h3>Security</h3>
            <p>At our core, we prioritize your security. We employ state-of-the-art encryption protocols and robust security measures to ensure your data remains safe and protected, allowing you to chat with confidence.</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-bell-slash-fill text-5xl text-primary-500" />
            <h3>Privacy</h3>
            <p>Your privacy matters to us. We are committed to maintaining strict confidentiality and never sharing your personal information with third parties. Rest assured that your conversations and content are kept private, giving you complete control over your digital footprint.</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-cash-coin text-5xl text-primary-500" />
            <h3>Pricing</h3>
            <p>To use our app, you d'ont have to spend a dime! Our app doesn't include <b>any</b> kind of purchases !</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-cash-coin text-5xl text-primary-500" />
            <h3>Community</h3>
            <p>At this moment, <b>{numberOfUsers}</b> {numberOfUsers > 1 ? "users" : "user"} have joined the app. Now is your turn. <a href="/signin" class="link">Sign-up here</a></p>
        </div>
    </div>
</section>

<section id="feature" class="bg-primary-100 py-24">
    <h2 class="mb-24 w-fit mx-auto">Learn More About Us</h2>
    <div class="grid grid-cols-1 xl:grid-cols-2 px-6 gap-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-stack text-4xl" />
                <h4>Built with TailwindCSS</h4>
                <p>This website has been built with state of the art tools like <a href="https://kit.svelte.dev/" class="link">SvelteKit</a>, <a href="https://tailwindcss.com/" class="link">TailwindCSS</a> ad even <a href="https://pocketbase.io/" class="link">PocketBase</a></p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-gift-fill text-4xl" />
                <h4>Free to Use</h4>
                <p>Being free across the whole app was important to us to insure equality between all users.</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-laptop-fill text-4xl" />
                <h4>Fully Responsive</h4>
                <p>This website can adapt to any screen size you have (computer, smartphone, tablet, smart-fridge, ...)</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-card-text text-4xl" />
                <h4>Easy to Use</h4>
                <p>This website has been built to be as simple as possible. No extra feature, just what you need and want.</p>
            </div>
        </div>
        <img src="rocket.svg" alt="" />
    </div>
</section>

<!-- <section id="pricing" class="py-24 min-h-screen">
    <h2 class="mb-24 w-fit mx-auto">Pricing</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 items-center">
        <div class="w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <div>
                <h5 class="mb-4 text-gray-500 dark:text-gray-400">Basic plan</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="text-3xl font-semibold">$</span>
                    <span class="text-5xl font-extrabold tracking-tight">12.90</span>
                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Up to 5 projects</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Up to 10 collabrators</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2gb of storage</span>
                    </li>
                </ul>
            </div>
            <a href="#pricing" class="button-primary">Get It</a>
        </div>

        <div class="w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <div>
                <h5 class="mb-4 text-gray-500 dark:text-gray-400">Profesionel plan</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="text-3xl font-semibold">$</span>
                    <span class="text-5xl font-extrabold tracking-tight">49.90</span>
                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Up to 10 projects</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Up to 20 collabrators</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">10gb of storage</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Real-time collabration</span>
                    </li>
                </ul>
            </div>
            <a href="#pricing" class="button-primary">Get It</a>
        </div>

        <div class="w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <div>
                <h5 class="mb-4 text-gray-500 dark:text-gray-400">Expert plan</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="text-3xl font-semibold">$</span>
                    <span class="text-5xl font-extrabold tracking-tight">89.90</span>
                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Unlimited projects</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Unlimited collabrators</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Unlimited storage</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Real-time collabration</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <i class="bi bi-check-circle-fill flex-shrink-0 text-lg text-primary-600 dark:text-primary-500"></i>
                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24x7 Support</span>
                    </li>
                </ul>
            </div>
            <a href="#pricing" class="button-primary">Get It</a>
        </div>
    </div>
</section> -->
