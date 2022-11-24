import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';

const Experience = () => {
	return (
		<Box sx={{display: 'flex'}} mb={8}>
			<Card sx={{ minWidth:275, backgroundColor: '#181818', marginRight: 2}}  variant="outlined">
				<CardContent>
					<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
						Freelance
					</Typography>
					<Typography variant="h5" component="div">
						Bavaria Motors
					</Typography>
					<Typography sx={{mb:1.5}}>
						Developer
					</Typography>
					<Typography>
						- Odoo module development and modification
					</Typography>
				</CardContent>
			</Card>
			<Card sx={{ minWidth:275, backgroundColor: '#181818'}} variant="outlined">
				<CardContent>
					<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
						Freelance
					</Typography>
					<Typography variant="h5" component="div">
						Bavaria Motors
					</Typography>
					<Typography sx={{mb:1.5}}>
						Full Stack Developer
					</Typography>
					<Typography>
						Creation of a complete platform and database<br/>
						for a school with an estimated 350 students.<br/>
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Experience;
