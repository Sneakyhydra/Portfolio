// Next
import Link from 'next/link';

// Data
import projects from '@/public/data/projects/projects.json';

export default function Index({ params }) {
	const project = projects[params.name];

	if (!project) {
		return <h1>Project not found</h1>;
	}

	if (!project.liveUrl) {
		return <h1>Project not live</h1>;
	}

	return (
		<div
			style={{
				height: '100vh',
				width: '100%',
				margin: '0',
				padding: '0',
				overflow: 'hidden',
				background: 'rgb(var(--foreground))',
			}}
		>
			<Link
				href={`/projects/${params.name}`}
				style={{ alignItems: 'center', width: '100%' }}
				className='btn btn-danger'
			>
				<i className='fa-solid fa-right-from-bracket'></i>
				&nbsp; Leave Demo
			</Link>
			<iframe
				src={project.liveUrl}
				width='100%'
				height='100%'
				style={{ border: 'none' }}
			></iframe>
		</div>
	);
}
