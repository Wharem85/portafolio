import React from 'react';
import Sidebar from '@components/Sidebar';
import Presentation from '@components/Presentation';
import Myself from '@components/Myself';
import styles from '@styles/Home.module.scss';
import { createTheme, ThemeProvider, Box } from "@mui/material";

const Home = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Sidebar />
      <Box className={styles.Home}>
        <Box className={styles.home}>
          <Presentation />
          <Myself />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Home;
