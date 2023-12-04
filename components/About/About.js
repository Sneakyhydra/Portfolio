// CSS
import styles from './About.module.css';

// Components
import ProfilePic from './ProfilePic';
import Description from './Description';

const About = ({ data }) => {
	return (
		<div className={styles.container}>
			<ProfilePic data={data} />
			<Description data={data} />
		</div>
	);
};

export default About;
