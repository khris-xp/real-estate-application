import React, { Fragment, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import { SearchFilter, Properties } from '@/components';
import { API_URL, getAPIService } from '@/services/api.services';
import { IProperties } from '@/interfaces/properties';

interface Property {
    properties: IProperties[];
}

const Search: NextPage<Property> = ({ properties }) => {
    const [searchFilter, setSearchFilter] = useState<boolean>(false);
    const router: NextRouter = useRouter();
    return (
        <Fragment>
            <Box>
                <Flex cursor='pointer' bg='gray.100'
                    borderBottom='1px' borderColor='gray.200' p='2'
                    fontWeight='black' fontSize='lg'
                    justifyContent='center'
                    alignItems='center'
                    onClick={() => setSearchFilter((prevFilters: boolean) => !prevFilters)}
                >
                    <Text>Search Property by Filters</Text>
                    <Icon as={BsFilter} paddingLeft='2' w='7' />
                </Flex>
                {searchFilter && <SearchFilter />}
                <Text fontSize='2xl' p='4' fontWeight='bold'>
                    Properties {router.query.purpose === 'for-sale' ? 'for Sale' : 'for Rent'}
                </Text>
                <Flex flexWrap='wrap' className='flex mx-auto container justify-center'>
                    {properties.map((property: any) => (<Properties key={property.id} property={property} />))}
                </Flex>
                {properties.length === 0 && (<Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
                    <Image src='/noresult.svg' width='300' height='300' alt='no-result-image' />
                </Flex>)}
            </Box>
        </Fragment>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext) => {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await getAPIService(`${API_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits,
        },
    };
}

export default Search