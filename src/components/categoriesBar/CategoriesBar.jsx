import { useReducer, useState } from "react";
import "./_categoriesBar.scss";
const str =
  "Arundhati Roy jai vipra nalini prateek Amit Bhim Spandan blabla Badal Bscem KYS CPIM CPI Disha bigul Fascism Communism socialism anarchism anarhco-communism";
const arr = str.split(" ");

export default function CategoriesBar() {
  // const [activeElement, setActiveElement] = useState("Roy");
  // const handleClick = (value) => {
  //   setActiveElement(value);
  // };
  const [activeCategory, setActiveCategory] = useState("Roy");
  const categoryClicked = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className="categoriesBar">
      {arr.map((category, i) => (
        <span
          key={i}
          // onClick={() => handleClick(value)}
          onClick={() => categoryClicked(category)}
          className={activeCategory === category ? "active" : ""}
        >
          {category} &nbsp;
        </span>
      ))}
    </div>
  );
}
