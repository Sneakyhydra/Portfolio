'use client';

// MDX Plugins
import {
	headingsPlugin,
	listsPlugin,
	linkPlugin,
	quotePlugin,
	thematicBreakPlugin,
	markdownShortcutPlugin,
	MDXEditor,
} from '@mdxeditor/editor';

const Editor = ({ markdown, editorRef }) => {
	return (
		<MDXEditor
			ref={editorRef}
			markdown={markdown}
			plugins={[
				headingsPlugin(),
				listsPlugin(),
				linkPlugin(),
				quotePlugin(),
				thematicBreakPlugin(),
				markdownShortcutPlugin(),
			]}
			contentEditableClassName='content-editable-disabled'
		/>
	);
};

export default Editor;
