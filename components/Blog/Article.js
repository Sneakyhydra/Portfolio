// Next
import Link from 'next/link';

// CSS
import { Card } from 'react-bootstrap';
import styles from './Article.module.css';

const Article = ({ name, title, description }) => {
	return (
		<Card className={styles.card}>
			<Card.Body>
				<Card.Title className={styles.title}>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>

				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<Link href={'blog/' + name} className={'btn ' + styles.readBtn}>
						Read More
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Article;
