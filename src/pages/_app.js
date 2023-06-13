import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";
import LoadingBar from '@/components/LoadingBar'

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
          <LoadingBar/>
            <Component {...pageProps} />
        </Provider>
    );
}