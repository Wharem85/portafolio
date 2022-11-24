import React from 'react';
import Sidebar from '@components/Sidebar';
import Work from '@components/Work';
import { createTheme, ThemeProvider } from "@mui/material";

const work = () => {
	const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

	return (
		<ThemeProvider theme={darkTheme}>
			<Sidebar />
			<Work />
		</ThemeProvider>
	);
};

export default work;
