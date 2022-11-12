import React from 'react';
import {Box} from '@mui/material';
import Present from '@containers/Present';
import PortfolioImage from '@containers/PortfolioImage';
import PortalfolioText from '@containers/PortfolioText';

const Presentation = () => {
	return (
		<Box ml={19}>
			<Present />
			<PortalfolioText />
			<PortfolioImage />
		</Box>
	);
};

export default Presentation;
