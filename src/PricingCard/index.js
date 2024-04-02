import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { Data } from "./CardData";

import { Data } from "./CardDate";

const PricingCard = () => {
  return (
    <>
      <Container>
        {Data.map((item, index) => (
          <CardContainer
            key={index}
            whileHover="hover"
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 1, ease: "backInOut" }}
          >
            <Content>
              <Tag>{item.tag}</Tag>
              <Price
                initial={{ scale: 0.85 }}
                variants={{
                  hover: { scale: 1 },
                }}
                transition={{ duration: 1, ease: "backInOut" }}
              >
                {item.price} <br /> {item.month}
              </Price>
              <Text>{item.text}</Text>
            </Content>
            <Button>Get Started</Button>
            {item.background}
          </CardContainer>
        ))}
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
 padding: 9rem 2rem;
`;

const CardContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  z-index: 10;
  width: 22rem;
  height: 28rem;
  flex-shrink: 0;
  background-color: #D46167;
  border-radius: 1rem;
  padding: 3rem;
  font-family: "Kanit", sans-serif;
  color: #ffffff;
`;

const Content = styled.div`
  position: relative;
  z-index: 20;
`;

const Tag = styled.span`
  margin-bottom: 0.75rem;
  display: block;
  width: fit-content;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  font-weight: 300;
`;

const Price = styled(motion.span)`
  font-size: 4rem;
  line-height: 4rem;

  transform-origin: top left;
`;

const Text = styled.p`
  font-size: 1rem;

  margin-top: 2rem;
`;

const Button = styled.button`
  position: absolute;
  height: 3rem;

  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 20;
  border-radius: 0.375rem;
  border: 0.125rem solid #ffffff;
  background-color: #ffffff;
  padding: 0.5rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #4a5568;
  backdrop-filter: blur(20px);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }
`;

export default PricingCard;
