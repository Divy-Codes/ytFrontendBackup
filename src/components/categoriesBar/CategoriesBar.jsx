import { useEffect, useState } from "react";
import "./_categoriesBar.scss";
import {
  getHomeVideos,
  getVideosByCategory,
} from "../../redux/slices/homeVideosSlice";
import { useDispatch } from "react-redux";
const str =
  "All ReduxToolkit ReactJS ArundhatiRoy PortfolioWebsite WordpressBlogHosting marxistProject marxismExplained YanisVaroufakis DavidGraeber";
const arr = str.split(" ");

export default function CategoriesBar() {
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();
  const categoryClicked = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    console.log(`active category inside useEffect:`, activeCategory);
    if (activeCategory == "All") {
      console.log(`all categ dispatched`);
      dispatch(getHomeVideos());
    } else {
      console.log(`active categ dispatched`);
      dispatch(getVideosByCategory(activeCategory));
    }
  }, [activeCategory, dispatch, setActiveCategory]);

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
