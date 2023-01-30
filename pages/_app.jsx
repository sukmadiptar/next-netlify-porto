import '@styles/globals.css'
import Router from 'next/router'
import nProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

nProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routerChangeError', () => nProgress.done())

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Application
