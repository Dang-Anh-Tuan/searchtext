import axiosClient from "./axiosClient";

const searchApi = {
  findSimilarDoc: (params) => {
    const url = "/search/result";
    return axiosClient.post(url, params);
  },
};

export default searchApi;
