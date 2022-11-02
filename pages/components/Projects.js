import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "./Logo";

function Projects() {
  return (
    <Box className="relative mt-16">
      <Center>
        <Box className="mb-16 text-3xl">Projects</Box>
      </Center>
      <Center>
        <Box className="w-screen flex justify-between">
          <Box className="ml-8 border-2 rounded border-red-500">1.project</Box>
          <Box className="border-2 rounded border-green-500 ">2.project</Box>
          <Box className="border-2 rounded border-yellow-500">3.project</Box>
          <Box className="mr-8 border-2 rounded border-blue-500">4.project</Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Projects;
