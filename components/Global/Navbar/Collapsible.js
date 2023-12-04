'use client';

// Next
import Link from 'next/link';

// Animation
import { motion } from 'framer-motion';

// Hooks
import { useEffect, useState } from 'react';

const Collapsible = ({
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
		<div
			className='collapse navbar-collapse justify-content-end'
			id='navbarSupportedContent'
		>
			{width < 1024 ? (
				<div>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link
								className='nav-link'
								aria-current='page'
								href='/'
								style={active === 'about' ? aboutStyles.itemText : {}}
							>
								About Me
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								href='/skills'
								style={active === 'skills' ? skillsStyles.itemText : {}}
							>
								Skills
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								href='/projects'
								style={active === 'projects' ? projectsStyles.itemText : {}}
							>
								Projects
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								href='/blog'
								style={active === 'blog' ? blogStyles.itemText : {}}
							>
								Blog
							</Link>
						</li>
					</ul>
				</div>
			) : (
				<motion.div initial={{ x: 1000 }} animate={{ x: 0 }}>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link
								className='nav-link'
								aria-current='page'
								href='/'
								style={active === 'about' ? aboutStyles.itemText : {}}
							>
								About Me
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								href='/skills'
								style={active === 'skills' ? skillsStyles.itemText : {}}
							>
								Skills
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								href='/projects'
								style={active === 'projects' ? projectsStyles.itemText : {}}
							>
								Projects
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								href='/blog'
								style={active === 'blog' ? blogStyles.itemText : {}}
							>
								Blog
							</Link>
						</li>
					</ul>
				</motion.div>
			)}
		</div>
	);
};

export default Collapsible;
