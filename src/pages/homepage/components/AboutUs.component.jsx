import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import * as react from "react";
import IntroBox from "../../../components/custom_elements/IntroBox";
import SubIntroBox from "../../../components/custom_elements/SubIntroBox";

const AboutUs = () => {
  return (
    <Box>
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", xl: "repeat(2,1fr)" }}
        columnGap={{ xl: "55px", "2xl": "66px" }}
        rowGap={"56px"}
      >
        <Image src="/assets/images/homepage/logo.png" m={"auto"} />
        <IntroBox m={"auto"}>
          <Box fontSize={"48px"} color={"#fff"}>
            About Us
          </Box>
          <Box as="p" fontSize={"24px"} color={"#fff"}>
            The United IT Club (UITC), established in 2024, stands as a beacon
            within the realm of Information Technology at United College.
            Aligned with the vision of United Academy, UITC is a dynamic
            community dedicated to cultivating a cutting-edge think-tank and
            research platform.
          </Box>
        </IntroBox>
        <SubIntroBox m={"auto"}>
          <Box textAlign={"center"} fontSize={"36px"} color={"#fff"}>
            Our Mission
          </Box>
          <Box as="p" textAlign={"center"} fontSize={"18px"} color={"#fff"}>
            Our mission is to foster an environment where diverse minds converge
            to spark innovation and harness the power of collaboration.
          </Box>
        </SubIntroBox>
        <Box m={"auto"} position={"relative"}>
          <SubIntroBox
            transform={"rotateY(180deg)"}
            position={"absolute"}
          ></SubIntroBox>
          <Box
            padding={"30px"}
            w={"550px"}
            h={"234px"}
            position={"absolute"}
            top={"0"}
          >
            <Box textAlign={"center"} fontSize={"36px"} color={"#fff"}>
              Our Vision
            </Box>
            <Box as="p" textAlign={"center"} fontSize={"18px"} color={"#fff"}>
              At the United IT Club, we see a future where technology sparks
              positive change. We believe innovation should drive everything we
              do.
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default AboutUs;
