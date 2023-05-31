<script>
    import ExternalLink from "./ExternalLink.svelte";

    export let items = [];
    items.sort((a, b) => b.start_date - a.start_date);

    function dateToString(date) {
        if (date === null) return "Present";

        const options = { month: "long", year: "numeric" };
        return date.toLocaleString("en-US", options);
    }
</script>

<ul>
    {#each items as item}
        <li>
            {#if item.start_date !== null}
                <div class="timespan">
                    <span>
                        {dateToString(item.start_date)} -
                        {dateToString(item.end_date)}
                    </span>
                </div>
            {/if}
            <div class="content">
                <h3>
                    {item.role} @
                    <ExternalLink href={item.place_website} inline>
                        {item.place}
                    </ExternalLink>
                </h3>
                <p>{item.description}</p>
            </div>
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        border-left: 2px solid currentcolor;
        margin: 1em 0;
        padding: 1em;
    }

    .timespan {
        margin-bottom: 1.2em;
    }

    span {
        background-color: var(--color-text);
        color: var(--color-bg);
        border-radius: 25px;
        padding: 0.1em 0.5em;
        text-align: center;
    }

    h3 {
        margin-top: 0;
    }

    p {
        margin-bottom: 0;
        white-space: pre-line;
    }
</style>
