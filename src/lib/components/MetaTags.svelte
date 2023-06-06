<script>
    export let title = "";
    export let description = "";
    export let image = "/apple-touch-icon.png";
    export let domain = "prryplatypus.dev";
</script>

<title>{title}</title>
<meta name="description" content={description} />

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://{domain}" />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content={domain} />
<meta property="twitter:url" content="https://{domain}" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />

<!-- Meta Tags Generated via https://opengraph.dev -->
