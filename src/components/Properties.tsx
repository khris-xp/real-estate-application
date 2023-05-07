import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { IProperties } from '@/interfaces/properties';

const DefaultImage: string = 'https://media.istockphoto.com/id/1256023751/photo/beautiful-new-home-with-big-front-porch-and-entry.jpg?s=612x612&w=0&k=20&c=F85sCh1MTrxp0Um-fR9Y6_KopPYCuZJXzkCLbGsJkg4=';

interface PropertiesProps {
    property: IProperties;
}

const Properties = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }: PropertiesProps) => {
    return (
        <Fragment>
            <Link href={`/property/${externalID}`} passHref>
                <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
                    <Box>
                        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt={title} height={1000} width={1000} className='w-96 h-64' />
                    </Box>
                    <Box className='w-full'>
                        <Flex justifyContent='space-between' alignItems='center' className='pt-2'>
                            <Flex alignItems='center'>
                                <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                                <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
                            </Flex>
                            <Box>
                                <Avatar size='sm' src={agency.logo.url} />
                            </Box>
                        </Flex>
                        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                        </Flex>
                        <Text fontSize='lg'>
                            {title.length > 30 ? title.slice(0, 30) + '...' : title}
                        </Text>
                    </Box>
                </Flex>
            </Link>
        </Fragment>
    )
}

export default Properties