import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import ShortcutIcon from '../public/favicon_io/favicon.ico'
import ShortcutIcon1 from '../public/favicon_io/apple-touch-icon.png'
import ShortcutIcon2 from '../public/favicon_io/favicon-32x32.png'
import ShortcutIcon3 from '../public/favicon_io/favicon-16x16.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ElectroBuys | Home</title>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
      </Head>
      <Navbar />
      <Header />
    </div>
  )
}
