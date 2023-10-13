import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'

const BoxWidth: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            className='md:mx-[20px] lg:mx-[50px] xl:mx-[150px] 2xl:mx-[200px] max-w-screen-2xl'

        >
            {children}
        </Box>
    )
}

export default BoxWidth