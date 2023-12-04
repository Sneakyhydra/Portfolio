// Data
import articles from '@/public/data/articles/articles.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import Articles from '@/components/Blog/Articles';

export default function Index() {
	return (
		<>
			<Navbar active='blog' />
			<main style={{ width: '100vw', overflowX: 'hidden' }}>
				<Articles data={articles} />
			</main>
		</>
	);
}
