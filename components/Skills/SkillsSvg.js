// Next
import Image from 'next/image';

// CSS
import styles from './SkillsSvg.module.css';

const SkillsSvg = () => {
	return (
		<div className={styles.svgContainer}>
			<Image
				src='/svgs/skills.svg'
				alt='Skills Display Picture'
				fill='true'
				sizes='(min-width: 900px) 900px, 20vw'
				priority
			/>
		</div>
	);
};

export default SkillsSvg;
