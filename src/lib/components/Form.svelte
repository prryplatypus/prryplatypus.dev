<script>
    export let title;
</script>

<form on:submit|preventDefault>
    <h2>{title}</h2>
    <slot />
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin: 0.5rem 0;
    }
</style>
