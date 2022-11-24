import React from 'react';
import data from '@utils/proyectsData';
import Image from 'next/image';
import {Box, ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styles from '@styles/Work.module.scss';

const Work = () => {
	return (
		<Box className={styles.Work}>
			<ImageList className={styles['image-list']} sx={{ width: '100%', height: '100%' }} cols={4}>
				{data.map((data) => (
					<ImageListItem className={styles['item-list']} key={data.id}>
						<Image
							src={data.img}
							width={450} height={200}
							layout="intrinsic"
							srcSet={data.img}
							alt={data.title}
							loading="lazy"
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
