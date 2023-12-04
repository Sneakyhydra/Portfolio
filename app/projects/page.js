// Data
import projects from '@/public/data/projects/projects.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import ThisWebsite from '@/components/Projects/ThisWebsite';
import Projects from '@/components/Projects/Projects';
import Wave from '@/components/Projects/Wave';

export default function Index() {
	return (
		<>
			<Navbar active='projects' />
			<main style={{ width: '100vw', overflowX: 'hidden' }}>
				<ThisWebsite />
				<Projects data={projects} />
			</main>
			<Wave />
		</>
	);
}
