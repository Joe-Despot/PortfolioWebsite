import React from "react";
import { useParallax } from "react-scroll-parallax";

function SecondPageTransition() {
  const { ref } = useParallax({ speed: 4 });

  return (
    <div ref={ref} className="absolute inset-0 flex items-center">
      <svg viewBox="0 373.43 960 130">
        <path
          d="M0 411L22.8 418.8C45.7 426.7 91.3 442.3 137 437C182.7 431.7 228.3 405.3 274 395C319.7 384.7 365.3 390.3 411.2 401.5C457 412.7 503 429.3 548.8 420C594.7 410.7 640.3 375.3 686 373.5C731.7 371.7 777.3 403.3 823 416.8C868.7 430.3 914.3 425.7 937.2 423.3L960 421L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
          fill="#D69E2E"
          strokelinecap="round"
          strokelinejoin="miter"
        ></path>
      </svg>
    </div>
  );
}

export default SecondPageTransition;
