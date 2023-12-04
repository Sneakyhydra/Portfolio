'use client';

// Next
import Link from 'next/link';

// CSS
import { Card } from 'react-bootstrap';
import styles from './Project.module.css';

const Project = ({
	name,
	title,
	description,
	techStack,
	githubUrl,
	liveUrl,
}) => {
	return (
		<Card className={styles.card}>
			<Card.Img
				variant='top'
				src={`/data/projects/${name}/${name}.png`}
				className={styles.image}
			/>
			<Card.Body>
				<Card.Title className={styles.title}>{title}</Card.Title>
				<Card.Text>
					{description}
					<br />
					<br />
					<span className={styles.tech}>
						<span style={{ fontWeight: 'bold' }}>Tech stack:&nbsp;</span>
						<span style={{ display: 'flex', flexWrap: 'wrap' }}>
							{techStack.map((tech, idx) => {
								return <span key={idx}>{tech}&nbsp;|&nbsp;</span>;
							})}
						</span>
					</span>
				</Card.Text>

				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<div className={styles.btnContainer}>
						<a
							href={githubUrl}
							target='_blank'
							className={'btn ' + styles.githubBtn}
							style={{
								borderColor: '#e1eff6',
							}}
						>
							<i className='fa-brands fa-github'></i>
							&nbsp;&nbsp;Github
						</a>
						{liveUrl && (
							<Link
								href={'projects/' + name + '/live'}
								className={'btn ' + styles.liveBtn}
							>
								<i className='fa-solid fa-globe'></i>
								&nbsp;&nbsp;Live
							</Link>
						)}
					</div>

					<Link href={'projects/' + name} className={'btn ' + styles.readBtn}>
						Read More
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Project;
