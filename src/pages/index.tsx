import BoxWidth from '@/components/atoms/BoxWidth'
import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        width={3000}
        height={500}
        priority
        alt='green-line'
        src='/line-green-desktop.png'
        sizes="100vw"
        // Make the image display full width
        className='hidden lg:flex absolute lg:top-40 xl:top-36 2xl:top-36 z-0'
      />
      <BoxWidth
      >

        <Stack
          spacing={'60px'} direction='column'
          minH={'95vh'}
          className='lg:mt-16'
          color={'dark'}
        >
          <Text
            textStyle={['hero']}
            fontWeight={'semibold'}
            zIndex={10}
            className='lg:w-10/12'
          >
            Trasformiamo le
            tue idee in codice
          </Text>
          <Text
            textStyle={'h3'}
            fontWeight={'medium'}
            className='lg:w-9/12'
          >
            Partiamo dalle tue esigenze per sviluppare software unici e personalizzati. Ti supportiamo con un team di programmatori, solution architects e designer UX/UI, pronti a concretizzare il tuo progetto.
          </Text>
          <Button
            variant={'white'}
            width={'fit-content'}
            size={'lg'}
          >
            <Text
              textStyle={'h3'}
              fontWeight={'medium'}
            >
              Paghi solo se soddisfatto
            </Text>
          </Button>
        </Stack>
      </BoxWidth>
      <BoxWidth>

      </BoxWidth>
    </>
  )
}
