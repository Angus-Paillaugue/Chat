<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<main class="md:ml-64 ralative">
    <slot />
</main>