'use client';

// Hooks
import { useEffect, useState } from 'react';

// CSS
import styles from './Description.module.css';

const Description = ({ data }) => {
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
			{width < 600 ? (
				<div
					className={styles.container}
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					{Object.entries(data).map(([key, value]) => {
						return (
							<div
								key={key}
								style={{
									padding: '0.5rem',
									borderBottom: '1px solid rgb(var(--foreground))',
								}}
							>
								<span
									style={{
										fontSize: 'clamp(1rem, 1.25vw, 1.75rem)',
										textAlign: 'left',
										padding: '1rem',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									{key}&nbsp;&nbsp;&nbsp;
								</span>
								<span
									style={{
										display: 'flex',
										gap: '1rem',
										flexWrap: 'wrap',
										padding: '1rem',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									{value.map((skill, idx) => {
										return (
											<span
												key={idx}
												className={styles.btn + ' btn btn-sm'}
												style={{
													color: 'rgb(var(--foreground))',
												}}
											>
												<span className={styles.iconContainer}>
													<i className={skill.icon + ' ' + styles.icon}></i>
												</span>
												&nbsp;
												<span className={styles.textContainer}>
													{skill.name}
												</span>
											</span>
										);
									})}
								</span>
							</div>
						);
					})}
				</div>
			) : (
				<table className={styles.container}>
					<tbody>
						{Object.entries(data).map(([key, value]) => {
							return (
								<tr
									key={key}
									style={{
										padding: '0.5rem',
										borderBottom: '1px solid rgb(var(--foreground))',
									}}
								>
									<td
										style={{
											fontSize: 'clamp(1rem, 1.25vw, 1.75rem)',
											width: 'fit-content',
											textAlign: 'left',
											padding: '1rem',
											verticalAlign: 'top',
										}}
									>
										{key}&nbsp;&nbsp;&nbsp;
									</td>
									<td
										style={{
											display: 'flex',
											gap: '1rem',
											flexWrap: 'wrap',
											padding: '1rem',
										}}
									>
										{value.map((skill, idx) => {
											return (
												<button
													key={idx}
													className={styles.btn + ' btn btn-sm'}
													style={{
														color: 'rgb(var(--foreground))',
													}}
												>
													<span className={styles.iconContainer}>
														<i className={skill.icon + ' ' + styles.icon}></i>
													</span>
													&nbsp;
													<span className={styles.textContainer}>
														{skill.name}
													</span>
												</button>
											);
										})}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
};

export default Description;
