'use client';

// Hooks
import { useEffect, useState } from 'react';

// Animation
import { motion } from 'framer-motion';

// CSS
import styles from './Articles.module.css';

// Components
import Article from './Article';

const Articles = ({ data }) => {
	const [width, setWidth] = useState(1024);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{width < 1024 ? (
				<div className={styles.container}>
					{Object.keys(data).map((article, index) => (
						<Article key={index} {...data[article]} name={article} />
					))}
				</div>
			) : (
				<motion.div
					className={styles.container}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.1,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					{Object.keys(data).map((article, index) => (
						<Article key={index} {...data[article]} name={article} />
					))}
				</motion.div>
			)}
		</>
	);
};

export default Articles;
