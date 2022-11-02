import React from "react";
import { Box, Button, useColorMode, Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "./Logo";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className=" flex justify-between z-3">
      <div className="ml-1 h-16">
        <Logo />
      </div>
      <Box className="flex">
        <Center>
          <Button
            _hover={{ bg: "red.500" }}
            className="mr-4 z-20"
            border="1px"
            borderColor="red.500"
          >
            Projects
          </Button>
        </Center>
        <Center>
          <Button
            _hover={{ bg: "blue.500" }}
            className="mr-4 z-20"
            border="1px"
            borderColor="blue.500"
          >
            About
          </Button>
        </Center>
        <Center>
          <Button
            _hover={{ bg: "green.500" }}
            className="mr-4 z-20"
            border="1px"
            borderColor="green.500"
          >
            Contact
          </Button>
        </Center>
        <Center>
          <Button
            className="mr-2 z-20"
            onClick={toggleColorMode}
            _hover={{ bg: "yellow.500" }}
            border="1px"
            borderColor="yellow.500"
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default Navbar;
