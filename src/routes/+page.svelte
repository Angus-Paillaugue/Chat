<script>
    import { pageMetaData } from "$lib/stores"

    export let data;

    const { numberOfUsers } = data;
    console.log(numberOfUsers);

    $pageMetaData.title = "Home",
    $pageMetaData.description = "";
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
            <i class="bi bi-gear-fill text-5xl text-primary-500" />
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-bar-chart-fill text-5xl text-primary-500" />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-briefcase-fill text-5xl text-primary-500" />
            <h3>Business Branding</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-pencil-fill text-5xl text-primary-500" />
            <h3>Content Writing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-phone-fill text-5xl text-primary-500" />
            <h3>App Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
        </div>

        <div class="p-8 bg-white rounded-lg h-fit shadow-sm transition-shadow duration-75 hover:shadow-md cursor-pointer">
            <i class="bi bi-stack text-5xl text-primary-500" />
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perspiciatis dicta labore nulla beatae quaerat quia incidunt laborum aspernatur...</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-gift-fill text-4xl" />
                <h4>Free to Use</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-laptop-fill text-4xl" />
                <h4>Fully Responsive</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
            </div>
            <div class="w-full p-4 flex flex-col gap-2">
                <i class="bi bi-card-text text-4xl" />
                <h4>Easy to Customize</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
            </div>
        </div>
        <img src="rocket.svg" alt="" />
    </div>
</section>

<section id="pricing" class="py-24 min-h-screen">
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
</section>
