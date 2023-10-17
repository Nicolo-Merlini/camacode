import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const WhiteBox: FC<{ children: any; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Box
      borderWidth={"1px"}
      borderColor={"gray300"}
      bg={"white"}
      borderRadius={"40px"}
      className={`${className ? className : ""}`}
    >
      {children}
    </Box>
  );
};

export default WhiteBox;
