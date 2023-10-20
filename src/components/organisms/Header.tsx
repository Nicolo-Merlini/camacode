import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoxWidth from '../atoms/BoxWidth'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Cancel } from 'iconoir-react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/Logo-Camacode.svg'

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }
    return (
        <>
            <Drawer
                isOpen={isDrawerOpen}
                placement={'top'}
                onClose={() => closeDrawer()}
            >
                <DrawerOverlay
                />
                <DrawerContent
                    borderBottomRadius={'3xl'}
                >
                    <DrawerHeader
                        color={'secondaryBlack.text'}
                        pt={5} px={6}
                        pb={2}
                        display={'flex'}
                        justifyContent={'space-between'}
                    >
                        <Text
                            textStyle={'h2'}
                            fontWeight={'bold'}
                            marginY={'auto'}
                        >
                            {/* Menu */}
                        </Text>
                        <Button
                            borderRadius={'full'}
                            h={12}
                            w={12}
                            p={0}
                            variant={'grayPrimary'}
                            onClick={closeDrawer}
                            _focus={{
                                boxShadow: 'none'
                            }}
                        >
                            <Cancel
                                strokeWidth={2.8}
                                className='w-7 h-7'
                            />
                        </Button>
                    </DrawerHeader>
                    <DrawerBody
                        minH={'25vh'}
                        mt={'10px'}
                        pb={'35px'}
                    >
                        <Box
                            display={'grid'}
                            gap={'20px'}
                        >
                            <Link
                                href='/'
                            >
                                <Box
                                    width={'fit-content'}
                                    textStyle={['h3', 'h3', 'h3']}
                                    fontWeight={'bold'}
                                    userSelect={'none'}
                                    color={'dark'}
                                    onClick={closeDrawer}
                                >
                                    Home
                                </Box>
                            </Link>
                            <Link
                                href='/#servizi'
                            >
                                <Box
                                    width={'fit-content'}
                                    textStyle={['h3', 'h3', 'h3']}
                                    fontWeight={'bold'}
                                    userSelect={'none'}
                                    color={'dark'}
                                    onClick={closeDrawer}
                                >
                                    Servizi
                                </Box>
                            </Link>
                            <Link
                                href='/#tech-stack'
                            >
                                <Box
                                    width={'fit-content'}
                                    textStyle={['h3', 'h3', 'h3']}
                                    fontWeight={'bold'}
                                    userSelect={'none'}
                                    color={'dark'}
                                    onClick={closeDrawer}
                                >
                                    Tech Stack
                                </Box>
                            </Link>
                            <Link
                                href='/#progetti'
                            >
                                <Box
                                    width={'fit-content'}
                                    textStyle={['h3', 'h3', 'h3']}
                                    fontWeight={'bold'}
                                    userSelect={'none'}
                                    color={'dark'}
                                    onClick={closeDrawer}
                                >
                                    Progetti
                                </Box>
                            </Link>
                            <Link
                                href={'/#contatti'}
                            >
                                <Button
                                    variant={'black'}
                                    size={'md'}
                                    borderRadius={'10px'}
                                    width={'fit-content'}
                                >
                                    <Text
                                        textStyle={'h3'}
                                        fontWeight={'semibold'}
                                        onClick={closeDrawer}
                                    >
                                        Contattaci
                                    </Text>

                                </Button>
                            </Link>


                        </Box>

                    </DrawerBody>
                </DrawerContent>
            </Drawer >
            <header className="bg-[#FFF7F7] lg:pt-10 "> {/* sticky lg:static top-0 z-50 */}
                <BoxWidth
                    className='hidden lg:grid '
                >
                    <nav
                        className="flex  mx-0 justify-between" >


                        <HStack spacing='50px'>
                            <Link
                                href='/'
                            >
                                <Box
                                    cursor={'pointer'}
                                    _active={{
                                        transform: 'scale(0.98)',
                                    }}
                                >
                                    <Text
                                        textStyle={'h4'}
                                        fontWeight={'semibold'}
                                        userSelect={'none'}
                                    >
                                        Home
                                    </Text>
                                </Box>
                            </Link>
                            <Link
                                href='#servizi'
                            >
                                <Box
                                    cursor={'pointer'}
                                    _active={{
                                        transform: 'scale(0.98)',
                                    }}
                                >
                                    <Text
                                        textStyle={'h4'}
                                        fontWeight={'semibold'}
                                        userSelect={'none'}
                                    >
                                        Servizi
                                    </Text>
                                </Box>
                            </Link>
                            <Link
                                href='#tech-stack'
                            >
                                <Box
                                    cursor={'pointer'}
                                    _active={{
                                        transform: 'scale(0.98)',
                                    }}
                                >
                                    <Text
                                        textStyle={'h4'}
                                        fontWeight={'semibold'}
                                        userSelect={'none'}
                                    >
                                        Tech Stack
                                    </Text>
                                </Box>
                            </Link>
                            <Link
                                href='#progetti'
                            >
                                <Box
                                    cursor={'pointer'}
                                    _active={{
                                        transform: 'scale(0.98)',
                                    }}
                                >
                                    <Text
                                        textStyle={'h4'}
                                        fontWeight={'semibold'}
                                        userSelect={'none'}
                                    >
                                        Progetti
                                    </Text>
                                </Box>
                            </Link>
                            {/* <Box
                                cursor={'pointer'}
                                _active={{
                                    transform: 'scale(0.98)',
                                }}
                            >
                                <Text
                                    textStyle={'h4'}
                                    fontWeight={'semibold'}
                                    userSelect={'none'}
                                >
                                    Chi Siamo
                                </Text>
                            </Box> */}
                        </HStack>
                        <Link
                            href={'/#contatti'}
                        >
                            <Button
                                variant={'black'}
                                size={'md'}
                                borderRadius={'10px'}
                            >
                                <Text
                                    textStyle={'h4'}
                                    fontWeight={'semibold'}
                                >
                                    Contattaci
                                </Text>

                            </Button>
                        </Link>

                    </nav>
                </BoxWidth>
                <Box
                    className='flex lg:hidden justify-between p-[20px]'
                >
                    <Box>
                        <Image
                            src={Logo}
                            alt='logo'
                            className='h-[35px] w-fit my-auto'
                        />
                    </Box>
                    <Box
                        _active={{
                            transform: 'scale(0.98)',
                        }}
                        onClick={() => setIsDrawerOpen(true)}
                        cursor={'pointer'}
                    >
                        <Bars3Icon
                            className='w-10 h-10'


                            strokeWidth={3}
                        />
                    </Box>


                </Box>
            </header >
        </>

    )
}

export default Header