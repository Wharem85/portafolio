import React, {useState} from 'react';
import Sidebar from '@components/Sidebar';
import Presentation from '@components/Presentation';
import Myself from '@components/Myself';
import { createTheme, ThemeProvider } from "@mui/material";

const Home = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Sidebar setMode={setMode} mode={mode} />
      <Presentation />
      <Myself />
    </ThemeProvider>
  )
}

export default Home;
