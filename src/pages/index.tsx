import BoxWidth from '@/components/atoms/BoxWidth'
import Paragraph from '@/components/atoms/Paragraph'
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
        className='hidden xl:flex absolute lg:top-40 xl:top-[150px] 2xl:top-[140px] -z-10'
      />


      <Image
        width={3000}
        height={100}
        priority
        alt='green-line'
        src='/line-green-device.png'
        sizes="100vw"
        // Make the image display full width
        className='more-420:hidden absolute top-[200px] xl:top-36 2xl:top-36 -z-10'
      />


      <BoxWidth>
        <Stack
          spacing={['45px', '45px', '45px', '40px']} direction='column'
          minH={'95vh'}
          className='mt-24 lg:mt-16'
          color={'dark'}
        >
          <Text
            textStyle={['h2', 'h1', 'hero', 'hero']}
            lineHeight={['35px', '75px', '90px', '90px']}
            fontWeight={'semibold'}
            zIndex={10}
            className='w-10/12 lg:w-10/12'
          >
            Trasformiamo le
            tue idee in codice
          </Text>
          <Text
            textStyle={['h5Subtitle', 'h4Subtitle', 'h4Subtitle', 'h4Subtitle', 'h4Subtitle', 'h4Subtitle']}
            fontWeight={'medium'}
            className='mt-[45px] sm:mt-[10px] lg:mt-[40px] w-11/12 lg:w-9/12'
          >
            Partiamo dalle tue esigenze per sviluppare software unici e personalizzati. Ti supportiamo con un team di programmatori, solution architects e designer UX/UI, pronti a concretizzare il tuo progetto.
          </Text>
          <Button
            variant={['black', 'black', 'black', 'white']}
            borderRadius={'100px'}
            width={'fit-content'}
            size={['md', 'lg']}
          >
            <Text
              textStyle={['h5', 'h5', 'h4']}
              fontWeight={'medium'}
            >
              Paghi solo se soddisfatto
            </Text>
          </Button>
        </Stack>
      </BoxWidth>
      <BoxWidth
      >
        <Paragraph
          title='Servizi'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        >

        </Paragraph>

      </BoxWidth>
    </>
  )
}
