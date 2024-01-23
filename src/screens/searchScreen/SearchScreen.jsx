import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSearchedVideos } from "../../redux/slices/searchVideoSlice";
import SearchedVideo from "../../components/searchedVideo/SearchedVideo";

export default function SearchScreen() {
  const fetchMoreData = () => {
    // dispatch(getSearchedVideos(query));
  };
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`getSearchVideos dispatched`);
    // dispatch(getSearchedVideos(query));
  }, [query, dispatch]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  console.log(`videos:`, videos);

  console.log(`query:`, query);

  return (
    <Container className="searchContainer">
      <InfiniteScroll
        // height={300}
        dataLength={videos.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<div>Loading...</div>}
      >
        {/* <Row> */}
        {videos && !loading ? (
          videos.map((video) => (
            <SearchedVideo video={video} key={video.id.videoId} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
        {/* {videos && !loading ? (
            videos.map((video) => (
              <SidePlaylistVideo
                video={video}
                key={video.id.videoId}
                searchScreen
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )} */}
        {/* </Row> */}
      </InfiniteScroll>
    </Container>
    // <div>Searched videos : {query}</div>
  );
}
