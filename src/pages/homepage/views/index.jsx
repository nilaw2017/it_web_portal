import { Outlet } from "react-router-dom";
import TopMenu from "../../../components/layout/TopMenu";
import NavMenu from "../components/NavMenu.component.jsx";
import { Box, Container } from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <Box background={"linear-gradient(180deg, #9C4B0C 51%, #8F3710 100%)"}>
        <NavMenu />
        <Outlet />
      </Box>
    </>
  );
}
