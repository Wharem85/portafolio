import React from 'react';
import Sidebar from '@components/Sidebar';
import Contact from '@containers/Contact';
import { createTheme, ThemeProvider, Box } from "@mui/material";
import styles from '@styles/PageContact.module.scss';

const contact = () => {
	const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

	return (
		<ThemeProvider theme={darkTheme}>
			<Sidebar />
			<Box className={styles['Contact-content']}>
				<Box className={styles['contact-container']}>
					<Contact />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default contact;
