import React, { Fragment } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
    return (
        <Fragment>
            <Flex p='2' borderBottom='1px' borderColor='gray.100'>
                <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
                    <Link href='/' className='pl-2'>Real Estate</Link>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
                        <MenuList>
                            <Link href='/'>
                                <MenuItem icon={<FcHome />}>Home</MenuItem>
                            </Link>
                            <Link href='/search'>
                                <MenuItem icon={<BsSearch />}>Search</MenuItem>
                            </Link>
                            <Link href='/search?purpose=for-sale'>
                                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                            </Link>
                            <Link href='/search?purpose=for-rent'>
                                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Fragment >
    )
}

export default Navbar