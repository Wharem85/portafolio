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
						<ListItemText className={styles.text}><span>ReactJs</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>Javascript</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>React Native</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>NodeJs</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>Docker</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>Frontend</span></ListItemText>
					</ListItem>
				</Box>
				<Box>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>Backend</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>NextJs</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>TailwindCss</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>Material Ui</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>Webpack</span></ListItemText>
					</ListItem>
					<ListItem component="li" className={styles.item}>
						<ListItemText className={styles.text}><span>REST API's</span></ListItemText>
					</ListItem>
				</Box>
			</List>
		</Box>
	);
};

export default ListSkill;
