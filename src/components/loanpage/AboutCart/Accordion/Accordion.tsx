import './accordion.scss';
import React, { useRef, useState } from "react";
import data from "./AccordionData";
import { RiArrowDropDownLine } from "react-icons/ri";

// Типизация пропсов для AccordionItem
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Компонент AccordionItem
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current ? `${contentHeight.current.scrollHeight}px` : 'auto' }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{answer}</p>
      </div>
    </div>
  );
};

// Типизация данных для Accordion
interface AccordionDataItem {
  question: string;
  answer: string;
}

// Компонент Accordion
const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data.map((item: AccordionDataItem, index: number) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;