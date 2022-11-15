import React from 'react';
import {Box} from '@mui/material';
import MyselfText from '@containers/Myself';
import Contact from '@containers/Contact';

const Myself = () => {
	return (
		<Box ml={19}>
			<MyselfText />
			<Contact />
		</Box>
	);
};

export default Myself;
