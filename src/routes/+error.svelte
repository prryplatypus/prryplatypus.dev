<script>
    import { page } from "$app/stores";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Layout from "./(app)/+layout.svelte";
</script>

<svelte:head>
    <MetaTags
        title="{$page.status} - {$page.error.message}"
        description="{$page.status} - {$page.error.message}"
    />
</svelte:head>

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

    h1 {
        margin-bottom: 0;
        padding-bottom: 0;
    }

    h3 {
        margin-top: 0;
        padding-top: 0;
    }
</style>
