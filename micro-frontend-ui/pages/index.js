import Head from 'next/head'
import Prompts from '../components/prompts'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontend Demo App 1</title>
        <meta name="description" content="This is an app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Prompts />
    </div>
  )
}
