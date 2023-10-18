import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactNode, memo } from 'react'

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'semibold'} textStyle={'h5'} mb={2}
            color={'base'}
        >
            {children}
        </Text>
    )
}

const Footer = () => {
    return (
        <Box
            bg={'whiteIce'}
            color={'dark'}
            p={[4, 10, 10]}
            borderTopWidth={'1px'}
            borderColor={'gray300'}
        >
            <Box
                display={['grid', 'grid', 'grid', 'flex']}
                gap={[10, 10, 10, 0]}
                justifyContent={'space-between'}

                pb={8}
            >
                <Box
                    width={['full', '380px']}
                    textAlign={'justify'}
                >
                    {/* <img
                        className='h-[94px] w-[94px]'
                        src='https://www.datocms-assets.com/106122/1694361804-screenshot-2023-08-10-alle-19-53-1-1.png'
                    /> */}
                    <Text
                        textStyle={'h4'}
                        fontWeight={'bold'}
                        mt={6}
                    >
                        CAMACODE
                    </Text>
                    <Text
                        textStyle={'h6'}
                        mt={4}
                    >
                        Partiamo dalle tue esigenze per sviluppare software unici e personalizzati. Ti supportiamo con un team di programmatori, solution architects e designer UX/UI, pronti a concretizzare il tuo progetto.
                    </Text>
                </Box>



            </Box >
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <Box
                display={['grid', 'grid', 'grid', 'flex']}
                gap={2}
                justifyContent={['space-between']}
                mt={10}
            >
                <Box>
                    <Text
                        textStyle={'h4'}
                        fontWeight={'bold'}
                        mt={6}
                    >
                        Trasformiamo le tue Idee in Codice
                    </Text>
                    <Text
                        textStyle={'h6'}
                        mt={4}
                        fontWeight={'thin'}
                    >
                        Making Impossible, Possible.
                    </Text>
                </Box>

                <Text
                    textStyle={'h6'}
                    fontWeight={'thin'}
                    className='my-auto mb-0'
                >
                    © 2023 CAMACODE | P.I. 11171770966
                </Text>
            </Box>
        </Box>


    )
}

export default memo(Footer)