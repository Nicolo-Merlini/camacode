import BoxWidth from "@/components/atoms/BoxWidth";
import Paragraph from "@/components/atoms/Paragraph";
import WhiteBox from "@/components/atoms/WhiteBox";
import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import Image from 'next/image'
import skimming from '../../public/skimming.png'
import BoxText from "@/components/atoms/BoxText";
import BoxGrid from "@/components/atoms/BoxGrid";

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
        className="hidden more-320:flex more-420:hidden absolute top-[160px] xl:top-36 2xl:top-36 -z-10"
      />

      <BoxWidth>
        <Stack
          spacing={["45px", "45px", "45px", "40px"]}
          direction="column"
          minH={"95vh"}
          className="mt-[60px] md:mt-24 lg:mt-16 2xl:mt-24"
          color={"dark"}
        >
          <Box
            textStyle={["h1Mobile", "heroMobile", "h1", "hero", "hero90"]}
            lineHeight={["35px", "65px", "80px", "90px", "100px"]}
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
            spacing={["45px", "45px", "45px", "60px"]}
            direction="column"
            my={'100px'}
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
                className="hidden lg:flex lg:w-3/4"
              />
              <WhiteBox
                className="lg:w-1/4"
              >
                <Image
                  alt="Skimming"
                  src={skimming}
                  className="pl-[35px] lg:pl-[100px]w-[full] lg:w-[400px] xl:w-[500px] my-[35px] lg:my-[100px] float-right"
                />
              </WhiteBox>

            </BoxGrid>
          </Stack>


        </Paragraph>
      </BoxWidth>
    </>
  );
}
