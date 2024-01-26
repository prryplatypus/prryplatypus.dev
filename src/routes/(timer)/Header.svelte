<script>
    import Clock from "$lib/components/Clock.svelte";
</script>

<header>
    <div class="clock">
        <Clock />
    </div>
</header>

<style>
    header {
        background-color: var(--background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: sticky;
        top: 0;
    }

    .clock {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        font-size: 15rem;
        font-variant-numeric: tabular-nums;
        font-weight: bold;
        text-align: center;
        flex: 1;
    }

    @media (max-width: 750px) {
        .clock {
            font-size: 6em;
        }
    }
</style>
