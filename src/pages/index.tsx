import BoxWidth from "@/components/atoms/BoxWidth";
import Paragraph from "@/components/atoms/Paragraph";
import WhiteBox from "@/components/atoms/WhiteBox";
import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import Image from 'next/image'
import skimming from '../../public/skimming.png'
import webAppMobile from '../../public/web-app-mobile.png'
import webAppMobileDevice from '../../public/web-app-mobile-device.png'
import eCommerce from '../../public/e-commerce.png'
import eCommerceMobile from '../../public/e-commerce-mobile.png'


import BoxText from "@/components/atoms/BoxText";
import BoxGrid from "@/components/atoms/BoxGrid";
import Progetti from "@/components/molecules/Progetti";
import StepCards from "@/components/organisms/StepCards";

export default function Home() {
  return (
    <>
      <Image
        width={3000}
        height={500}
        priority
        alt="green-line"
        src="/line-green-desktop.png"
        sizes="100vw"
        // Make the image display full width
        className="hidden xl:flex absolute lg:top-40 xl:top-[155px] 2xl:top-[160px] -z-10"
      />

      <Image
        width={3000}
        height={100}
        priority
        alt="green-line"
        src="/line-green-device.png"
        sizes="100vw"
        // Make the image display full width
        className="hidden more-320:flex more-420:hidden absolute top-[165px] xl:top-36 2xl:top-36 -z-10"
      />

      <BoxWidth>
        <Stack
          spacing={["45px", "45px", "45px", "40px"]}
          direction="column"
          minH={"92vh"}
          className="mt-[60px] md:mt-24 lg:mt-16 2xl:mt-24"
          color={"dark"}
        >
          <Box
            textStyle={["h1Mobile", "heroMobile", "h1", "hero", "hero90"]}
            lineHeight={["42px", "65px", "80px", "90px", "100px"]}
            fontWeight={["semibold", "semibold", "semibold", "600"]}
            zIndex={10}
            className="2xl:mb-[65px] xl:mb-[30px]"
          >
            <Text className="hidden more-420:flex">
              Trasformiamo le tue <br />
              Idee in Codice
            </Text>
            <Text className="flex more-420:hidden">
              Trasformiamo le tue Idee in Codice
            </Text>
          </Box>
          <Text
            textStyle={[
              "h5Subtitle",
              "h4Subtitle",
              "h4Subtitle",
              "h4Subtitle",
              "h4Subtitle",
              "h4Subtitle",
            ]}
            fontWeight={"medium"}
            className="mt-[10px] more-320:mt-[45px] more-420:mt-[0px]  w-11/12 lg:w-9/12"
          >
            Partiamo dalle tue esigenze per sviluppare software unici e
            personalizzati. Ti supportiamo con un team di programmatori,
            solution architects e designer UX/UI, pronti a concretizzare il tuo
            progetto.
          </Text>
          <Button
            variant={["black", "black", "black", "white"]}
            borderRadius={"100px"}
            width={"fit-content"}
            size={["md", "lg"]}
          >
            <Text textStyle={["h5", "h5", "h4"]} fontWeight={"medium"}>
              Paghi solo se soddisfatto
            </Text>
          </Button>
        </Stack>
      </BoxWidth>
      <BoxWidth>
        <Paragraph
          title="Servizi"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        >
          <Stack
            spacing={["20px", "20px", "20px", "60px"]}
            direction="column"
            my={['50px', '50px', '50px', '100px']}
          >
            <BoxGrid>
              <BoxText
                title="Web App"
                subtitle="Realizziamo Web App esteticamente sorprendenti e altamente funzionali, garantendo elevate performance, sicurezza e scalabilità."
                className="lg:hidden py-[50px]"
              />
              <WhiteBox
                className="lg:w-1/2"
              >
                <Image
                  alt="Skimming"
                  src={skimming}
                  className="pl-[35px] lg:pl-[100px]w-[full] lg:w-[400px] xl:w-[500px] my-[35px] lg:my-[100px] float-right"
                />
              </WhiteBox>
              <BoxText
                title="Web App"
                subtitle="Realizziamo Web App esteticamente sorprendenti e altamente funzionali, garantendo elevate performance, sicurezza e scalabilità."
                className="hidden lg:flex lg:w-1/2"
              />
            </BoxGrid>
            <BoxGrid>
              <BoxText
                title="Mobile App"
                subtitle="Sviluppiamo app sia per Android che per IOS. Abbiamo esperienza nella costruzione di: e-commerce, app aziendali e gestionali."
                className="py-[50px] lg:w-8/12"
              />
              <WhiteBox
                className=" lg:w-4/12"
              >
                <Image
                  alt="Skimming"
                  src={webAppMobile}
                  className="hidden md:flex pr-[35px] lg:pr-[100px]w-[full] lg:w-[250px] xl:w-[300px] mt-[35px] lg:mt-[100px] float-left"
                />
                <Image
                  alt="Skimming"
                  src={webAppMobileDevice}
                  className="flex md:hidden rounded-b-[40px] pr-[35px] lg:pr-[100px]w-[full] lg:w-[250px] xl:w-[300px] mt-[35px] lg:mt-[100px] float-left"
                />
              </WhiteBox>

            </BoxGrid>
            <BoxGrid>
              <BoxText
                title="E-commerce"
                subtitle="Specializzati nella creazione di marketplace ed e-commerce, garantiamo libertà di espressione per il tuo brand, un'esperienza utente superiore e flessibilità nella gestione dei canali di vendita."
                className="md:w-11/12  lg:hidden py-[50px]"
              />
              <WhiteBox
                className=" lg:w-5/12"
              >
                <Image
                  alt="Skimming"
                  src={eCommerce}
                  className="hidden lg:flex pl-[45px] xl:pl-[100px] lg:w-[600px] xl:w-[850px] my-[35px] lg:my-[100px] float-right"
                />
                <Image
                  alt="Skimming"
                  src={eCommerceMobile}
                  className="lg:hidden pl-[35px] my-[35px] md:my-[50px] md:w-[600px]  float-right"
                />
              </WhiteBox>
              <BoxText
                title="E-commerce"
                subtitle="Specializzati nella creazione di marketplace ed e-commerce, garantiamo libertà di espressione per il tuo brand, un'esperienza utente superiore e flessibilità nella gestione dei canali di vendita."
                className="hidden lg:flex   lg:w-7/12"
              />
            </BoxGrid>

            <WhiteBox>
              <BoxText
                title="Sviluppo JamStack"
                subtitle="Jamstack è un'architettura che separa l'esperienza web dai dati e dalla logica aziendale, migliorando flessibilità, scalabilità, prestazioni e manutenibilità. Elimina la dipendenza della logica aziendale dall'esperienza web, consentendo un'architettura componibile in cui la personalizzazione e i servizi di terze parti sono integrati tramite API."
                className="w-full  py-[50px] xl:px-[80px]"
              />
            </WhiteBox>

          </Stack>


        </Paragraph>
        <Paragraph
          title="Progetti"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          className="mt-[100px] md:mt-[150px] lg:mt-[250px]"
        >
          <Stack
            spacing={["20px", "20px", "20px", "60px"]}
            direction="column"
            my={['50px', '50px', '50px', '100px']}
          >

            <Progetti />
          </Stack>

        </Paragraph>
        <Paragraph
          title="Paghi solo se soddisfatto"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          className="mt-[100px] md:mt-[150px] lg:mt-[250px]"
        >
          <Stack
            spacing={["20px", "20px", "20px", "60px"]}
            direction="column"
            my={['50px', '50px', '50px', '100px']}
          >
            <StepCards />
          </Stack>
        </Paragraph>
      </BoxWidth>

    </>
  );
}
