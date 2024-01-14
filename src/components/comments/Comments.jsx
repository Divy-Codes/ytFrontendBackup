import "./_comments.scss";
import Comment from "../comment/Comment";
import { useState, useEffect } from "react";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
export default function Comments() {
  //Collapse the comments if windowWidth<1200px

  const CollapsedComments = () => {
    // const [commentsVisible, toggleVisbility] = useReducer(
    //   (value) => !value,
    //   false
    // );
    const [openCommentsPanel, setCommentsPanel] = useState(false);

    return (
      <div className="collapsedComments">
        <p
          className="commentStatus"
          onClick={() => setCommentsPanel(!openCommentsPanel)}
        >
          {openCommentsPanel ? (
            <span>Hide Comments</span>
          ) : (
            <span>Show Comments</span>
          )}
        </p>
        <div className="panelContainer">
          <SlidingPanel
            type="bottom"
            isOpen={openCommentsPanel}
            backdropClicked={() => setCommentsPanel(false)}
            size={60}
            panelClassName="commentsPanel"
            panelContainerClassName="panelContainer"
            // noBackdrop={noBackdrop}
          >
            <p className="closePanel" onClick={() => setCommentsPanel(false)}>
              Hide Comments
            </p>
            <ul className="commentsList">
              {[...Array(20)].map((comment, i) => (
                <li key={i}>
                  <Comment />
                </li>
              ))}
            </ul>
          </SlidingPanel>
        </div>
      </div>
    );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  const [inputValue, setInputValue] = useState("");
  return (
    <section className="commentSection">
      <h5>1697 Comments</h5>
      <div className="commentsForm d-flex w-100 my-2">
        <img
          src="https://yt3.ggpht.com/NOSx1LAKxaiTIBDjoFRm9xvT7Ytp_KjZTrxyci6QMc-2kpKJeDqqCaDl4KbGqoB-PLH4063mnQ=s88-c-k-c0x00ffffff-no-rj"
          alt="Your Channel Thumbnail"
          className="rounded-circle"
        />
        <form className="d-flex flex-grow-1">
          <input
            type="text"
            name="comment"
            id="commentInput"
            placeholder="Add a comment ..."
            className="flex-grow-1"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="border-0 p-2" disabled={inputValue === ""}>
            Comment
          </button>
        </form>
      </div>
      {/* If windowWidth<1200 collapse comments */}
      {windowWidth < 1200 ? (
        <CollapsedComments />
      ) : (
        <ul className="commentsList">
          {[...Array(20)].map((comment, i) => (
            <li key={i}>
              <Comment />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
