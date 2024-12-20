import * as react from "react";
import {
  Box,
  Container,
  Grid,
  HStack,
  Image,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const NavMenu = () => {
  return (
    <Container maxW="6xl" zIndex={"999"} position={"sticky"}>
      <HStack
        bg={"transparent"}
        pt={"59px"}
        pb={"19px"}
        justifyContent={"space-between"}
      >
        <Image src="/assets/images/logos/logo-sm.png" />
        <Grid
          gridTemplateColumns={"repeat(4,max-content)"}
          gap={"33px"}
          justifyContent={"space-evenly"}
          textAlign={"center"}
          backgroundColor={"#fde300"}
          rounded={"11px"}
        >
          <Menu>
            <Link to="/">
              <MenuButton p="10px">Home</MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="/executives">
              <MenuButton p="10px">Executives</MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="/news-events">
              <MenuButton p="10px">News & Events</MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="/contact-us">
              <MenuButton p="10px">Contact Us</MenuButton>
            </Link>
          </Menu>
        </Grid>
      </HStack>
    </Container>
  );
};

export default NavMenu;
