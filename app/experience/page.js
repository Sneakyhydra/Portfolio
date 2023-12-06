// Data
import experience from '@/public/data/experience/experience.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import Experience from '@/components/Experience/Experience';
import Wave from '@/components/Experience/Wave';

export default function Index() {
	return (
		<>
			<Navbar active='exp' />
			<main>
				<Experience data={experience} />
			</main>
			<Wave />
		</>
	);
}
