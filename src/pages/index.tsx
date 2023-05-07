import React, { Fragment } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex } from '@chakra-ui/react';
import { Banner, Properties } from '@/components';
import { IProperties } from '@/interfaces/properties';
import { API_URL, getAPIService } from '@/services/api.services';

interface Property {
  propertiesForSale: IProperties[];
  propertiesForRent: IProperties[];
}

interface GetStaticPropsReturn extends Omit<ReturnType<typeof getStaticProps>, 'props'> {
  props: Property;
}

const Home: NextPage<Property> = ({ propertiesForSale, propertiesForRent }) => {
  return (
    <Fragment>
      <Box>
        <Banner
          purpose='RENT A HOME'
          title1='Rental Homes for'
          title2='Everyone'
          desc1='Explore Aprtment Villas, Homes'
          desc2='and more'
          buttonText='Explore Rending'
          linkName='/search?purpose=for-rent'
          imageUrl='https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg'
        />
        <Flex className='flex-wrap'>
          {propertiesForRent.map((property: IProperties) =>
            <Properties key={property.id} property={property} />
          )}
        </Flex>
        <Banner
          purpose='BUY A HOME'
          title1='Buy Your Dream'
          title2='Home'
          desc1='Explore Aprtment Villas, Homes'
          desc2='and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill'
        />
        <Flex className='flex-wrap'>
          {propertiesForSale.map((property: IProperties) => (
            <Properties key={property.id} property={property} />
          ))}
        </Flex>
      </Box>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<Property> = async () => {
  const propertiesForSale = await getAPIService(`${API_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6}`);
  const propertiesForRent = await getAPIService(`${API_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6}`);
  return {
    props: {
      propertiesForSale: propertiesForSale.hits || [],
      propertiesForRent: propertiesForRent.hits || []
    }
  } as GetStaticPropsReturn;
};

export default Home;