import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getAllDonuts } from "../services/DonnutService";
import "./Main.css";
import ResultsList from "./ResultsList";
// import SearchForm from "./SearchForm";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [donuts, setDonuts] = useState<Gif[]>([]);
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");

  useEffect(() => {
    getAllDonuts().then((response) => {
      setDonuts(response.data);
    });
  }, []);

  return (
    <div className="Main">
      <ResultsList gifs={donuts} />
    </div>
  );
};

export default Main;
