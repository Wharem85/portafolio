import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import Experience from './Experience';
import styles from '@styles/List.module.scss';

const ListSkill = () => {
	return (
		<Box className={styles.List}>
			<Experience />
			<List className={styles['list-content']} sx={{ width: '100%', maxWidth: 360, display: 'flex' }}>
				<Box className={styles.content}>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>ReactJs</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>Javascript</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>React Native</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>NodeJs</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>Docker</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>Frontend</ListItemText>
					</ListItem>
				</Box>
				<Box>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>Backend</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>NextJs</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>TailwindCss</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>Material Ui</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>Webpack</ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}>REST API's</ListItemText>
					</ListItem>
				</Box>
			</List>
		</Box>
	);
};

export default ListSkill;
