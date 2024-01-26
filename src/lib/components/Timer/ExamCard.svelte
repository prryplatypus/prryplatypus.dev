<script>
    export let exam;
    const timeFormat = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
    });
</script>

<div class="exam-card">
    <a href="/timer/edit?id={exam.id}">
        <h2 class="exam-name">
            {exam.name}
        </h2>
    </a>
    <div class="exam-time">
        {#if exam.start_date}
            {timeFormat.format(
                new Date(exam.start_date.getTime() + exam.duration * 60000),
            )}
        {:else}
            &ZeroWidthSpace;
        {/if}
    </div>
</div>

<style>
    .exam-card {
        font-size: 3rem;
        margin: 1rem;
    }

    a {
        color: var(--background-color);
    }

    .exam-name {
        display: flex;
        border-radius: 5px 5px 0 0;
        border: 1px solid var(--text-color);
        background-color: var(--text-color);
        color: var(--background-color);
        align-items: center;
        justify-content: center;
        font-size: 1.8em;
        margin: 0;
        padding: 0.1em;
    }

    .exam-time {
        border: 1px solid var(--text-color);
        border-radius: 0 0 5px 5px;
        display: flex;
        flex-direction: column;
        font-family: monospace;
        font-size: 3em;
        font-weight: bold;
        margin: 0;
        padding: 1rem;
        text-align: center;
    }
</style>
