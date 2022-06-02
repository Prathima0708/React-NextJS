
import '../styles/globals.css';
import SimpleBottomNavigation from '../src/Movies/MainNav';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
   
      <Component {...pageProps} />
    
      // </Layout>
  );
}

export default MyApp; 