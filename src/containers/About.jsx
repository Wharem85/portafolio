import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '@styles/About.module.scss';

const About = () => {
	return (
		<Box className={styles.content}>
			<AboutTitle />
			<Box className={styles['about-text']}>
				<Typography className={styles.text} variant="h5" gutterBottom>
					<span>I am a Front-End developer based in Guatemala. I have a great passion</span><br />
					<span>for programming, also for creating intuitive and dynamic user experiences.</span><br />
				</Typography>
				<br />
				<Typography className={styles.text} variant="h5" gutterBottom>
					<span>Well organized person, problem solver. A fan of video games, animated</span><br />
					<span>series and family person.</span><br />
					<span>Interested in the whole spectrum of frontend and backend to work on </span><br />
					<span>ambitious projects with positive and respectful people.</span><br />
				</Typography>
			</Box>
		</Box>
	);
};

const AboutTitle = () => {
	return(
		<Box className={styles.About}>
			<Box className={styles.header}>
				<Box className={styles['glitch-window']}>
					<Typography className={styles['glitch-window']} variant="h1" gutterBottom>
						<span className={styles.span}>About Me</span>
					</Typography>
				</Box>
				<Typography className={styles['glitch-window']} variant="h1" gutterBottom>
					<span className={styles.span}>About Me</span>
				</Typography>
				<Typography className={styles.glitch} variant="h1" gutterBottom>
					<span className={styles.span}>About Me</span>
				</Typography>
			</Box>
		</Box>
	);
};

export default About;
