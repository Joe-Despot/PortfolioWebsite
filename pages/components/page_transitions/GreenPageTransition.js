import React from "react";
import { useParallax } from "react-scroll-parallax";
import { Box } from "@chakra-ui/react";

function FirstPageTransition() {
  const { ref } = useParallax({ speed: 5 });

  return (
    <Box ref={ref} className="absolute inset-0 flex items-center">
      <svg
        viewBox="0 385.22 960 200"
      >
        <path
          d="M0 437L13.3 439.8C26.7 442.7 53.3 448.3 80 444.3C106.7 440.3 133.3 426.7 160 422.7C186.7 418.7 213.3 424.3 240 423C266.7 421.7 293.3 413.3 320 406C346.7 398.7 373.3 392.3 400 388.3C426.7 384.3 453.3 382.7 480 393C506.7 403.3 533.3 425.7 560 431.2C586.7 436.7 613.3 425.3 640 414C666.7 402.7 693.3 391.3 720 397.2C746.7 403 773.3 426 800 437.3C826.7 448.7 853.3 448.3 880 437.8C906.7 427.3 933.3 406.7 946.7 396.3L960 386L960 541L946.7 541C933.3 541 906.7 541 880 541C853.3 541 826.7 541 800 541C773.3 541 746.7 541 720 541C693.3 541 666.7 541 640 541C613.3 541 586.7 541 560 541C533.3 541 506.7 541 480 541C453.3 541 426.7 541 400 541C373.3 541 346.7 541 320 541C293.3 541 266.7 541 240 541C213.3 541 186.7 541 160 541C133.3 541 106.7 541 80 541C53.3 541 26.7 541 13.3 541L0 541Z"
          fill="#38A169"
          strokLinecap="round"
          strokeLinejoin="miter"
        />
      </svg>
    </Box>
  );
}

export default FirstPageTransition;
