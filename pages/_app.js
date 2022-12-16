import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout id='home'>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
