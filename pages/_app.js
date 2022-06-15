import Layout from "../components/PizzaOrder/components/Layout";
import Header from "../components/QuizApp/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    <Component {...pageProps} />
    //</Layout>
  );
}

export default MyApp;
