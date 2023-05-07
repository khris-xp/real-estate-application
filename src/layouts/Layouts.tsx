import React, { Fragment } from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

const Layouts = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxWidth='1280px' m='aut0'>
                <header>
                    Navbar
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </Box>
        </Fragment>
    )
}

export default Layouts