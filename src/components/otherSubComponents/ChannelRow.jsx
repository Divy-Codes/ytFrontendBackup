import { LazyLoadImage } from "react-lazy-load-image-component";
import "./_channelRow.scss";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ChannelRow({ video, subscriptions }) {
  const navigate = useNavigate();
  const {
    id,
    snippet: {
      title,
      description,
      channelId,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  const idOfChannel = resourceId?.channelId || channelId;
  console.log(`channel ID:`, idOfChannel);

  const openChannel = () => {
    navigate(`/channel/${idOfChannel}`);
  };

  return (
    <Row
      className="channelRow px-2 py-2 m-2 align-items-center"
      onClick={openChannel}
    >
      <Col xs={12} sm={4} md={4} className="videoThumbnail">
        <div className="channelThumbnailWrapper">
          <LazyLoadImage
            // src="https://i.ytimg.com/vi/mLFCSOLwfho/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBJa4akFCrF4oC0TwsRC8Jpy2E65w"
            src={medium.url}
            alt="Channel Thumbnail"
            effect="blur"
            className="channelThumbnailImage"
            width="100%"
          />
        </div>
      </Col>
      <Col xs={12} sm={7} md={7} className="videoDetails channelDetails p-0">
        <span className="channelTitle">
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          corrupti aperiam saepe mollitia quos odio nam */}
          {title}
        </span>
        <div className="channelDescription">{description}</div>
        {/* <div className="channelDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, rem
          non quibusdam a molestias impedit et iure tempora dolorum excepturi
          consequuntur obcaecati nostrum, tempore ex nobis distinctio
          reprehenderit ipsum iusto?
        </div> */}
        <div className="numOfVideos">
          {video?.contentDetails.totalItemCount}&nbsp;Videos
        </div>
      </Col>
    </Row>
  );
}
