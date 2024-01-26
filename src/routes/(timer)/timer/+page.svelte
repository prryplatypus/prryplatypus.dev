<script>
    import "../../styles.css";
    import Button from "$lib/components/Button.svelte";
    import { setContext } from "svelte";
    import { examState } from "$lib/components/Timer/state.js";
    import Grid from "./ExamGrid.svelte";
    import PageHead from "$lib/components/PageHead.svelte";

    setContext("exam_state", examState);
    const { exams_store, clearExpiredExams, startPendingExams } = examState;
</script>

<PageHead
    title="Exams timer - Time multiple exams at once"
    description="Manage multiple overlapping exams at once"
    keywords="Exams,Timer,Overlapping,Multiple"
/>

<nav>
    <Button on:click={clearExpiredExams}>Clear expired</Button>
    <Button on:click={startPendingExams}>Start pending</Button>
    <form action="/timer/create">
        <Button type="submit">+</Button>
    </form>
</nav>

<Grid exams={exams_store} />

<style>
    form {
        display: inline;
    }

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
