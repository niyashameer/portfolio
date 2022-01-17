import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Social from '../shared/component/social'
import Hero from '../components/homePage/Hero'

export default function Home() {
  return (
    <div className={`text-lightBlack ${styles.container}`}>
      <Head>
        <title>Niya Shameer | Portfolio</title>
        <meta name="description" content="Personal Portfolio of Niya Shameer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
     
    </div>
  )
}
