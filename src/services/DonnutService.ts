import axios from "axios";
import MultipleGifResponse from "../models/MultipleGifResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getAllDonuts = (): Promise<MultipleGifResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json", {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
