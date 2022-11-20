import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '../theme';
import Navbar from '../components/global/Navbar';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Footer from '../components/global/Footer';
import Cart from '../components/global/Cart';

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Cart />
          <Footer />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
