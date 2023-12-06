// CSS
import styles from './Experience.module.css';

// Components
import ExperienceCard from './ExperienceCard';

const Experience = ({ data }) => {
	return (
		<div className={styles.container}>
			{Object.keys(data).map((exp, index) => {
				return <ExperienceCard key={index} {...data[exp]} />;
			})}
		</div>
	);
};

export default Experience;
