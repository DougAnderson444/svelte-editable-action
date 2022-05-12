import Editor from 'cl-editor/src/Editor.svelte';

let inlineEditor: Editor;

export function editable(node: HTMLElement, params) {
	// the node has been mounted in the DOM
	node.addEventListener('click', showEditor);

	function showEditor(event: MouseEvent) {
		// 			if(event.target !== node &&
		// 				event.target.parentNode !== node ) return
		if (event.target instanceof HTMLInputElement || event.target.isContentEditable) return;

		let html = node.innerHTML;
		node.innerHTML = '';
		inlineEditor = new Editor({
			target: node,
			props: {
				// customize if you like:
				actions: [
					'viewHtml',
					'b',
					'i',
					'u',
					'sup',
					'sub',
					'h1',
					'h2',
					'ol',
					'ul',
					'hr',
					'left',
					'right',
					'center',
					'justify',
					'a',
					'image',
					'forecolor',
					'backcolor',
					'removeFormat',
					{
						name: 'copy',
						icon: '&#128203;',
						title: 'Copy',
						result: () => {
							const selection = window.getSelection();
							if (!selection.toString().length) {
								const range = document.createRange();
								range.selectNodeContents(editor2.refs.editor);
								selection.removeAllRanges();
								selection.addRange(range);
							}
							editor2.exec('copy');
						}
					}
				],
				height: 'auto',
				html: html,
				...params
			}
		});

		node.removeEventListener('click', showEditor);

		inlineEditor.$on('blur', () => {
			html = inlineEditor.getHtml();
			inlineEditor.$destroy();
			node.innerHTML = html;
			node.addEventListener('click', showEditor);
		});
	}

	return {
		destroy() {
			// the node has been removed from the DOM
			node.removeEventListener('click', showEditor);
		}
	};
}
