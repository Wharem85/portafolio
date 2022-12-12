import React from 'react';
import {Box} from '@mui/material';
import Present from '@containers/Present';
import PortfolioImage from '@containers/PortfolioImage';
import PortalfolioText from '@containers/PortfolioText';
import styles from '@styles/Home.module.scss';

const Presentation = () => {
	return (
		<Box className={styles.Presentation}>
			<Present />
			<PortalfolioText />
			<PortfolioImage />
		</Box>
	);
};

export default Presentation;
