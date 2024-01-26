<script>
    import { page } from "$app/stores";
    import PageHead from "$lib/components/PageHead.svelte";
    import Layout from "./(app)/+layout.svelte";
</script>

<PageHead
    title="{$page.status} - {$page.error.message}"
    description="{$page.status} - {$page.error.message}"
/>

<Layout>
    <div>
        <h1>{$page.status}</h1>
        <h3>{$page.error.message}</h3>
    </div>
</Layout>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
</style>
