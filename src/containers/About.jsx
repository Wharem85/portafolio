import React from 'react';
import { Box, Typography } from '@mui/material';
import AnimatedTag from '@containers/AnimatedTag';
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
					<span>Well organized person, problem solver. A fan of video games,</span><br />
					<span>animated series and family person. Interested in the whole</span><br />
					<span>spectrum of frontend and backend to work on </span><br />
					<span>ambitious projects with positive and respectful people.</span><br />
					<br />
					<span>A guy who is passionate about software development,</span><br />
					<span>who loves challenges and doesn't give up easily. A self-taught,</span><br/>
					<span>proactive, honest and responsible person, who every day</span><br/>
					<span>strives to learn something new in order to improve himself and</span><br/>
					<span>reach new challenges.</span>
				</Typography>
			</Box>
			<Box className={styles.tag}>
				<AnimatedTag />
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
