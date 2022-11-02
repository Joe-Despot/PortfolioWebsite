import Navbar from "./components/Navbar";
import FirstTransition from "./components/FirstTransition";
import BackgroundAnim from "./components/BackgroundAnim";
import { Box } from "@chakra-ui/react";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundAnim />
      <Box>
        <FirstTransition />
      </Box>
      <Projects />
    </>
  );
}
