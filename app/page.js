// Data
import about from '@/public/data/about/about.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import About from '@/components/About/About';
import Wave from '@/components/About/Wave';

export default function Home() {
	return (
		<>
			<Navbar active='about' />
			<main>
				<About data={about} />
			</main>
			<Wave />
		</>
	);
}
