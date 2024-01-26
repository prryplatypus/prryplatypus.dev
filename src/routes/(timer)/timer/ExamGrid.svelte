<script>
    import ExamCard from "$lib/components/Timer/ExamCard.svelte";
    export let exams;
</script>

<main>
    {#each $exams as exam}
        <ExamCard {exam} />
    {/each}
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 50% 50%;
        width: calc(100% - 2rem);
    }

    @media (max-width: 500px) {
        main {
            grid-template-columns: 100%;
        }
    }
</style>
