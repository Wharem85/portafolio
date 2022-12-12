import React from 'react';
import Sidebar from '@components/Sidebar';
import About from '@containers/About';
import { createTheme, ThemeProvider, Box } from "@mui/material";
import styles from '@styles/About.module.scss';

const about = () => {
	const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

	return (
		<ThemeProvider theme={darkTheme}>
			<Sidebar />
			<Box className={styles.Aboutme}>
				<Box className={styles.aboutme}>
					<About />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default about;
