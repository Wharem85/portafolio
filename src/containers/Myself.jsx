import React from 'react';
import {Box, Typography} from '@mui/material';
import styles from '@styles/Myself.module.scss';

const Myself = () => {
	return (
		<Box className={styles.Myself}>
			<Typography className={styles.about} variant="h2" gutterBottom>
				<span>About Me</span>
			</Typography>
			<Typography className={styles.text} variant="h5" gutterBottom>
				<span>Hi, I'm Wilmer Monterrozo, a guy who is passionate</span><br />
				<span>about software development, who loves challenges and</span><br/>
				<span>doesn't give up easily. A self-taught, proactive, honest and</span><br/>
				<span>responsible person, who every day strives to learn something</span><br/>
				<span>new in order to improve himself and reach new challenges.</span>
			</Typography>
		</Box>
	);
};

export default Myself;
