import React from "react";
import { useParallax } from "react-scroll-parallax";
import { Box } from "@chakra-ui/react";

function FourthPageTransition() {
  const { ref } = useParallax({ speed: 2 });

  return (
    <Box ref={ref} className="absolute inset-0 flex items-center pt-10">
      <svg viewBox="0 385 960 115">
        <path
          d="M0 385L13.3 399.2C26.7 413.3 53.3 441.7 80 451.5C106.7 461.3 133.3 452.7 160 452.7C186.7 452.7 213.3 461.3 240 459.8C266.7 458.3 293.3 446.7 320 446C346.7 445.3 373.3 455.7 400 460C426.7 464.3 453.3 462.7 480 449.8C506.7 437 533.3 413 560 404.8C586.7 396.7 613.3 404.3 640 414.2C666.7 424 693.3 436 720 436.7C746.7 437.3 773.3 426.7 800 416.8C826.7 407 853.3 398 880 407.2C906.7 416.3 933.3 443.7 946.7 457.3L960 471L960 541L946.7 541C933.3 541 906.7 541 880 541C853.3 541 826.7 541 800 541C773.3 541 746.7 541 720 541C693.3 541 666.7 541 640 541C613.3 541 586.7 541 560 541C533.3 541 506.7 541 480 541C453.3 541 426.7 541 400 541C373.3 541 346.7 541 320 541C293.3 541 266.7 541 240 541C213.3 541 186.7 541 160 541C133.3 541 106.7 541 80 541C53.3 541 26.7 541 13.3 541L0 541Z"
          fill="#3182CE"
          strokelinecap="round"
          strokelinejoin="miter"
        />
      </svg>
    </Box>
  );
}

export default FourthPageTransition;
