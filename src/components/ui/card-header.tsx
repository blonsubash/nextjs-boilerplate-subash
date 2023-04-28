import React from "react";
import cardClass from "./card.module.css";
interface CardProps {
  children: string;
}
const CardHeader: React.FC<CardProps> = ({ children }) => {
  return <div className={`${cardClass.cardheader}`}>{children}</div>;
};

export default CardHeader;
