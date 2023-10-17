import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const BoxWidth: FC<{ children: React.ReactNode; className?: string, id?: string }> = ({
  children,
  className,
  id
}) => {
  return (
    <Box
      className={`${className ? className : ""
        } mx-[20px] lg:mx-[50px] xl:mx-[150px] 2xl:mx-[200px] max-w-screen-2xl `}
      id={id ? id : ''}
    >
      {children}
    </Box>
  );
};

export default BoxWidth;
