import { useParams } from "react-router-dom";
export default function SearchScreen() {
  const { query } = useParams();
  return <div>Searched for {query}</div>;
}
