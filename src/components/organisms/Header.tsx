import { Box, Button, HStack, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import BoxWidth from '../atoms/BoxWidth'
import { Bars3Icon } from '@heroicons/react/20/solid'

const Header = () => {
    return (
        <header className="bg-white lg:mt-10">
            <BoxWidth
                className='hidden lg:grid'
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
                >
                    <Bars3Icon
                        className='w-10 h-10'

                        strokeWidth={3}
                    />
                </Box>


            </Box>
        </header >
    )
}

export default Header