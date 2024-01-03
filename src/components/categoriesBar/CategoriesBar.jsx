import { useState } from "react";
import "./_categoriesBar.scss";
import { getVideosByCategory } from "../../redux/slices/homeVideosSlice";
import { useDispatch } from "react-redux";
const str =
  "ReduxToolkit React ArundhatiRoy PortfolioWebsite WordpressBlogHosting marxistProject marxismExplained YanisVaroufakis DavidGraeber";
const arr = str.split(" ");

export default function CategoriesBar() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("Roy");
  const categoryClicked = (category) => {
    setActiveCategory(category);
    dispatch(getVideosByCategory(category));
  };
  return (
    <div className="categoriesBar">
      {arr.map((category, index) => (
        <span
          key={index.toString()}
          onClick={() => categoryClicked(category)}
          className={activeCategory === category ? "active" : ""}
        >
          {category} &nbsp;
        </span>
      ))}
    </div>
  );
}
