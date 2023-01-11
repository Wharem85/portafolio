import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';
import styles from '@styles/Experience.module.scss';

const Experience = () => {
	return (
		<Box className={styles.Experience}>
			<Card className={styles.contentCard} sx={{ minWidth:275, backgroundColor: '#181818'}}  variant="outlined">
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
						- Odoo module development and modification Python
					</Typography>
				</CardContent>
			</Card>
			<Card sx={{ minWidth:275, backgroundColor: '#181818'}} className={styles.contentCard} variant="outlined">
				<CardContent>
					<Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
						Freelance
					</Typography>
					<Typography variant="h5" component="div">
						School
					</Typography>
					<Typography sx={{mb:1.5}}>
						Full Stack Developer
					</Typography>
					<Typography>
						Creation of a complete platform and database <br className={styles.space}/>
						for a school with an estimated 350 students.<br/>
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default Experience;
