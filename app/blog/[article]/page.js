// Data
import articles from '@/public/data/articles/articles.json';

// Components
import Navbar from '@/components/Global/Navbar/Navbar';
import GoBack from '@/components/Global/GoBack';
import Introduction from '@/components/Blog/[article]/Introduction';
import DisplayContent from '@/components/Blog/[article]/DisplayContent';

// CSS
import styles from './page.module.css';

export default function Index({ params }) {
	const article = articles[params.article];

	return (
		<>
			<Navbar active='blog' />
			<main className={styles.container}>
				<GoBack to='/blog' color='rgb(var(--blog-primary))' />
				<Introduction data={article} />
				<DisplayContent data={article} name={params.article} />
			</main>
		</>
	);
}
