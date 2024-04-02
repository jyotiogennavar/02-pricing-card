import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundSemi = () => {
  return (
    <BackgroundSvg
      width="216"
      height="480"
      viewBox="0 0 216 480"
      fill="none"
      initial={{ scale: 1 }}
      variants={{
        hover: {
          scale: 1.2,
          y: 5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.path
        variants={{
          hover: {
            scaleY: 0.3,
            y: 40,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        d="M0 311C0 255.772 44.7715 211 100 211H116C171.228 211 216 255.772 216 311V480H0V311Z"
        fill="black"
      />
      <motion.circle
        variants={{
          hover: {
            scaleY: 1.25,
            scaleX: 1.25,
            y: 40,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.3,
        }}
        cx="108.5"
        cy="99.5"
        r="99.5"
        fill="black"
      />
    </BackgroundSvg>
  );
};

export const BackgroundDiamonds = () => {
  return (
    <BackgroundSvg 
    initial={{ scale: 1 }}
    variants={{
      hover: {
        scale: 1.2,
        y: 5,
      },
    }}
    transition={{
      duration: 1,
      ease: "backInOut",
    }}
    width="256" height="417" viewBox="0 0 256 417" fill="none">
      <motion.path
        variants={{
          hover: {
            scale: 0.8,
            y: -20,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}

        d="M119.751 7.11255C123.633 3.1844 129.965 3.14714 133.893 7.02934L247.694 119.499C251.622 123.381 251.659 129.713 247.777 133.641L198.571 183.429C159.749 222.71 96.4341 223.083 57.1525 184.261L7.36469 135.055C3.43654 131.173 3.39928 124.842 7.28148 120.913L119.751 7.11255Z"
        fill="black"
      />
      <motion.path
          variants={{
            hover: {
              scale: 0.8,
              y: -30,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
  
        d="M119.499 77.6368C123.381 73.7087 129.712 73.6714 133.641 77.5536L247.441 190.023C251.37 193.905 251.407 200.237 247.525 204.165L198.319 253.953C159.497 293.234 96.1819 293.607 56.9003 254.785L7.11249 205.58C3.18434 201.697 3.14708 195.366 7.02928 191.438L119.499 77.6368Z"
        fill="black"
      />
      <motion.path
          variants={{
            hover: {
              scale: 0.8,
              y: -40,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.4,
          }}
  
        d="M120.499 168.637C124.381 164.709 130.712 164.671 134.641 168.554L248.441 281.023C252.37 284.905 252.407 291.237 248.525 295.165L199.319 344.953C160.497 384.234 97.1819 384.607 57.9003 345.785L8.11249 296.58C4.18434 292.697 4.14708 286.366 8.02928 282.438L120.499 168.637Z"
        fill="black"
      />
    </BackgroundSvg>
  );
};

export const BackgroundCircle = () => {
  return (
    <BackgroundSvg
      width="231"
      height="342"
      viewBox="0 0 231 342"
      fill="none"
      initial={{ scale: 1 }}
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="115.5"
        cy="115.5"
        r="115.5"
        fill="black"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="115.5"
        cy="298.5"
        rx="115.5"
        ry="43.5"
        fill="black"
      />
    </BackgroundSvg>
  );
};


const BackgroundSvg = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;