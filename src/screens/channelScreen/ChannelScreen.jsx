import { useParams } from "react-router-dom";
import "./_channelScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getChannelVideos } from "../../redux/slices/channelVideosSlice";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import ChannelVideosSkeleton from "../../skeletons/ChannelVideosSkeleton";
import { getChannelById } from "../../redux/slices/channelById";
import numeral from "numeral";

export default function ChannelScreen() {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelVideos(channelId));
    dispatch(getChannelById(channelId));
  }, [channelId, dispatch]);

  const { videos, loading } = useSelector(
    (state) => state.uploadedChannelVideos
  );

  const channel = useSelector((state) => state.selectedChannelDetails.channel);
  console.log(`Channel Details:`, channel);
  const {
    snippet: {
      customUrl,
      title,
      description,
      thumbnails: { high },
    },

    statistics: { subscriberCount, videoCount },
  } = channel;

  return (
    <>
      <div className="infoContainer">
        <div className="thumbnailContainer">
          <img src={high.url} alt="Channel Thumbnail" className="thumbnail" />
        </div>
        <div className="detailsContainer">
          <h2>{title}</h2>
          <div className="stats">
            <span className="customUrl">{customUrl} &bull;&nbsp;</span>
            <span className="videoCount">
              {numeral(videoCount).format("0.a")} videos &bull;&nbsp;
            </span>
            <span className="subscriberCount">
              {numeral(subscriberCount).format("0.a")} Subscribers
            </span>
          </div>
          <div className="description">{description}</div>
          <button>Subscribe</button>
        </div>
      </div>
      <Container className="Container" id="homeScreenContainer">
        <Row>
          {!loading && videos
            ? videos.map((video) => (
                <Col md={4} sm={6} xl={3} key={video.id.videoId || video.id}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(20)].map((item, i) => (
                <Col md={4} sm={6} xl={3} key={i}>
                  <ChannelVideosSkeleton />
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
}
