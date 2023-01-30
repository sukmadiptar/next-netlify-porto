/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Navbar } from '@components/Navbar'
import Footer from '@components/Footer'
import { Container, Flex } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sukma Pradipta Ramadhan</title>
        <meta name="Portofolio of Sukma" content="portofolio" />
        <link rel="shortcut icon" href="/netliheart.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxW="container.xl">
        <header>
          <Navbar />
        </header>
      </Container>
      <main>
        <Container maxW="container.xl">
          <Flex>test</Flex>
        </Container>
      </main>
      <Footer />
    </>
  )
}
