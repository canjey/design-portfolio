import './App.css';
import Homepage from './pages/Homepage';
import theme from './Theme/theme';
import { ThemeProvider } from 'styled-components';



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Homepage />
      </ThemeProvider>
    </>

  );
}

export default App;
