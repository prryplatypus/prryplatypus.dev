<script>
    import Clock from "$lib/components/Timer/Clock.svelte";
</script>

<header>
    <div class="clock">
        <Clock />
    </div>
</header>

<style>
    header {
        background-color: var(--color-bg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: sticky;
        top: 0;
    }

    .clock {
        font-family: monospace;
        font-size: 10em;
        font-weight: bold;
        text-align: center;
        overflow-x: scroll;
        max-width: 100%;
    }

    .clock {
        flex: 1;
        width: 100%;
    }

    @media (max-width: 750px) {
        .clock {
            font-size: 6em;
        }
    }
</style>
