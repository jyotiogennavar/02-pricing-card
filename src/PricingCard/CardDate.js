import React from "react";


import { BackgroundCircle, BackgroundDiamonds, BackgroundSemi } from "./BackgroundSVG";

export const Data = [
  {
    tag: "Pro",
    price: "$299",
    month: "/Month",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.",
    background: <BackgroundCircle />,
  },
  {
    tag: "Enterprise",
    price: "$399",
    month: "/Month",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.",
    background: <BackgroundDiamonds />,
  },
  {
    tag: "Starter",
    price: "Free",
    month: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.",
    background: <BackgroundSemi />,
  },
];