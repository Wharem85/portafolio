import React from 'react';
import {Box} from '@mui/material';
import Contact from '@containers/Contact';
import styles from '@styles/Home.module.scss';

const Myself = () => {
	return (
		<Box className={styles.Myself} >
			<Contact />
		</Box>
	);
};

export default Myself;
