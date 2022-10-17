import Donut from "../models/Donut";
import { Link } from "react-router-dom";
import "./Result.css";

interface Props {
  donut: Donut;
}

const Result = ({ donut }: Props) => {
  return (
    <li className="Result">
      <Link to={`/donuts/${encodeURIComponent(donut.id)}`}>
        <h2>{donut.name}</h2>
        {/* <img src={donut.photo} alt={donut.name} /> */}
      </Link>
      {/* <a href={donut.photo}>Link to original</a> */}
    </li>
  );
};

export default Result;
