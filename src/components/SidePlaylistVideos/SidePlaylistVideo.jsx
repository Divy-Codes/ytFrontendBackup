import "./_sidePlaylistVideo.scss";
import { Col, Row } from "react-bootstrap";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import numeral from "numeral";
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function SidePlaylistVideo() {
  const seconds = dayjs.duration(128000).asSeconds();
  const videoDuration = dayjs.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="sidePlaylistSection align-items-start px-2">
      <Col xs={12} sm={4} md={5} className="videoThumbnail">
        <div className="sideVideoThumbnail">
          <LazyLoadImage
            src="https://i.ytimg.com/vi/mLFCSOLwfho/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBJa4akFCrF4oC0TwsRC8Jpy2E65w"
            alt="Video Thumbnail"
            effect="blur"
            className="sideThumbnail"
            wrapperClassName="sideVideoWrapper"
            width="100%"
          />
          <span className="sideVideoDuration">{videoDuration}</span>
        </div>
      </Col>
      <Col xs={12} sm={7} md={6} className="videoDetails p-0">
        <div className="otherDetails">
          <span className="sideVideoTitle">
            NodeJS Realtime Chat: Build a FULL-STACK app in 27 Minutes! (Best UI
            🤩)
          </span>
          <div className="sideVideoDetails">
            <div className="sideChannelName">
              Divyanshu Codes Youtube Divyanshu Codes Youtube Divyanshu Codes
              Youtube
            </div>
          </div>
          <div className="viewsRelativeTime">
            <span className="sideViews">{numeral("12800").format("0.a")}</span>
            &nbsp;&bull;&nbsp;
            <span className="relativeTime">
              {dayjs("2020-06-06").fromNow()}
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
}
