'use client';

// CSS
import styles from './Description.module.css';
import { Dropdown, Modal } from 'react-bootstrap';

// Hooks
import { useState } from 'react';

// Components
import Resume from './Resume/Resume';

// Downloader
import useDownloader from 'react-use-downloader';

const Description = ({ data }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { download } = useDownloader();

	const fileUrl = '/data/about/resume.pdf';
	const filename = 'Dhruv_Rishishwar_Resume.pdf';

	return (
		<>
			<div className={styles.container}>
				<p>{data.description}</p>
				<div className={styles.btnContainer}>
					<button
						className={styles.resumeBtn + ' rounded btn'}
						onClick={handleShow}
						style={{
							textDecoration: 'none',
							width: '200px',
						}}
					>
						Resume
					</button>
					<Dropdown style={{ width: '200px' }}>
						<Dropdown.Toggle
							variant='none'
							id='contact'
							style={{ width: '200px' }}
							className={styles.dropdownBtn}
						>
							Contact Me
						</Dropdown.Toggle>

						<Dropdown.Menu
							style={{ backgroundColor: 'rgb(var(--background))' }}
						>
							{Object.entries(data.contact).map(([key, value]) => {
								return (
									<Dropdown.Item
										target='_blank'
										key={key}
										href={value.href}
										className={styles.dropdownItem}
										style={{
											textAlign: 'left',
										}}
									>
										<i className={value.icon + ' ' + styles.icon}></i>
										&nbsp;&nbsp;
										{value.text}
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>

			<Modal show={show} onHide={handleClose} fullscreen='lg-down' size='lg'>
				<Modal.Header
					style={{
						background: 'rgb(var(--background))',
						color: 'rgb(var(--foreground))',
					}}
				>
					<Modal.Title>Dhruv_Rishishwar_Resume</Modal.Title>
					<button
						className={styles.closeBtn + ' btn rounded'}
						onClick={handleClose}
					>
						&#10005;
					</button>
				</Modal.Header>
				<Modal.Body
					style={{
						background: 'rgb(var(--background))',
						color: 'rgb(var(--foreground))',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<button
						className={'btn rounded ' + styles.resumeBtn}
						onClick={() => download(fileUrl, filename)}
					>
						Download Resume
					</button>
					<Resume />
					<button
						className={'btn rounded ' + styles.resumeBtn}
						onClick={() => download(fileUrl, filename)}
					>
						Download Resume
					</button>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Description;
