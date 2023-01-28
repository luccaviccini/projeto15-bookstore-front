import axios from "axios";


const BASE_URL = process.env.REACT_APP_API_URL;

function createConfig(token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }


function getMyBag(token) {
    const config = createConfig(token);
    return axios.get(`${BASE_URL}/user-bag`, config);
}

export const apiServices = {
    getMyBag,
};