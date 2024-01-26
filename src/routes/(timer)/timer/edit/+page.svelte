<script>
    import { getContext } from "svelte";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Form from "$lib/components/Form.svelte";
    import InternalLink from "$lib/components/InternalLink.svelte";
    import Input from "$lib/components/Input.svelte";
    import Label from "$lib/components/Label.svelte";
    import PageHead from "$lib/components/PageHead.svelte";
    import Button from "$lib/components/Button.svelte";

    const { getExam, updateExam, deleteExam } = getContext("exam_state");
    const exam_id = $page.url.searchParams.get("id");
    if (exam_id === null) {
        goto("/timer");
    }

    const exam = getExam(exam_id);
    if (exam === null && browser) {
        goto("/timer");
    }

    const doUpdateExam = (e) => {
        const formData = new FormData(e.target);
        exam.name = formData.get("name");
        exam.duration = parseInt(formData.get("duration"));
        updateExam(exam);
        goto("/timer");
    };

    const doDeleteExam = (e) => {
        e.preventDefault();
        if (!confirm("Are you sure you want to delete this exam?")) {
            return;
        }
        deleteExam(exam);
        goto("/timer");
    };
</script>

<PageHead
    title="Exams timer - Edit exam"
    description="Edit an exam"
    keywords="Exams,Timer,Overlapping,Multiple"
/>

<main>
    <Form title="Edit exam" on:submit={doUpdateExam}>
        <Label>
            Exam name
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={exam ? exam.name : ""}
                required
            />
        </Label>
        <Label>
            Exam duration (minutes)
            <Input
                type="number"
                name="duration"
                placeholder="45"
                min="0"
                step="1"
                value={exam ? exam.duration : ""}
                required
            />
        </Label>

        <div class="buttons">
            <Button type="button" on:click={doDeleteExam}>Delete</Button>
            <div class="spacer" />
            <InternalLink href="/timer">Cancel</InternalLink>
            <Button type="submit" on:click={doUpdateExam}>Save</Button>
        </div>
    </Form>
</main>

<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 100vh;
        max-width: min(40rem, calc(100% - 2rem));
        box-sizing: border-box;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 0.9em;
        align-items: center;
        margin: 0 calc(-0.5em + 1px); /* 1px for buttons border */
        justify-content: end;
    }

    .spacer {
        flex: 1;
    }
</style>
