'use client';

// Next
import dynamic from 'next/dynamic';

// Hooks
import { Suspense, useState, useEffect } from 'react';

// CSS
import '@mdxeditor/editor/style.css';
import styles from './DisplayContent.module.css';

// Components
const EditorComp = dynamic(() => import('../../Global/EditorComponent'), {
	ssr: false,
});

const DisplayContent = ({ data, name }) => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		const request = async () => {
			const response = await fetch(`/data/projects/${name}/${name}.md`);
			const c = await response.text();
			setContent(c);
		};

		request();
	}, [name]);

	useEffect(() => {
		const changeLinks = () => {
			const links = document.querySelectorAll('a');
			links.forEach((link) => {
				if (link.getAttribute('dir') === 'ltr') {
					link.setAttribute('target', '_blank');
				}
			});
		};

		const disableEditor = () => {
			const editor = document.querySelector('.content-editable-disabled');
			if (editor) {
				editor.setAttribute('contenteditable', false);
				changeLinks();
			} else {
				setTimeout(disableEditor, 500);
			}
		};

		disableEditor();
		changeLinks();
	}, []);

	if (!data) {
		return <h1>Project not found</h1>;
	}

	if (!content) {
		return (
			<div
				className='d-flex justify-content-center'
				style={{ marginTop: '3rem' }}
			>
				<div
					className='spinner-grow'
					role='status'
					style={{ color: 'rgb(var(--projects-primary))' }}
				>
					<span className='sr-only'></span>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.content}>
			<Suspense fallback={null}>
				<EditorComp markdown={content} />
			</Suspense>
		</div>
	);
};

export default DisplayContent;
