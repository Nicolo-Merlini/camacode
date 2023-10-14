import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import BoxWidth from '../atoms/BoxWidth'

const Header = () => {
    return (
        <header className="bg-white lg:mt-12">
            <BoxWidth
                className='hidden lg:flex'
            >
                <nav className="
           
           flex  mx-0 justify-between" >
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
                            >
                                Proggetti
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
                            >
                                Chi Siamo
                            </Text>
                        </Box>


                    </HStack>
                    <Button
                        variant={'black'}
                        size={'md'}
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
                className='flex lg:hidden'
            >
                <Box>

                </Box>

            </Box>
        </header>
    )
}

export default Header