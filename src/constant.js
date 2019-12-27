import axios from "axios";
const URL = "https://api.tvmaze.com/search/shows?q=batman";

export const getMovie = () => {
    return axios.get(URL).then(resp => resp.data);
};

