<script>
    import { getContext } from "svelte";
    import Grid from "./ExamGrid.svelte";
    import Button from "$lib/components/Button.svelte";
    import PageHead from "$lib/components/PageHead.svelte";

    const { exams_store, clearExpiredExams, startPendingExams } =
        getContext("exam_state");
</script>

<PageHead
    title="Exams timer - Good luck!"
    description="Manage multiple overlapping exams at once"
/>

<section class="buttons">
    <Button on:click={clearExpiredExams}>Clear expired</Button>
    <Button on:click={startPendingExams}>Start pending</Button>
</section>

<Grid exams={exams_store} />

<style>
    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 0.9em;
        align-items: center;
        justify-content: center;
        margin: calc(-0.5em + 1px); /* 1px for buttons border */
        padding-bottom: 1em;
    }
</style>
