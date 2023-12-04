// Data
import skills from '@/public/data/skills/skills.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import Skills from '@/components/Skills/Skills';
import Wave from '@/components/Skills/Wave';

export default function Index() {
	return (
		<>
			<Navbar active='skills' />
			<main>
				<Skills data={skills} />
			</main>
			<Wave />
		</>
	);
}
