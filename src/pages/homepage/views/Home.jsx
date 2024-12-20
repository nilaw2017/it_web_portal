import * as react from "react";

import { Box, Stack, Heading, Container, Divider } from "@chakra-ui/react";
import Hero from "../components/Hero.component";
import TestimonialBox from "../../../components/custom_elements/TestimonialBox";
import AboutUs from "../components/AboutUs.component";
import Testimonials from "../components/Testimonials.component";
import Footer from "../components/Footer.component";

const Home = () => {
  return (
    <>
      <Box
        backgroundImage={"url('/assets/images/homepage/bgCode.png')"}
        width={"-webkit-fill-available"}
        height={"832px"}
        position={"absolute"}
        top={"0"}
      ></Box>
      <Container maxW={"6xl"} zIndex={1} position={"relative"} mb={"118px"}>
        <Hero />
      </Container>
      <Container maxW={"6xl"} mb={"118px"}>
        <AboutUs />
      </Container>
      <Container maxW={"6xl"} mb={"118px"}>
        <Testimonials />
      </Container>
      <Divider border={"5px solid #661616"} />
      <Container maxW={"6xl"} mb={"118px"}>
        <Footer />
      </Container>
    </>
  );
};
export default Home;
