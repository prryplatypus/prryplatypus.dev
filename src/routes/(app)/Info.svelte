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
    </div>
</main>

<style>
    main {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .sections {
        margin: 2rem 2.5rem;
    }

    .sections:first-child {
        margin-top: 0;
    }

    .content {
        margin-left: 0.5rem;
    }

    @media (min-width: 64rem) {
        .sections {
            margin: 2rem 10rem;

            max-width: 83rem;
        }
    }
</style>
