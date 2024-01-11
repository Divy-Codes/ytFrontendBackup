import { Col, Row } from "react-bootstrap";
import "./_VideoPlayerScreen.scss";
import VideoPlayerData from "../../components/videoPlayerData/VideoPlayerData";
import Comments from "../../components/comments/Comments";
import SidePlaylistVideo from "../../components/SidePlaylistVideos/SidePlaylistVideo";

export default function VideoPlayerScreen() {
  //We already have the Bootstrap Container in the HomeLayouot in App.jsx
  return (
    <Row>
      <Col xl={8}>
        <div className="videoPlayerContainer">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0Po2g_qQwlk"
            allowFullScreen
          />
        </div>
        <VideoPlayerData />
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
