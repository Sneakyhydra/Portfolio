// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

// Font
import { Nunito_Sans } from 'next/font/google';

const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
});

// JS
import BootstrapClient from '@/components/Global/BootstrapClient';
import Script from 'next/script';

export const metadata = {
	title: 'Dhruv Rishishwar',
	description: 'Portfolio of Dhruv Rishishwar',
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={nunito_sans.className}
				style={{
					background: 'rgb(var(--background))',
					color: 'rgb(var(--foreground))',
					width: '100vw',
					overflowX: 'hidden',
				}}
			>
				{children}
				<Script
					src='https://kit.fontawesome.com/598489a826.js'
					crossorigin='anonymous'
				/>
				<BootstrapClient />
			</body>
		</html>
	);
}
