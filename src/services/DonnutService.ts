import axios from "axios";
import { DonutDetail } from "../models/Donut";
import MultipleDonutResponse from "../models/MultipleDonutsResponse";
import SingleDonutResponse from "../models/SingleDonutResponse";

export const getAllDonuts = (): Promise<MultipleDonutResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")
    .then((response) => {
      return response.data;
    });
};

export const getDonutById = (id: string): Promise<DonutDetail> => {
  return axios
    .get(
      `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
        id
      )}.json`
    )
    .then((response) => response.data);
};
