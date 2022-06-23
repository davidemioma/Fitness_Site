import "../styles/globals.css";
import store from "../store/store";
import { Provider } from "react-redux";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Nav />

        <Component {...pageProps} />

        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
