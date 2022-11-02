import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

function BackgroundAnim() {
  return (
    <Box className="relative mb-16">
      <Box
        ml={"5%"}
        className="absolute inset-0 flex items-center z-10 text-5xl	"
      >
        <Box>
          J<span className="text-red-500">o</span>sip De
          <span className="text-green-500">s</span>pot | W
          <span className="text-blue-500">e</span>b Develo
          <span className="text-yellow-500">p</span>er
        </Box>
      </Box>
      <svg viewBox="0 0 190 90">
        <motion.path
          d="M -1 14 H 170 V 100"
          fillOpacity={"0"}
          stroke="#E53E3E" //RED
          strokeWidth="1px"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, yoyo: "10000" }}
        />
        <motion.path
          d="M -1 16 H 172 V 100"
          fillOpacity={"0"}
          stroke="#3182CE" //BLUE
          strokeWidth="1px"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, delay: 0.5, yoyo: "10000" }}
        />
        <motion.path
          d="M -1 18 H 174 V 100"
          fillOpacity={"0"}
          stroke="#38A169" //GREEN
          strokeWidth="1px"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, delay: 1, yoyo: "10000" }}
        />
        <motion.path
          d="M -1 20 H 176 V 100"
          fillOpacity={"0"}
          stroke="#D69E2E" //YELLOW
          strokeWidth="1px"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, delay: 1.5, yoyo: "10000" }}
        />
      </svg>
    </Box>
  );
}

export default BackgroundAnim;
