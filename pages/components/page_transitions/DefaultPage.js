import React from "react";
import { useParallax } from "react-scroll-parallax";
import { Box } from "@chakra-ui/react";

function DefaultPage() {
  const { ref } = useParallax({ speed: 3 });

  return (
    <>
      <Box ref={ref} className="relative top-10">
        <svg viewBox="0 438.29 960 102.71">
          <path
            d="M0 510L22.8 510.2C45.7 510.3 91.3 510.7 137 492.5C182.7 474.3 228.3 437.7 274 438.3C319.7 439 365.3 477 411.2 485.7C457 494.3 503 473.7 548.8 472.2C594.7 470.7 640.3 488.3 686 481.7C731.7 475 777.3 444 823 439.8C868.7 435.7 914.3 458.3 937.2 469.7L960 481L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
            fill="#1A202C"
            strokelinecap="round"
            strokelinejoin="miter"
          ></path>
        </svg>
      </Box>
    </>
  );
}

export default DefaultPage;
