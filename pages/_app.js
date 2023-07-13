import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsappChat from "@/components/WhatsappChat";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Cabs in amritsar</title>
        <link rel="icon"  href="/favicon.png"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Book a taxi, self-driving car, bike, and tour guide with cabs in Amritsar at low prices!"/>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <WhatsappChat/>
      <Footer />
      <ToastContainer 
      autoClose={25000} />
    </>
  );
}
