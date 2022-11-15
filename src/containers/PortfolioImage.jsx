import React from 'react';
import {Box, ImageList, ImageListItem, ImageListItemBar, IconButton} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import proyectsData from '@utils/proyectsData';
import Image from 'next/image';
import styles from '@styles/PortfolioImage.module.scss';

const PortfolioImage = () => {
	return (
		<Box className={styles.PortfolioImage}>
			<ImageList className={styles.list} sx={{ width: '100%', height: 550 }} cols={4}>
				{proyectsData.map((data) => (
					<ImageListItem className={styles.item} key={data.id}>
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

export default PortfolioImage;
