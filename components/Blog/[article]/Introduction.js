// CSS
import styles from './Introduction.module.css';

const Introduction = ({ data }) => {
	return (
		<>
			<h2 className={styles.title}>{data.title}</h2>
			<p className='text-center'>{data.description}</p>
		</>
	);
};

export default Introduction;
