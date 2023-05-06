import React, { Fragment } from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
    purpose: string;
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
    buttonText: string;
    linkName: string;
    imageUrl: string;
}

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }: BannerProps) => {
    return (
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
            <Image src={imageUrl} width={500} height={300} alt='banner-image' />
            <Box p='5'>
                <Text className='text-gray-500 text-sm font-medium uppercase'>{purpose}</Text>
                <Text className='text-lg pt-3 font-bold'>{title1}<br />{title2}</Text>
                <Text className='text-base py-3 text-gray-700'>{desc1}<br />{desc2}</Text>
                <Button className='text-sm bg-gray-200 border-2 border-black'>
                    <Link href={linkName}>
                        {buttonText}
                    </Link>
                </Button>
            </Box>
        </Flex>
    )
}

export default Banner