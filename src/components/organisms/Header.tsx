import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoxWidth from '../atoms/BoxWidth'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Cancel } from 'iconoir-react'

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true)
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
                            <Box
                                width={'fit-content'}
                                textStyle={['h3', 'h3', 'h3']}
                                fontWeight={'bold'}
                                userSelect={'none'}
                                color={'dark'}
                            >
                                Home
                            </Box>
                            <Box
                                width={'fit-content'}
                                textStyle={['h3', 'h3', 'h3']}
                                fontWeight={'bold'}
                                userSelect={'none'}
                                color={'dark'}
                            >
                                Servizi
                            </Box>
                            <Box
                                width={'fit-content'}
                                textStyle={['h3', 'h3', 'h3']}
                                fontWeight={'bold'}
                                userSelect={'none'}
                                color={'dark'}
                            >
                                Tech Stack
                            </Box>
                            <Box
                                width={'fit-content'}
                                textStyle={['h3', 'h3', 'h3']}
                                fontWeight={'bold'}
                                userSelect={'none'}
                                color={'dark'}
                            >
                                Progetti
                            </Box>
                        </Box>

                    </DrawerBody>
                </DrawerContent>
            </Drawer >
            <header className="bg-white lg:mt-10">
                <BoxWidth
                    className='hidden lg:grid'
                >
                    <nav
                        className="flex  mx-0 justify-between" >
                        <HStack spacing='50px'>
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
                                    Proggetti
                                </Text>
                            </Box>
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
                    </nav>
                </BoxWidth>
                <Box
                    className='flex lg:hidden justify-between m-[20px]'
                >
                    <Box>

                    </Box>
                    <Box
                        _active={{
                            transform: 'scale(0.98)',
                        }}
                        onClick={() => setIsDrawerOpen(true)}
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