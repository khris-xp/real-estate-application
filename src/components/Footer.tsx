import React, { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {
    return (
        <Fragment>
            <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://github.com/khris-xp" className="hover:underline">khris-xp</Link>. All Rights Reserved.</span>
            </Box>
        </Fragment>
    )
}

export default Footer