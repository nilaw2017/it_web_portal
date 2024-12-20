import { Box, Image } from "@chakra-ui/react";
import * as react from "react";

const TestimonialBox = ({
  fontSize,
  fontWeight,
  textAlign,
  color,
  m,
  mt,
  mb,
  ms,
  me,
  pt,
  pb,
  ps,
  pe,
  p,
  children,
}) => {
  return (
    <>
      <Box
        backgroundImage={"url('/assets/images/homepage/testimonialBox.png')"}
        backgroundRepeat={"no-repeat"}
        padding={"35px"}
        fontSize={fontSize}
        m={m}
        mt={mt}
        mb={mb}
        ms={ms}
        me={me}
        fontWeight={fontWeight}
        w={"509px"}
        h={"309px"}
        pt={pt}
        pb={pb}
        ps={ps}
        pe={pe}
        p={p}
        color={color}
        textAlign={textAlign}
        backgroundSize={"contain"}
      >
        {children}
      </Box>
    </>
  );
};

export default TestimonialBox;
