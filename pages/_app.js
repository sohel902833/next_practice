import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h2>From Here</h2> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
