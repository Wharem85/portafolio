import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '@styles/Present.module.scss';

const Present = () => {
	return (
		<Box className={styles.Present}>
			<Typography className={styles.h1} variant="h1" gutterBottom>
				<span>Hi,</span><br />
				<span>I'm</span> <span><a className={styles.letter}>W</a>ilmer</span><br />
				<a className={styles.letter2}>W</a>
				<span>Web Developer</span>
			</Typography>
			<Typography className={styles['h1-grey']}>
				<span>Front End Developer / React Developer</span>
			</Typography>
			<Box className={styles['content-button']} mt={14}>
				<button className={styles.button}><span>Contact me!</span></button>
			</Box>
		</Box>
	);
};

export default Present;
