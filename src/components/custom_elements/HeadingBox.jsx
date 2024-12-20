import { Box, Heading, Image } from "@chakra-ui/react";
import * as react from "react";

const HeadingBox = ({
  fontSize,
  fontWeight,
  fontStyle,
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
  transform,
}) => {
  return (
    <>
      <Heading
        backgroundImage={"url('/assets/images/homepage/headingBox.png')"}
        backgroundRepeat={"no-repeat"}
        padding={"30px"}
        fontSize={fontSize}
        fontStyle={fontStyle}
        m={m}
        mt={mt}
        mb={mb}
        ms={ms}
        me={me}
        fontWeight={fontWeight}
        w={"466px"}
        h={"146px"}
        pt={pt}
        pb={pb}
        ps={ps}
        pe={pe}
        p={p}
        color={color}
        textAlign={textAlign}
        transform={transform}
      >
        {children}
      </Heading>
    </>
  );
};

export default HeadingBox;
