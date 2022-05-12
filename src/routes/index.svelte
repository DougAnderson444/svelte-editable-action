<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { editable, colors } from '@douganderson444/svelte-editable-action';

	let comment = 'But I want custom colors!';
</script>

<div use:editable={{ colors }}>
	<h1>Svelte Text Editor Usage & Guide</h1>
	Click 🖱️ on me to
	<i> edit this</i> <b>text</b> by
	<a href="https://twitter.com/DougAnderson444" target="_blank">@DougAnderson444</a>

	<input type="text" style:width="20em" placeholder="Clicking an input does not affect editing" />

	<div style:display="block">
		<h2 class="lucky">click me:</h2>
		Custom Fonts are editable too!
	</div>
	<p>Just add the css in your svelte style section as usual</p>

	{#each comment.split(' ') as word, w}
		<li style:color={colors[w]}>{word}</li>
	{/each}

	<p>That's ok, just add your own colors or import it from the module</p>
	<pre>
        {`
        import { colors } from "@douganderson444/svelte-editable-action"
        `}
    </pre>

	<p>
		<b>Note:</b>
		<br />
		<i>
			You can use the same color for multiple elements, just add the same color to the array
			multiple times
		</i>
	</p>
</div>

<style>
	:root {
		font-family: Arial, Helvetica, sans-serif;
		--size: 1vw;
		--drop1: #65f28300;
		--drop2: #dac24900;
		--fuzzy: rgba(106, 241, 120, 0);
	}
	input {
		margin-top: 2em;
		display: block;
	}
	h1,
	h1,
	.lucky {
		font-family: 'Luckiest Guy', sans-serif;
		text-transform: uppercase;
	}

	@font-face {
		font-family: 'Luckiest Guy';
		font-style: normal;
		font-weight: 400;
		src: url(https://fonts.gstatic.com/s/luckiestguy/v17/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2)
			format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	.fatboy {
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			Segoe UI Symbol, 'Noto Color Emoji';
		line-height: 1;
	}
</style>
