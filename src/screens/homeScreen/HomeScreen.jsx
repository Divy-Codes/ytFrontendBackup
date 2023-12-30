import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";

//PENDING Add key to Col inside map

export default function HomeScreen() {
  return (
    <Container>
      <CategoriesBar />
      {/* Row for video component */}
      <Row>
        {[...new Array(20)].map((item, i) => (
          <Col md={4} key={i}>
            <Video />
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
