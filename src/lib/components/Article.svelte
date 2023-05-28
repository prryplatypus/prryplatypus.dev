<script>
    export let title = "";
    export let id = "";
</script>

<div class="article" {id}>
    <div class="title">
        <h2>{title}</h2>
        <hr class="divider" />
    </div>
    <slot />
</div>

<style>
    .article {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .title {
        background-color: var(--color-bg);
        position: sticky;
        top: 0;
    }

    hr {
        width: 100%;
    }

    .divider {
        background-color: currentcolor;
        padding: 0px;
        height: 4px;
        border: 0px none;
        display: block;
        color: inherit;
    }
</style>
