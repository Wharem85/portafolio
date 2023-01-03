import React from 'react';
import data from '@utils/proyectsData';
import {Box, ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styles from '@styles/Work.module.scss';

const Work = () => {
	return (
		<Box className={styles.Work}>
			<ImageList className={styles['image-list']}  >
				{data.map((data) => (
					<ImageListItem className={styles['item-list']} key={data.id}>
						<img
							src={data.img}
							className={styles.img}
							alt={data.title}
						/>
						<ImageListItemBar
							title={data.title}
							subtitle={data.author}
							actionIcon={
								<IconButton
									sx={{color: 'rgba(255, 255, 255, 0.54)'}}
									aria-label={`info about ${data.title}`}
									href={`${data.direction}`}
								>
									<InfoIcon />
								</IconButton>
							}
						>
						</ImageListItemBar>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

export default Work;
