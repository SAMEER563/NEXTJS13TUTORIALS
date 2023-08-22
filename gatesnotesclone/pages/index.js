import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Hero />
      <Section />
      <Footer />
    </div>
    )
}
