import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Work_Sans } from 'next/font/google'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme_chakraUI } from '@/config/theme';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';


const work_sans = Work_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

const theme = extendTheme(theme_chakraUI)


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={work_sans.className}>
      <ChakraProvider theme={theme}>
        <Header />

        <Component  {...pageProps} />
        <Footer />
      </ChakraProvider>
    </main>
  )
}
