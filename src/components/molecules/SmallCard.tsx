import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import WhiteBox from '../atoms/WhiteBox'

const SmallCard: FC<{ title: any, index: number, subtitle: string, className?: string }> = ({ title, subtitle, className, index }) => {
    return (
        <WhiteBox
            className="text-center flex items-center justify-center py-[90px] relative min-w-[300px]"
        >
            <Box
                display={'flex'}
                h={'50px'}
                w={'50px'}
                alignItems={'center'}
                justifyContent={'center'}
                bg={'gray300'}
                borderRadius={'full'}
                className='absolute top-[15px] left-[15px]'
                textStyle={['h4', 'h4', 'h3', 'h3', 'h3']}
                fontWeight={'semibold'}
            >
                {index}
            </Box>
            <Box
                textAlign={'center'}
                className={className ? className : ""}
            >
                <Box
                    textStyle={['h2', 'h2', 'h2', 'h2', 'h2']}
                    fontWeight={'semibold'}
                    color={'dark'}
                    dangerouslySetInnerHTML={{ __html: title }}
                >

                </Box>
                <Text
                    textStyle={['h4', 'h4', 'h4', 'h4', 'h4']}
                    color={'gray700'}
                    fontWeight={'400'}
                    mt={['10px', '10px', '10px', '20px']}
                    className='w-11/12 md:w-10/12 lg:w-3/4 mx-auto'
                >
                    {subtitle}
                </Text>

            </Box>
        </WhiteBox>

    )
}

export default SmallCard