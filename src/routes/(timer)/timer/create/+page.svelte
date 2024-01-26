<script>
    import { getContext } from "svelte";
    import { goto } from "$app/navigation";
    import Form from "$lib/components/Form.svelte";
    import InternalLink from "$lib/components/InternalLink.svelte";
    import Input from "$lib/components/Input.svelte";
    import Label from "$lib/components/Label.svelte";
    import PageHead from "$lib/components/PageHead.svelte";
    import Button from "$lib/components/Button.svelte";

    const { addExam } = getContext("exam_state");
    const doAddExam = (e) => {
        const formData = new FormData(e.target);
        const exam = {
            id: crypto.randomUUID(),
            name: formData.get("name"),
            duration: parseInt(formData.get("duration")),
            start_date: null,
        };

        addExam(exam);
        goto("/timer");
    };
</script>

<PageHead
    title="Exams timer - Create exam"
    description="Create an exam"
    keywords="Exams,Timer,Overlapping,Multiple"
/>

<main>
    <Form title="Create exam" on:submit={doAddExam}>
        <Label>
            Exam name
            <Input type="text" name="name" placeholder="Name" required />
        </Label>
        <Label>
            Exam duration (minutes)
            <Input
                type="number"
                name="duration"
                placeholder="45"
                min="0"
                step="1"
                required
            />
        </Label>

        <div class="buttons">
            <InternalLink href="/timer">Cancel</InternalLink>
            <Button type="submit" action="submit">Create</Button>
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
</style>
