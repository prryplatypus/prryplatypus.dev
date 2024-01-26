<script>
    export let action = null;
    export let type = null;
</script>

<button {action} {type} on:click>
    <slot />
</button>

<style>
    button {
        background-color: transparent;
        border: 1px solid var(--text-color);
        border-radius: 1em;
        color: inherit;
        cursor: pointer;
        margin: 0.5em;
        padding: 0.5em 1em;
        text-decoration: none;
        transition:
            background-color 0.1s ease-in-out,
            color 0.1s ease-in-out;
    }

    button:hover {
        background-color: var(--text-color);
        color: var(--background-color);
    }
</style>
