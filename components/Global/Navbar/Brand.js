'use client';

// Hooks
import { useEffect, useState } from 'react';

// Next
import Link from 'next/link';

// Animation
import { motion } from 'framer-motion';

// CSS
import styles from './Brand.module.css';

const Brand = ({
	brand,
	active,
	aboutStyles,
	skillsStyles,
	projectsStyles,
	blogStyles,
}) => {
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
				<div>
					<Link
						className={styles.brand + ' navbar-brand'}
						href='/'
						style={
							active === 'about'
								? aboutStyles.brandText
								: active === 'skills'
								? skillsStyles.brandText
								: active === 'projects'
								? projectsStyles.brandText
								: blogStyles.brandText
						}
					>
						{brand}
					</Link>
				</div>
			) : (
				<motion.div initial={{ x: -1000 }} animate={{ x: 0 }}>
					<Link
						className={styles.brand + ' navbar-brand'}
						href='/'
						style={
							active === 'about'
								? aboutStyles.brandText
								: active === 'skills'
								? skillsStyles.brandText
								: active === 'projects'
								? projectsStyles.brandText
								: blogStyles.brandText
						}
					>
						{brand}
					</Link>
				</motion.div>
			)}
		</>
	);
};

export default Brand;
