import '@styles/globals.css'
import Router from 'next/router'
import nProgress from 'nprogress'

nProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routerChangeError', () => nProgress.done())

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
