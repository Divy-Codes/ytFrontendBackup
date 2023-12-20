import { useRef } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
export default function Video() {
  // const title = useRef();
  // const elementHeight = parseInt(title.current.offsetHeight);
  // const lineHeight = parseInt(
  //   window.getComputedStyle(title.current, null).getPropertyValue("line-height")
  // );
  // const numberOfLines = Math.floor(elementHeight / lineHeight);
  // console.log(numberOfLines);

  return (
    <div className="videoContainer">
      <div className="video">
        <img
          src="https://i.ytimg.com/vi/u0JS26tiRCA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBu2_UeIVO2dbvIyDw-OQ3h-SBqfg"
          alt="video Thumbnail"
        />
        <span>05:48</span>
      </div>
      <div className="detailsContainer">
        <div className="channelImage">
          <img
            src="https://yt3.ggpht.com/ytc/AIf8zZRa_GyvmUD5k59-H2EPR41y0YF_LhRy9gJTgOGR=s88-c-k-c0x00ffffff-no-rj"
            alt="Channel Image"
          />
        </div>
        <div className="details">
          <div className="videoTitle">
            Creating a youtube clone to get a god damn job in this fucking
            capitalist world. Am not sure if I'll get one or not
          </div>
          <div className="videoDetails">
            <span className="videoChannel">Channel Name</span>
            <span>
              <AiFillEye />
              &nbsp; 5m views &bull; 5 days ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

//videoTitle has to end in two lines
