import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import nProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react'
import Layouts from '@/layouts/Layouts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Real Estate</title>
      </Head>
      <ChakraProvider>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </ChakraProvider>
    </Fragment>
  )
}
