import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <svg viewBox="0 0 60 30" width={"100%"} height={"100%"}>
      <polyline points="1,15 13,7 1,15 13,23" fill="none" stroke="#E53E3E" />
      <text fontSize={"1.5em"} x="18" y="20" fill="#3182CE">
        jd
      </text>
      <polyline points="38,25 45,5" fill="none" stroke="#D69E2E" />
      <polyline points="60,15 48,7 60,15 48,23" fill="none" stroke="#38A169" />
    </svg>
  );
}

export default Logo;
