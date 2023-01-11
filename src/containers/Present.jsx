import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from '@styles/Present.module.scss';

const Present = () => {
	return (
		<Box className={styles.Present}>
			<Typography className={styles.h1} variant="h1" gutterBottom>
				<span className={styles.span}>Hi, </span><br className={styles.space} />
				<span className={styles.span}>I'm</span><span className={styles.span}><a className={styles.letter}> W</a>ilmer</span><br />
				<a className={styles.letter2}>W</a>
				<span className={styles.span2}>Web Developer</span>
			</Typography>
			<Typography className={styles['h1-grey']}>
				<span className={styles.profesion}>Front End Developer / React Developer</span>
			</Typography>
			<Box className={styles['content-button']} mt={14}>
				<button className={styles.button}><a className={styles.contact} href="/contact">Contact me!</a></button>
			</Box>
		</Box>
	);
};

export default Present;
