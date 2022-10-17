import { useEffect, useState } from "react";
import Donut from "../models/Donut";
import { getAllDonuts } from "../services/DonnutService";
import "./Main.css";
import ResultsList from "./ResultsList";
// import SearchForm from "./SearchForm";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [donuts, setDonuts] = useState<Donut[]>([]);
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");

  useEffect(() => {
    getAllDonuts().then((response) => {
      setDonuts(response.results);
    });
  }, []);

  return (
    <div className="Main">
      <ResultsList donuts={donuts} />
    </div>
  );
};

export default Main;
