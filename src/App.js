import React from 'react'
import Home from '../src/pages/home/Home'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Guides from './pages/home/Guides';


const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Home />
      {/* <Guides exact path='/guides' /> */}
    </div>
    </ThemeProvider>

  )
}
export default App
