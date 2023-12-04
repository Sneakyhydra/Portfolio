// Data
import projects from '@/public/data/projects/projects.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import GoBack from '@/components/Global/GoBack';
import Introduction from '@/components/Projects/[name]/Introduction';
import DisplayContent from '@/components/Projects/[name]/DisplayContent';

// CSS
import styles from './page.module.css';

export default function Index({ params }) {
	const project = projects[params.name];

	return (
		<>
			<Navbar active='projects' />
			<main className={styles.container}>
				<GoBack to='/projects' color='rgb(var(--projects-primary))' />
				<Introduction data={project} name={params.name} />
				<DisplayContent data={project} name={params.name} />
			</main>
		</>
	);
}
