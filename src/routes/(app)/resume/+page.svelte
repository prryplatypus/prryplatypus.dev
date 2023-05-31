<script>
    import Article from "$lib/components/Article.svelte";
    import Backlink from "$lib/components/Backlink.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import Timeline from "$lib/components/Timeline.svelte";

    const experience = [
        {
            start_date: new Date(Date.parse("2022-10-01")),
            end_date: null,
            place: "Sanic Framework (OSS project)",
            place_website: "https://sanic.dev",
            role: "Steering Council",
            description: [
                `After being a core developer for a year, I was nominated to join the steering council of the project. The steering council `,
                `is responsible for accepting, remanding, and rejecting RFCs, enforcing the community code of conduct, administering `,
                `community assets (such as repositories), and adopting or removing projects from under the community umbrella.`,
            ].join(""),
        },
        {
            start_date: new Date(Date.parse("2022-09-01")),
            end_date: new Date(Date.parse("2023-05-01")),
            place: "PacketFabric",
            place_website: "https://packetfabric.com/",
            role: "Junior Software Engineer",
            description: [
                `Part of the core development team. Worked on network-oriented APIs and all the shenanigans that make it work, like asynchronous `,
                `task workers, message queues, and data storage. Additionally, I reworked the CI flows and the image build and deployment processes. `,
                `Provided customer-centric support with any development-related issues.`,
            ].join(""),
        },
        {
            start_date: new Date(Date.parse("2021-12-01")),
            end_date: new Date(Date.parse("2022-06-01")),
            place: "SilentForce",
            place_website: "https://silentforce.io/",
            role: "Security Engineering Intern",
            description: [
                `Performed offensive security testing of web and mobile applications. Helped with the development of a tool that allowed `,
                `continuous monitoring, discovery and testing of customer assets in an automated fashion. Other notable projects are the `,
                `development of an API that exposed all gathered data to the customers and an asynchronous web spider that crawled customer `,
                `web services in search of sensitive data that could be used by attackers.`,
            ].join(""),
        },
        {
            start_date: new Date(Date.parse("2021-10-01")),
            end_date: new Date(Date.parse("2022-10-01")),
            place: "Sanic Framework (OSS project)",
            place_website: "https://sanic.dev",
            role: "Core Developer",
            description: [
                `Was invited to join the core developers team after having made several contributions to the project and offering frequent `,
                `help to other users in the Sanic Discord server. The main contribution I made to this project while being core developer `,
                `was making the usage of uvloop at runtime optional, which until then could only be opted out of during the installation step.`,
            ].join(""),
        },
        {
            start_date: new Date(Date.parse("2019-03-01")),
            end_date: new Date(Date.parse("2021-09-01")),
            place: "VATSIM (non-profit)",
            place_website: "https://www.vatsim.net/",
            role: "Software Developer",
            description: [
                `Contributed to the development of several of services; most notably to their proprietary audio simulation codec known as `,
                `"Audio For VATSIM (AFV)". This codec is used by all of their clients and simulates real-life VHF and HF radio transmissions, `,
                `decreasing audio quality as distance between transmitter and receiver increases in the simulation.`,
            ].join(""),
        },
    ];
    const education = [
        {
            start_date: null,
            end_date: null,
            place: "U-TAD",
            place_website: "https://u-tad.com",
            role: "Bachelor in Software Engineering (Cybersecurity)",
            description:
                "Honours in Introduction to Programming I & II, Introduction to Cybersecurity, Distributed Systems Programming and Networking.",
        },
    ];
</script>

<svelte:head>
    <title>My Resume</title>
    <meta name="description" content="Have a look at my resume" />
</svelte:head>

<section>
    <div class="home">
        <div class="title">
            <h1>
                <Backlink href="/" />
                Resume
            </h1>
            <Divider />
        </div>
        <p>
            I'm an enthusiastic software engineer with proven ability to write
            maintainable, future proof and easily-testable code, and have
            demonstrated being a quick-learning engineer and an excellent team
            player (references available). I excel in any type of coding with
            Python, but specialize in async API development using frameworks
            such as <ExternalLink inline={true} href="https://sanic.dev"
                >Sanic</ExternalLink
            >. My proudest achievement to date is having reduced an app's
            execution time from 2h to 15min by converting it to async and making
            it send concurrent requests.
        </p>
    </div>
    <div class="articles">
        <Article title="Experience" id="experience">
            <Timeline items={experience} />
        </Article>
        <Article title="Education" id="education">
            <Timeline items={education} />
        </Article>
    </div>
</section>

<style>
    section {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .home > .title {
        background-color: var(--color-bg);
        position: sticky;
        top: 0;
        width: 100%;
    }

    .articles {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
