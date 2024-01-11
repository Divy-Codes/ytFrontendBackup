import "./_videoPlayerData.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import numeral from "numeral";
import { useReducer } from "react";
import { VscThumbsdown } from "react-icons/vsc";
import { VscThumbsdownFilled } from "react-icons/vsc";
import { VscThumbsup } from "react-icons/vsc";
import { VscThumbsupFilled } from "react-icons/vsc";

export default function VideoPlayerData() {
  const [liked, toggleLiked] = useReducer((value) => !value, false);
  const [disliked, toggleDisliked] = useReducer((value) => !value, false);
  const [showMore, toggleShowMore] = useReducer((value) => !value, false);
  return (
    <div className="videoData">
      <div className="title">
        <h4 className="videoTitle">
          Part 8 : UI Design : Watch Screen - YouTube Clone using React & API
        </h4>
      </div>
      <div className="channelDetailsContainer d-flex justify-content-between align-items-center ">
        <div className="channelDetails d-flex align-items-center gap-2">
          <img
            src="https://yt3.ggpht.com/NOSx1LAKxaiTIBDjoFRm9xvT7Ytp_KjZTrxyci6QMc-2kpKJeDqqCaDl4KbGqoB-PLH4063mnQ=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="channelImage rounded-circle"
          />
          <div className="channel d-flex flex-column ">
            <span className="channelTitle">Youtube Channel Name</span>
            <span className="subscribers">
              {numeral(175025).format("0.a")} subsribers
            </span>
          </div>
        </div>
        <div className="subscribeAndLike d-flex gap-3">
          <button className="likeUnlike">
            <span onClick={toggleLiked} className="likeButton">
              {liked ? (
                <span>
                  <VscThumbsupFilled size={26} />
                </span>
              ) : (
                <span>
                  <VscThumbsup size={26} />
                </span>
              )}
              &nbsp;
              {numeral(180000).format("0.a")}
            </span>
            <span>|</span>
            <span onClick={toggleDisliked} className="dislikeButton">
              {disliked ? (
                <span>
                  <VscThumbsdownFilled size={26} />
                </span>
              ) : (
                <span>
                  <VscThumbsdown size={26} />
                </span>
              )}
            </span>
          </button>
          <div className="subscribeButton">
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="description">
        <span>
          <strong>{numeral(1800000).format("0.a")}</strong>
        </span>
        &nbsp;
        <span>
          <strong>{dayjs("2018-08-08").fromNow()}</strong>
        </span>
        &nbsp;
        <p
          className={!showMore ? "showLess descriptionText" : "descriptionText"}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae at
          possimus consequatur, recusandae reiciendis magnam! Expedita numquam,
          saepe dolorum dicta aperiam cumque optio, dolores libero
          reprehenderit, consequuntur nam beatae labore! Ea earum nostrum velit
          numquam quasi necessitatibus officiis deserunt placeat vel laboriosam
          minima vero, asperiores in possimus laudantium maiores omnis
          repudiandae ipsam eligendi, doloremque, nesciunt quae obcaecati
          facere. Officiis, itaque. Fugiat dicta animi quos veniam, aliquam
          quaerat molestiae illo aperiam praesentium labore unde eius natus
          nesciunt similique repellat quasi molestias ipsa, cum magni fugit
          maiores suscipit. Voluptatum velit cumque libero? lorem*5
        </p>
        <span className="showMore" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </span>
      </div>
    </div>
  );
}
