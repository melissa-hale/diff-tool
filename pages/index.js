import Head from 'next/head'
import Image from 'next/image'
import Compare from '../components/Compare'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nacelle Space Comparison Tool</title>
        <meta name="description" content="Nacelle Space Comparison Tool" />
      </Head>

      <main className={styles.main}>
        <div>
          Nacelle Space Comparison Tool
        </div>
        <Compare />
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span>
          <a href="https://nacelle.com/">Nacelle</a>
        </span>
      </footer>
    </div>
  )
}
