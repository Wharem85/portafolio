import React from 'react';
import {Box, Typography} from '@mui/material';
import styles from '@styles/PortfolioText.module.scss';

const PortfolioText = () => {
	return (
		<Box className={styles.PortfolioText}>
			<Typography className={styles.potTitle} variant="h2" gutterBottom>
				<span>My Portfolio</span>
			</Typography>
			<Typography className={styles.portSubtitle} variant="h5" gutterBottom>
				<span>A small gallery of recent projects chosen by me. All these</span><br />
				<span>projects have been done mostly with JavasCript, with freamworks</span><br />
				<span>like ReactJs, VueJs, MaterialUI, NodeJs, Sequelize, Webpack...</span>
			</Typography>
		</Box>
	);
};

export default PortfolioText;
