import { Box, Grid, Heading, Image } from "@chakra-ui/react";
const Hero = () => {
  return (
    <>
      <Grid
        className="hero-section"
        gridTemplateColumns={"repeat(2,1fr)"}
        alignItems={"center"}
      >
        <Box className="headers">
          <Heading className="main-header" as={"h2"}>
            Where Innovation Meets Collaboration
          </Heading>
          <Box as="p">
            {`
                #include <stdio.h>
                `}
            <br></br>
            {`
                int main() {
            `}
            <br />
            &nbsp; &nbsp;
            {`
            printf("Welcome to United IT Club [UITC]"); 
            `}
            <br />
            {`}`}
          </Box>
        </Box>
        <Box>
          <Image src="/assets/images/homepage/robotHero.png"></Image>
        </Box>
      </Grid>
    </>
  );
};

export default Hero;
