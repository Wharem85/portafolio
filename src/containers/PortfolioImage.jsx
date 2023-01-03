import React from 'react';
import {Box, ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import proyectsData from '@utils/proyectsData';
import styles from '@styles/PortfolioImage.module.scss';

const PortfolioImage = () => {
	return (
		<Box className={styles.PortfolioImage}>
			<ImageList className={styles.list} cols={4}>
				{proyectsData.map((data) => (
					<ImageListItem className={styles.item} key={data.id}>
						<img
							src={data.img}
							className={styles.img}
							alt={data.title}
						/>
						<ImageListItemBar
							title={data.title}
							subtitle={data.author}
							className={styles.listBar}
							actionIcon={
								<IconButton
									sx={{color: 'rgba(255, 255, 255, 0.54)'}}
									aria-label={`info about ${data.title}`}
									href={data.direction}
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

export default PortfolioImage;
