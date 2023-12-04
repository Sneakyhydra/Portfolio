// Next
import Link from 'next/link';

// CSS
import styles from './GoBack.module.css';

const GoBack = ({ to, color }) => {
	return (
		<Link href={to} className={styles.icon} style={{ color: color }}>
			<i className='fa-solid fa-backward'></i>
		</Link>
	);
};

export default GoBack;
