<script>
    export let title = "";
    export let description = "";
    export let keywords = "";

    export let domain = "prryplatypus.dev";
    export let image = "/assets/favicon/apple-touch-icon.png";

    let url = `https://${domain}`;
    let image_ = `${url}${image}`;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Néstor Pérez" />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image_} />

    <!-- Twitter Meta Tags -->
    <meta property="twitter:domain" content={domain} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image_} />

    <slot />
</svelte:head>
