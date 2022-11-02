import GreenPageTransition from "./page_transitions/GreenPageTransition";
import YellowPageTransition from "./page_transitions/YellowPageTransition";
import RedPageTransition from "./page_transitions/RedPageTransition";
import BluePageTransition from "./page_transitions/BluePageTransition";
import DefaultPage from "./page_transitions/DefaultPage";
import React from "react";
import { Box } from "@chakra-ui/react";

function FirstTransition() {
  return (
    <Box h={"100%"} className="relative">
      <GreenPageTransition />
      <YellowPageTransition />
      <RedPageTransition />
      <BluePageTransition />
      <DefaultPage />
    </Box>
  );
}

export default FirstTransition;
