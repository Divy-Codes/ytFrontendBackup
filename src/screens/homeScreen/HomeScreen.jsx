import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "../../redux/slices/homeVideosSlice";
import { useEffect } from "react";

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeVideos());
  }, [dispatch]);

  const videos = useSelector((state) => state.homeVideos.videos);

  return (
    <Container>
      <CategoriesBar />
      {/* Row for video component */}
      <Row>
        {videos.map((video) => (
          <Col md={4} key={video.id}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// COMMENTS :-
/*
    1.) 3 large sized columns. 4 medium sized columns
    <Col lg={3} md={4}> 
    <Video />
    </Col>
*/
