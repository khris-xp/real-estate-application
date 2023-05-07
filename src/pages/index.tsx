import React, { Fragment } from 'react';
import { NextPage, GetStaticProps } from 'next';
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
          desc1=' Explore from Apartments, builder floors, villas'
          desc2='and more'
          buttonText='Explore Renting'
          linkName='/search?purpose=for-rent'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Flex flexWrap='wrap' className='flex mx-auto container justify-center'>
          {propertiesForRent.map((property: IProperties) => <Properties property={property} key={property.id} />)}
        </Flex>
        <Banner
          purpose='BUY A HOME'
          title1=' Find, Buy & Own Your'
          title2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />
        <Flex flexWrap='wrap' className='flex mx-auto container justify-center'>
          {propertiesForSale.map((property: IProperties) => <Properties property={property} key={property.id} />)}
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