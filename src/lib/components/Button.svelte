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
        border: 1px solid var(--color-text);
        border-radius: 15px;
        color: currentColor;
        cursor: pointer;
        font-size: 1em;
        margin: 0.5em;
        padding: 0.5em 1em;
        text-decoration: none;
        transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
    }

    button:hover {
        background-color: var(--color-text);
        color: var(--color-bg);
    }
</style>
