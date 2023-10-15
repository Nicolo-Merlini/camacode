import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const Paragraph: FC<{ children: any, title: string, subtitle: string }> = ({ children, title, subtitle }) => {
    return (
        <Box
            textAlign={'center'}

        >
            <Text
                textStyle={['h1Title', 'hero', 'hero', 'hero', 'hero']}
                fontWeight={'semibold'}
                color={'dark'}
            >
                {title}
            </Text>
            <Text
                textStyle={['h5', 'h4', 'h3', 'h3', 'h3']}
                color={'gray700'}
                mt={['0px', '0px', '10px', '20px']}
                className='w-11/12 lg:w-3/4 mx-auto'
            >
                {subtitle}
            </Text>
            {children}
        </Box>
    )
}

export default Paragraph