import { Box, Image } from "@chakra-ui/react";
import * as react from "react";

const ProfilePicCircle = ({
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
  src,
  children,
}) => {
  return (
    <>
      <Box
        backgroundImage={
          "url('/assets/images/homepage/profilePicContainer.png')"
        }
        backgroundRepeat={"no-repeat"}
        fontSize={fontSize}
        m={m}
        mt={mt}
        mb={mb}
        ms={ms}
        me={me}
        fontWeight={fontWeight}
        w={"180px"}
        h={"180px"}
        pt={pt}
        pb={pb}
        ps={ps}
        pe={pe}
        p={p}
        color={color}
        textAlign={textAlign}
      >
        <Image src={src} rounded={"50%"} padding={"35px"} w={"180px"} height={"180px"} objectFit={"cover"}/>
      </Box>
    </>
  );
};

export default ProfilePicCircle;
