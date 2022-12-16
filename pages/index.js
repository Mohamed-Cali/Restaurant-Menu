import Head from 'next/head'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} id='home'>
      <Head>
        <title>Peri-Peri Chicken</title>
        <meta name="description" content="peri-peri spicy grilled chicken delicious" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
