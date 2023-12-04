// Data
import about from '@/public/data/about/about.json';

// Components
import Brand from './Brand';
import Toggler from './Toggler';
import Collapsible from './Collapsible';

// CSS
import styles from './Navbar.module.css';

const Navbar = ({ active }) => {
	const activeTextColor = '#FFFFFF';

	const colors = {
		about: 'rgb(var(--about-primary))',
		skills: 'rgb(var(--skills-primary))',
		projects: 'rgb(var(--projects-primary))',
		blog: 'rgb(var(--blog-primary))',
	};

	const boxShadowWithoutColor = '0 9px 7px -6px ';

	const aboutStyles = {
		brandText: {
			color: colors.about,
		},
		itemText: {
			color: activeTextColor,
			boxShadow: boxShadowWithoutColor + colors.about,
		},
	};

	const skillsStyles = {
		brandText: {
			color: colors.skills,
		},
		itemText: {
			color: activeTextColor,
			boxShadow: boxShadowWithoutColor + colors.skills,
		},
	};

	const projectsStyles = {
		brandText: {
			color: colors.projects,
		},
		itemText: {
			color: activeTextColor,
			boxShadow: boxShadowWithoutColor + colors.projects,
		},
	};

	const blogStyles = {
		brandText: {
			color: colors.blog,
		},
		itemText: {
			color: activeTextColor,
			boxShadow: boxShadowWithoutColor + colors.blog,
		},
	};

	return (
		<>
			<nav
				className={
					'navbar navbar-dark navbar-expand-lg bg-transparent ' + styles.navbar
				}
			>
				<div className={styles.container + ' container-fluid'}>
					<Brand
						brand={about.name}
						active={active}
						aboutStyles={aboutStyles}
						skillsStyles={skillsStyles}
						projectsStyles={projectsStyles}
						blogStyles={blogStyles}
					/>
					<Toggler />
					<Collapsible
						active={active}
						aboutStyles={aboutStyles}
						skillsStyles={skillsStyles}
						projectsStyles={projectsStyles}
						blogStyles={blogStyles}
					/>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
