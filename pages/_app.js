import Layout from '../Udemy-Example/components/layout/Layout';
import '../styles/globals.css';
import SimpleBottomNavigation from '../src/Movies/MainNav';

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
   
      <Component {...pageProps} />
    
    //  </Layout>
  );
}

export default MyApp; 