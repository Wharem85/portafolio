import React from 'react';
import Sidebar from '@components/Sidebar';
import { createTheme, ThemeProvider, Box } from "@mui/material";
import Skills from '@components/Skills';
import styles from '@styles/Skill.module.scss'

const skills = () => {
	const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

	return (
		<ThemeProvider theme={darkTheme}>
			<Sidebar />
			<Box className={styles.Skill}>
				<Box className={styles.skill}>
					<Skills />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default skills;
