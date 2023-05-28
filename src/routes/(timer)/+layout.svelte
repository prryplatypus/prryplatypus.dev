<script>
    import "../styles.css";
    import { setContext } from "svelte";
    import { examState } from "$lib/components/Timer/state.js";
    import Header from "./Header.svelte";
    setContext("exam_state", examState);
</script>

<svelte:head>
    <meta
        name="description"
        content="Manage multiple overlapping exams at once"
    />
</svelte:head>

<div class="app">
    <Header />
    <slot />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
    }
</style>
