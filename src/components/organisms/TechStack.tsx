import { Stack, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BoxWidth from "../atoms/BoxWidth";
import { motion } from "framer-motion";
import { useDebounceEffect } from "../hook/useDebounce";
import FadeInWhenVisible from "../atoms/FadeInWhenVisible";


const TechStack = () => {
  return (
    <Box className="relative"
    >
      <Image
        width={3000}
        height={500}
        priority
        alt="green-line"
        src="/line-green-desktop.png"
        sizes="100vw"
        // Make the image display full width
        className="hidden md:flex absolute top-[400px] -z-0"
      />

      <Image
        width={3000}
        height={100}
        priority
        alt="green-line"
        src="/line-green-device.png"
        sizes="100vw"
        // Make the image display full width
        className="flex md:hidden absolute top-[450px] -z-0"
      />
      <FadeInWhenVisible>
        <Box
          bg="gray200"
          paddingTop={"180px"}
          paddingBottom={10}
          marginTop={-250}
          zIndex={0}
          width={"full"}
        >
          <Box
            id={'tech-stack'}
            mb={'50px'}
          ></Box>
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
                  name="React"
                  image="/TechStackImages/react.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Next.js"
                  image="/TechStackImages/nextjs.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Android Studio"
                  image="/TechStackImages/android.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Swift"
                  image="/TechStackImages/swift.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Node.js"
                  image="/TechStackImages/nodejs.png"
                ></TechnologyBox>
                {/* row 2*/}
                <TechnologyBox
                  name="GO"
                  image="/TechStackImages/go.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="MongoDB"
                  image="/TechStackImages/mongodb.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="TypeScript"
                  image="/TechStackImages/typescript.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="GraphQL"
                  image="/TechStackImages/graphql.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="AWS"
                  image="/TechStackImages/aws.png"
                ></TechnologyBox>
                {/* row 3*/}
                <TechnologyBox
                  name="Firebase"
                  image="/TechStackImages/firebase.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Figma"
                  image="/TechStackImages/figma.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="mySQL"
                  image="/TechStackImages/mysql.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Shopify"
                  image="/TechStackImages/shopify.png"
                ></TechnologyBox>
                <TechnologyBox
                  name="Sentry"
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
      </FadeInWhenVisible>
    </Box>
  );
};

interface Props {
  name: string;
  image: string;
}

const TechnologyBox = ({ name, image }: Props) => {
  const [isHovered, setHovered] = useState(false);
  const [isImageShowed, setIsImageShowed] = useState(true);
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

  useDebounceEffect(async () => {

    if (isImageShowed && isHovered) {
      setIsImageShowed(false)
    }
  },
    350,
    [isHovered],
  )



  const padding = (boxWidth * 40) / 100;

  return (
    <motion.div
      className="block z-20"
      animate={{
        rotateY: isImageShowed ? 360 : 0,
      }}
      transition={{ duration: 0.5 }} // L'effetto durerà 1 secondo
    >
      <Box
        className="bg-white flex cursor-pointer items-center justify-center text-center rounded-[30px] z-10"
        height={boxWidth + "px"}
        ref={boxRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          setIsImageShowed(true)
        }}
      >
        {isImageShowed ? (<Image
          src={image}
          width={boxWidth - padding}
          height={boxWidth - padding}
          alt="Picture of the author"
        />)
          : (
            <Text
              textStyle={['h5', 'h5', 'h5', 'h4', 'h4', 'h4']}
              fontWeight={'500'}
            >
              {name}
            </Text>
          )
        }
      </Box>
    </motion.div>

  );
};

export default TechStack;
