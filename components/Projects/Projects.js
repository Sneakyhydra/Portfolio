// CSS
import styles from './Projects.module.css';

// Components
import Project from './Project';

const Projects = ({ data }) => {
	return (
		<div className={styles.container}>
			{Object.keys(data).map((project, index) => (
				<Project key={index} {...data[project]} name={project} />
			))}
		</div>
	);
};

export default Projects;
