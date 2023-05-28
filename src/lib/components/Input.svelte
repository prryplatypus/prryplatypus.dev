<script>
    export let type = null;
    export let name = null;
    export let placeholder = null;
    export let min = null;
    export let step = null;
    export let required = null;
    export let value = null;
</script>

<input {type} {name} {placeholder} {min} {step} {required} {value} />

<style>
    input {
        background-color: transparent;
        border: 1px solid currentColor;
        color: inherit;
        font-size: 0.9em;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
</style>
