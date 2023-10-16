import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

const BoxGrid: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            className='grid md:flex'
            justifyContent={'space-between'}
            gap={'20px'}
            w={'full'}
        >
            {children}
        </Box>
    )
}

export default BoxGrid