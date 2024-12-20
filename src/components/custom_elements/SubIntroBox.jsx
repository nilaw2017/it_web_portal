import { Box, Image } from "@chakra-ui/react";
import * as react from "react";

const SubIntroBox = ({
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
  transform,
}) => {
  return (
    <>
      <Box
        backgroundImage={"url('/assets/images/homepage/subIntroBox.png')"}
        backgroundRepeat={"no-repeat"}
        padding={"30px"}
        fontSize={fontSize}
        m={m}
        mt={mt}
        mb={mb}
        ms={ms}
        me={me}
        fontWeight={fontWeight}
        w={"550px"}
        h={"234px"}
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
      </Box>
    </>
  );
};

export default SubIntroBox;
