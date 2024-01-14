import { Col, Row } from "react-bootstrap";
import "./_VideoPlayerScreen.scss";
import VideoPlayerData from "../../components/videoPlayerData/VideoPlayerData";
import Comments from "../../components/comments/Comments";
import SidePlaylistVideo from "../../components/SidePlaylistVideos/SidePlaylistVideo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/slices/videoByIdSlice";

export default function VideoPlayerScreen() {
  const { videoId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(videoId));
  }, [dispatch, videoId]);

  // const { video, loading } = useSelector((state) => state.selectedVideoDetails);
  const loading = false;

  return (
    //We already have the Bootstrap Container in the HomeLayouot in App.jsx
    <Row>
      <Col xl={8}>
        <div className="videoPlayerContainer">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
            // title={video?.snippet?.title}
          />
        </div>
        {!loading ? (
          <VideoPlayerData videoId={videoId} />
        ) : (
          // <VideoPlayerData video={video} videoId={videoId} />
          <h5>Loading...</h5>
        )}
        <Comments />
      </Col>
      <Col xl={4}>
        {[...Array(20)].map((item, i) => (
          <SidePlaylistVideo key={i} />
        ))}
      </Col>
    </Row>
  );
}
