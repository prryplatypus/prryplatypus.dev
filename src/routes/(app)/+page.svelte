<script>
	import InternalLink from "$lib/components/InternalLink.svelte";
</script>

<svelte:head>
	<title>Hello, I'm Néstor 👋</title>
	<meta name="description" content="Welcome to my website" />
</svelte:head>

<section>
	<div class="home">
		<h1>Hello, I'm Néstor 👋</h1>
		<div class="filler" />
		<ul>
			<InternalLink href="/resume">See my resume</InternalLink>
			<!-- <InternalLink href="/timer">Exams timer</InternalLink> -->
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

	.filler {
		background-image: repeating-linear-gradient(
			-45deg,
			transparent,
			transparent 8px,
			currentcolor 8px,
			currentcolor 10px
		);
		padding: 0px;
		aspect-ratio: 10 / 1;
		border: 0px none;
		display: block;
		color: inherit;
	}
</style>
