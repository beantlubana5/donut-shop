import Gif from "../models/Gif";
import { Link } from "react-router-dom";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <h2>{gif.title}</h2>
      <Link to={`/gifs/${encodeURIComponent(gif.id)}`}>
        <img src={gif.images.original.url} alt={gif.title} />
      </Link>
      <a href={gif.url}>Link to original</a>
    </li>
  );
};

export default Result;
