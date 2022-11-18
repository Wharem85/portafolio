import React from 'react';
import Sidebar from '@components/Sidebar';
import { createTheme, ThemeProvider, Box } from "@mui/material";

const about = () => {
	const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

	return (
		<ThemeProvider theme={darkTheme}>
			<Sidebar />
		</ThemeProvider>
	);
};

export default about;
