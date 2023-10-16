import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const Paragraph: FC<{ children: any, title: string, subtitle: string, className?: string }> = ({ children, title, subtitle, className }) => {
    return (
        <Box
            textAlign={'center'}
            className={className ? className : ""}
        >
            <Text
                textStyle={['h1Mobile', 'h1Title', 'h1Title', 'hero', 'hero']}
                fontWeight={'semibold'}
                color={'dark'}
            >
                {title}
            </Text>
            <Text
                textStyle={['h5Subtitle', 'h4Subtitle', 'h3', 'h3', 'h3']}
                color={'gray700'}
                mt={['10px', '15px', '20px', '20px']}
                className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto'
            >
                {subtitle}
            </Text>
            {children}
        </Box>
    )
}

export default Paragraph