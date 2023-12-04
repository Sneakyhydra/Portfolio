// CSS
import styles from './Skills.module.css';

// Components
import SkillsSvg from './SkillsSvg';
import Description from './Description';

const Skills = ({ data }) => {
	return (
		<div className={styles.container}>
			<SkillsSvg />
			<Description data={data} />
		</div>
	);
};

export default Skills;
