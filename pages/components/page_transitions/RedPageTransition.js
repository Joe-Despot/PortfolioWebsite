import React from "react";
import { useParallax } from "react-scroll-parallax";

import { Box } from "@chakra-ui/react";

function ThirdPageTransition() {
  const { ref } = useParallax({ speed: 2 });

  return (
    <Box ref={ref} className="absolute inset-0 flex items-center">
      <svg viewBox="0 418.45 960 115">
        <path
          d="M0 457L22.8 453.3C45.7 449.7 91.3 442.3 137 433.2C182.7 424 228.3 413 274 421.5C319.7 430 365.3 458 411.2 460.3C457 462.7 503 439.3 548.8 436.3C594.7 433.3 640.3 450.7 686 457.8C731.7 465 777.3 462 823 459.2C868.7 456.3 914.3 453.7 937.2 452.3L960 451L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
          fill="#E53E3E"
          strokelinecap="round"
          strokelinejoin="miter"
        ></path>
      </svg>
    </Box>
  );
}

export default ThirdPageTransition;
