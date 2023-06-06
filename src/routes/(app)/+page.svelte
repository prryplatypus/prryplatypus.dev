<script>
	import InternalLink from "$lib/components/InternalLink.svelte";
	import MetaTags from "$lib/components/MetaTags.svelte";
</script>

<MetaTags title="Hello, I'm Néstor 👋" description="Welcome to my website" />

<section>
	<div class="home">
		<h1>Hello, I'm Néstor 👋</h1>
		<div class="filler" />
		<ul>
			<li><InternalLink href="/resume">See my resume</InternalLink></li>
			<!-- <li><InternalLink href="/timer">Exams timer</InternalLink></li> -->
		</ul>
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
		min-height: 100vh;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		color: inherit;
		padding: 0;
		margin: 0.5em -0.5em;
	}

	li {
		margin: 0.5em 0;
	}

	.filler {
		background-image: repeating-linear-gradient(
			-45deg,
			transparent,
			transparent 8px,
			currentcolor 8px,
			currentcolor 10px
		);
		padding: 0;
		aspect-ratio: 10 / 1;
		border: 0 none;
		display: block;
		color: inherit;
	}
</style>
