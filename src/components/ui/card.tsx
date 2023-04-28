import React, { ReactComponentElement, ReactNode } from "react";
import cardClass from "./card.module.css";
interface CardProps {
  children: ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={`${cardClass.card}`}>{children}</div>;
};

export default Card;
