import React, { FC } from 'react'
import WhiteBox from './WhiteBox'
import { Box, Text } from '@chakra-ui/react'

const BoxText: FC<{ title: string, subtitle: string, className?: string }> = ({ title, subtitle, className }) => {
    return (
        <WhiteBox
            className={`${className ? className : ""} text-center flex items-center justify-center px-[35px]
            `}
        >
            <Box>
                <Text
                    textStyle={['h2', 'h2', 'h1Mobile', 'h1TitleMobile', 'h1Title']}
                    fontWeight={'semibold'}
                    color={'dark'}
                >
                    {title}
                </Text>
                <Text
                    mt={['10px', '20px', '25px', '25px', '25px']}
                    textStyle={['h5Subtitle', 'h4Subtitle', 'h4Subtitle', 'h3Subtitle', 'h3Subtitle']}
                    fontWeight={['400', '400', '400', '400', '400']}
                    color={'gray700'}
                >
                    {subtitle}
                </Text>
            </Box>
        </WhiteBox>
    )
}

export default BoxText