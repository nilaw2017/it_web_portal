import * as react from "react";
import HeadingBox from "../../../components/custom_elements/HeadingBox";
import { Box, Grid } from "@chakra-ui/react";
import ProfilePicCircle from "../../../components/custom_elements/ProfilePicCircle";
import TestimonialBox from "../../../components/custom_elements/TestimonialBox";

const Testimonials = () => {
  return (
    <>
      <HeadingBox
        mb={"44px"}
        m={"auto"}
        fontSize={"48px"}
        color={"#fff"}
        textAlign={"center"}
        fontWeight={"800"}
        fontStyle={"italic"}
      >
        TESTIMONIALS
      </HeadingBox>

      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", xl: "repeat(2,1fr)" }}
        columnGap={"96px"}
        rowGap={"56px"}
      >
        {/* Testimonial 1 */}
        <Box>
          <ProfilePicCircle
            src={"/assets/images/profiles/nilaw.jpg"}
            m={"auto"}
          />
          <TestimonialBox textAlign={"center"} color={"#fff"} m={"auto"}>
            <Box as="p" fontSize={"20px"} >
              Just had to shout out to United IT Club – seriously unique! Sleek
              design, easy navigation, and killer content. From trends to tech
              talks, they've got the 411. Kudos to the team for creating this
              gem!
            </Box>
            {/* Personb's name and position */}
            <Box>
              <Box as="p">-Nilaw Manandhar</Box>
              <Box as="p">Co-founder, Byaparcraft</Box>
            </Box>
          </TestimonialBox>
        </Box>

        {/* Testimonial 2 */}
        <Box>
          <ProfilePicCircle
            src={"/assets/images/profiles/nilaw.jpg"}
            m={"auto"}
          />
          <TestimonialBox textAlign={"center"} color={"#fff"} m={"auto"}>
            <Box as="p" fontSize={"20px"} >
              Just had to shout out to United IT Club – seriously unique! Sleek
              design, easy navigation, and killer content. From trends to tech
              talks, they've got the 411. Kudos to the team for creating this
              gem!
            </Box>
            {/* Personb's name and position */}
            <Box>
              <Box as="p">-Nilaw Manandhar</Box>
              <Box as="p">Co-founder, Byaparcraft.</Box>
            </Box>
          </TestimonialBox>
        </Box>

        {/* Testimonial 3 */}
        <Box gridColumn={{ base: "span 1", xl: "span 2" }}>
          <ProfilePicCircle
            src={"/assets/images/profiles/nilaw.jpg"}
            m={"auto"}
          />
          <TestimonialBox textAlign={"center"} color={"#fff"} m="auto">
            <Box as="p" fontSize={"20px"} >
              Just had to shout out to United IT Club – seriously unique! Sleek
              design, easy navigation, and killer content. From trends to tech
              talks, they've got the 411. Kudos to the team for creating this
              gem!
            </Box>
            {/* Personb's name and position */}
            <Box>
              <Box as="p">-Nilaw Manandhar</Box>
              <Box as="p">Co-founder, Byaparcraft</Box>
            </Box>
          </TestimonialBox>
        </Box>
      </Grid>
    </>
  );
};
export default Testimonials;
