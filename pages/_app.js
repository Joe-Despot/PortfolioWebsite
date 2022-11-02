import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
