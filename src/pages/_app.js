import "../../styles/globals.css";
import "../../styles/grid.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/global/Navbar";
import SEO from "../components/global/SEO";
import NProgress from "nprogress";
import Router from "next/router";
import Footer from "../components/global/Footer";
import { SessionProvider } from "next-auth/react";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

export default function App({ Component, pageProps, session }) {
  return pageProps.hackathon === true ? (
    <>
      <SessionProvider session={session}>
        <SEO />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  ) : (
    <>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <SEO />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
