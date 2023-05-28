<script>
    export let href;
    export let inline = false;
</script>

<a {href} class={inline ? "inline" : ""} target="_blank">
    <slot />
</a>

<style>
    a {
        font-size: 1em;
        margin: 0.5em;
    }

    a.inline {
        margin: 0;
    }
</style>
