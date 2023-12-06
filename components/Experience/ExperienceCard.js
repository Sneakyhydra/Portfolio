'use client';

// Next
import Image from 'next/image';

// CSS
import { Card } from 'react-bootstrap';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({
	title,
	url,
	logo,
	startDate,
	endDate,
	location,
	role,
	responsibilities,
	technologies,
}) => {
	return (
		<Card className={styles.card}>
			<Card.Header className={'text-center ' + styles.header}>
				{startDate + ' --- ' + endDate}
			</Card.Header>
			<Card.Body className={styles.body}>
				<a href={url} target='_blank' className={styles.imgContainer}>
					<Image src={logo} alt={title} fill={true} />
				</a>
				<div className={styles.description}>
					<Card.Title>{role}</Card.Title>
					<Card.Subtitle className={'mb-2 ' + styles.subtitle}>
						{technologies.join(', ')}
					</Card.Subtitle>
					<ul style={{ paddingTop: '0.5rem' }}>
						{responsibilities.map((responsibility, index) => {
							return <li key={index}>{responsibility}</li>;
						})}
					</ul>
				</div>
			</Card.Body>
			<Card.Footer className={'text-center ' + styles.footer}>
				{location}
			</Card.Footer>
		</Card>
	);
};

export default ExperienceCard;
