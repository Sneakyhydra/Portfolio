'use client';

// Hooks
import { useState, useEffect } from 'react';

// CSS
import './Resume.css';

// PDF
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url
).toString();

const options = {
	cMapUrl: '/cmaps/',
	standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 800;

export default function Sample() {
	const [file, setFile] = useState('/data/about/resume.pdf');
	const [numPages, setNumPages] = useState();

	const [width, setWidth] = useState(1024);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<div className='resume'>
			<div className='resume_container'>
				<div className='resume_container_document'>
					<Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						options={options}
					>
						{Array.from(new Array(numPages), (el, index) => (
							<Page
								key={`page_${index + 1}`}
								pageNumber={index + 1}
								width={width ? 0.9 * Math.min(width, maxWidth) : 0.9 * maxWidth}
							/>
						))}
					</Document>
				</div>
			</div>
		</div>
	);
}
