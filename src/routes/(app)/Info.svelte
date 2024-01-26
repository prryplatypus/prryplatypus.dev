<main>
    <div class="sections">
        <article>
            <h2>About me</h2>
            <div class="content">
                <p>
                    Hi there, nice to meet you! I'm a software engineer who's
                    currently working in network automation. Here's a quick
                    overview about me:
                </p>
                <ul>
                    <li>
                        Passion for open-source. Have contributed in several
                        occassions to different OSS projects; mainly those in
                        the Python community.
                    </li>
                    <li>
                        Always advocate for following well-known design
                        principles (SOLID, DRY, YAGNI, etc...). Writing clean
                        code guarantees not only that it's easy to read, but
                        also that it's easy to maintain, expand and test.
                    </li>
                    <li>
                        Iterating over and over again is essential. Nobody gets
                        things perfect on the first try. Code is something that
                        should be "alive".
                    </li>
                </ul>
                <p>
                    In general, I excel in any type of coding with Python, but I
                    have the most experience with async frameworks such as
                    Sanic, FastAPI or discord.py.
                </p>
                <p>
                    Please reach out if you have work opportunities, want to
                    collaborate, or just want to say hi!
                </p>
            </div>
        </article>

        <article>
            <h2>Experience</h2>
            <div class="content">
                <section class="item">
                    <h3>Ziply Fiber</h3>
                    <ul>
                        <li>
                            <span class="item-details">
                                <h4>Software Engineer</h4>
                                <p>July 2023 - Present</p>
                            </span>
                            <p>
                                Part of the network automation team. Working on
                                internal APIs and tools to automate network
                                operations.
                            </p>
                        </li>
                    </ul>
                </section>
                <section class="item">
                    <h3>PacketFabric</h3>
                    <ul>
                        <li>
                            <span class="item-details">
                                <h4>Junior Software Engineer</h4>
                                <p>September 2022 - May 2023</p>
                            </span>
                            <p>
                                Part of the core development team. Worked on
                                network-oriented APIs and all the shenanigans
                                that make it work, like asynchronous task
                                workers, message queues, and data storage.
                                Additionally, I reworked the CI / CD flows and
                                the image build and deployment processes.
                                Provided customer-centric support with any
                                development-related issues.
                            </p>
                        </li>
                    </ul>
                </section>
                <section class="item">
                    <h3>SilentForce</h3>
                    <ul>
                        <li>
                            <span class="item-details">
                                <h4>Security Engineering Intern</h4>
                                <p>December 2021 - June 2022</p>
                            </span>
                            <p>
                                Performed offensive security testing of web and
                                mobile applications. Helped with the development
                                of a tool that allowed continuous monitoring,
                                discovery and testing of customer assets in an
                                automated fashion. Other notable projects are
                                the development of an API that exposed all
                                gathered data to the customers and an
                                asynchronous web spider that crawled customer
                                web services in search of sensitive data that
                                could be used by attackers.
                            </p>
                        </li>
                    </ul>
                </section>
                <section class="item">
                    <h3>Sanic Framework (open-source, volunteering)</h3>
                    <ul>
                        <li>
                            <span class="item-details">
                                <h4>Steering Council</h4>
                                <p>October 2022 - Present</p>
                            </span>
                            <p>
                                Ensured the smooth operation of the community
                                projects by removing impediments, and assisting
                                members as needed. Voiced any concerns,
                                suggestions or ideas. Handled RFCs, enforced the
                                community's code of conduct and administered
                                community assets.
                            </p>
                        </li>
                        <li>
                            <span class="item-details">
                                <h4>Core Developer</h4>
                                <p>October 2021 - October 2022</p>
                            </span>
                            <p>
                                Submitted various contributions to the project,
                                assisted the community and handled bug reports.
                                Contributed to various discussions about the
                                long-term direction of the project.
                            </p>
                        </li>
                    </ul>
                </section>
                <section class="item">
                    <h3>VATSIM Network (non-profit, volunteering)</h3>
                    <ul>
                        <li>
                            <span class="item-details">
                                <h4>Software Developer</h4>
                                <p>March 2019 - September 2021</p>
                            </span>
                            <p>
                                Contributed to the development of several of
                                services; most notably to their proprietary
                                audio simulation codec known as "Audio For
                                VATSIM (AFV)". This codec is used by all of
                                their clients and simulates real-life VHF and HF
                                radio transmissions, decreasing audio quality as
                                distance between transmitter and receiver
                                increases in the simulation.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <h2>Education</h2>
            <div class="content">
                <section class="item">
                    <h3>
                        U-tad | Centro Universitario de Tecnología y Arte
                        Digital
                    </h3>
                    <ul>
                        <li>
                            <span class="item-details">
                                <h4>
                                    Bachelor in Software Engineering
                                    (Cybersecurity specialization)
                                </h4>
                            </span>
                            <p>
                                Honors in Introduction to Programming I & II,
                                Introduction to Cybersecurity, Distributed
                                Systems Programming and Networking subjects.
                            </p>
                        </li>
                    </ul>
                </section>
            </div>
        </article>
    </div>
</main>

<style>
    main {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    article {
        margin: 4rem 2.5rem;
    }

    .sections {
        margin: 0 2.5rem;
    }

    .sections article:first-child {
        margin-top: 0;
    }

    .content {
        margin-left: 0.5rem;
    }

    .item {
        margin: 2rem 0;
    }

    .item-details {
        display: flex;
        flex-direction: row;
    }

    .item-details h4 {
        flex: 1;
    }

    .item-details p {
        font-size: var(--font-size-1);
        margin: 0;
    }

    @media (min-width: 64rem) {
        article {
            margin: 4rem 0;
        }
        .sections {
            margin: 0 10rem;
            max-width: 83rem;
        }
    }
</style>
