import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
