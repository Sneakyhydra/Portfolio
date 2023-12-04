'use client';

// Hooks
import { useEffect, useState } from 'react';

const ThisWebsite = () => {
	const [width, setWidth] = useState(1024);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div
			style={{
				width: '100vw',
				margin: '1.5rem auto',
			}}
		>
			{width < 1024 ? (
				<div
					style={{
						padding: '1rem',
						paddingTop: '2rem',
						border: '1px solid rgb(var(--projects-primary))',
						borderRadius: '5px',
						boxShadow: '0 0 10px 0 rgba(var(--projects-primary), 0.5)',
						width: '90%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						margin: '0 auto',
					}}
				>
					<p style={{ margin: 0 }}>
						This Website is &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							Made with Next.js
						</span>
						&nbsp; and optimized for fast performance.
					</p>
					<hr />
					<p style={{ margin: 0 }}>
						Uses &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							Bootstrap 5
						</span>
						&nbsp; and lots of custom styling for creating a &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							responsive
						</span>
						&nbsp; and &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							beautiful
						</span>
						&nbsp; website.
					</p>
					<hr />
					<p style={{ margin: 0 }}>
						Projects and Blog &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							render MD files
						</span>
						&nbsp; for easy changes.
					</p>
				</div>
			) : (
				<div
					style={{
						padding: '1.5rem 1rem',
						border: '1px solid rgb(var(--projects-primary))',
						borderRadius: '5px',
						boxShadow: '0 0 10px 0 rgba(var(--projects-primary), 0.5)',
						width: '90%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '0 auto',
					}}
				>
					<p style={{ margin: 0 }}>
						This Website is &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							Made with Next.js
						</span>
						&nbsp; and optimized for fast performance.
					</p>
					<hr />
					<p style={{ margin: 0 }}>
						Uses &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							Bootstrap 5
						</span>
						&nbsp; and lots of custom styling for creating a &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							responsive
						</span>
						&nbsp; and &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							beautiful
						</span>
						&nbsp; website.
					</p>
					<hr />
					<p style={{ margin: 0 }}>
						Projects and Blog &nbsp;
						<span style={{ color: 'rgb(var(--projects-primary))' }}>
							render MD files
						</span>
						&nbsp; for easy changes.
					</p>
				</div>
			)}
		</div>
	);
};

export default ThisWebsite;
