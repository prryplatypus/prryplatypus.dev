<script>
    import ExamCard from "$lib/components/Timer/ExamCard.svelte";

    export let exams;
</script>

<main>
    {#each $exams as exam}
        <ExamCard {exam} class="exam" />
    {/each}
    <a class="exam add" href="/timer/exams/create"> + </a>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 50% 50%;
        width: calc(100% - 2rem);
    }

    .exam {
        border: 1px solid white;
        border-radius: 5px;
        margin: 1rem;
        padding: 1rem;
        width: calc(
            100% - 4rem
        ); /* 4rem = 2rem from margin + 2rem from padding */
    }

    .add {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dotted currentColor;
        text-align: center;
        text-decoration: none;
    }

    .add:hover {
        border: 1px solid currentColor;
    }

    @media (max-width: 500px) {
        main {
            grid-template-columns: 100%;
        }
    }
</style>
