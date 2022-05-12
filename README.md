# Svelte Editable as an Action Directive

A svelte [action](https://svelte.dev/docs#template-syntax-element-directives-use-action) to make any html element editable, with a toolbar.

Make any HTML element and children editable, complete with a toolbar compliments of [nenadpnc/cl-editor](https://github.com/nenadpnc/cl-editor) under the hood.

## Use

Basic usage:

```js
// index.svelte
<script>
    import { editable } from "@douganderson444/svelte-editable-action"
</script>

<div use:editable>
    Click to edit me using the popup toolbar
</div>
```

Advanced use: (see ./src/routes/index.svelte)

```js
<script>
    import { editable, colors } from "@douganderson444/svelte-editable-action"

</script>

<div use:editable={{colors}}>
	<h1>
	Svelte Text Editor Usage
	</h1>
  Click 🖱️ on me to <i>edit this</i> <b>text</b> by <a href='https://twitter.com/DougAnderson444' target='_blank'>@DougAnderson444</a>

	<input type="text" style:width="20em"  placeholder='Clicking an input does not affect editing'>

</div>


<style>
	input {
		margin-top: 2em;
	}
</style>

```

## Demo

[https://svelte.dev/repl/cb4ea37a28eb4204afbcf7b47287c0f6?version=3.48.0](https://svelte.dev/repl/cb4ea37a28eb4204afbcf7b47287c0f6?version=3.48.0)
