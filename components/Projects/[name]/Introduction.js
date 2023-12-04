// Next
import Image from 'next/image';
import Link from 'next/link';

// CSS
import styles from './Introduction.module.css';

const Introduction = ({ data, name }) => {
	return (
		<>
			<div className={styles.imageContainer}>
				<Image
					src={`/data/projects/${name}/${name}.png`}
					alt='Project Image'
					fill='responsive'
					priority={true}
					sizes='70vw'
				/>
			</div>
			<br />
			<h2 className={styles.title}>{data.title}</h2>
			<p className='text-center'>
				{data.description}
				<br />
				<br />
				<span className={styles.tech}>
					<span style={{ fontWeight: 'bold' }}>Tech stack:&nbsp;</span>
					<span style={{ display: 'flex', flexWrap: 'wrap' }}>
						{data.techStack.map((tech, idx) => {
							return <span key={idx}>{tech}&nbsp;|&nbsp;</span>;
						})}
					</span>
				</span>
			</p>

			<div className={styles.btnContainer}>
				<a
					href={data.githubUrl}
					target='_blank'
					className={'btn ' + styles.githubBtn}
					style={{
						borderColor: 'rgb(var(--foreground))',
					}}
				>
					<i className='fa-brands fa-github'></i>
					&nbsp;&nbsp;Github
				</a>
				{data.liveUrl && (
					<Link href={name + '/live'} className={'btn ' + styles.liveBtn}>
						<i className='fa-solid fa-globe'></i>
						&nbsp;&nbsp;Live
					</Link>
				)}
			</div>
		</>
	);
};

export default Introduction;
