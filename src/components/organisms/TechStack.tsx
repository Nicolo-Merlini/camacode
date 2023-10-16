import { Stack, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BoxWidth from "../atoms/BoxWidth";

const TechStack = () => {
  return (
    <Box className="relative">
      <Image
        width={3000}
        height={500}
        priority
        alt="green-line"
        src="/line-green-desktop.png"
        sizes="100vw"
        // Make the image display full width
        className="hidden md:flex absolute top-[300px] -z-0"
      />

      <Image
        width={3000}
        height={100}
        priority
        alt="green-line"
        src="/line-green-device.png"
        sizes="100vw"
        // Make the image display full width
        className="flex md:hidden absolute top-[300px] -z-0"
      />

      <Box
        bg="gray200"
        paddingTop={"180px"}
        paddingBottom={10}
        marginTop={-200}
        zIndex={0}
        width={"full"}
      >
        <BoxWidth>
          <Text
            className="text-center mb-10 md:mb-20 z-10"
            color={"dark"}
            textStyle={["heroMobile", "hero"]}
            fontWeight={"semibold"}
          >
            Tech Stack
          </Text>
          <Box className="w-full md:w-2/3 mx-auto">
            <Box className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {/* row 1*/}
              <TechnologyBox
                name="prova"
                image="/TechStackImages/react.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/nextjs.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/android.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/swift.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/nodejs.png"
              ></TechnologyBox>
              {/* row 2*/}
              <TechnologyBox
                name="prova"
                image="/TechStackImages/go.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/mongodb.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/typescript.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/graphql.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/aws.png"
              ></TechnologyBox>
              {/* row 3*/}
              <TechnologyBox
                name="prova"
                image="/TechStackImages/firebase.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/figma.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/mysql.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/shopify.png"
              ></TechnologyBox>
              <TechnologyBox
                name="prova"
                image="/TechStackImages/sentry.png"
              ></TechnologyBox>
            </Box>
          </Box>
          <Text
            className="text-center mt-10"
            color={"gray700"}
            textStyle={"h3"}
          >
            e molto Altro!
          </Text>
        </BoxWidth>
      </Box>
    </Box>
  );
};

interface Props {
  name: string;
  image: string;
}

const TechnologyBox = ({ name, image }: Props) => {
  const boxRef = useRef<any>(null);
  const [boxWidth, setBoxWidth] = useState(0);

  const handleResize = () => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    // Initial width calculation
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(image);

  const padding = (boxWidth * 40) / 100;

  return (
    <Box
      className="bg-white flex items-center justify-center rounded-[30px] z-10"
      height={boxWidth + "px"}
      ref={boxRef}
    >
      <Image
        src={image}
        width={boxWidth - padding}
        height={boxWidth - padding}
        alt="Picture of the author"
      />
    </Box>
  );
};

export default TechStack;
