import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDonutById } from "../services/DonnutService";
import Gif, { DonutDetail } from "../models/Donut";
import Result from "./Result";
import Donut from "../models/Donut";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [donutDetails, setDonutDetails] = useState<DonutDetail | null>(null);

  useEffect(() => {
    getDonutById(id!).then((response) => {
      setDonutDetails(response);
    });
  }, [id]);

  return (
    <div className="Details">
      <p>{donutDetails?.calories}</p>
      <p>{donutDetails?.extras}</p>
      <p>{donutDetails?.photo}</p>
      <p>{donutDetails?.photo_attribution}</p>
    </div>
  );
};

export default Details;
