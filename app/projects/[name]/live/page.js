'use client';

// Next
import { useRouter } from 'next/navigation';

// Data
import projects from '@/public/data/projects/projects.json';

export default function Index({ params }) {
	const project = projects[params.name];
	const router = useRouter();

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
			}}
		>
			<button
				onClick={() => router.back()}
				style={{ alignItems: 'center', width: '100%' }}
				className='btn btn-danger'
			>
				<i className='fa-solid fa-right-from-bracket'></i>
				&nbsp; Leave Demo
			</button>
			<iframe
				src={project.liveUrl}
				width='100%'
				height='100%'
				style={{ border: 'none' }}
			></iframe>
		</div>
	);
}
