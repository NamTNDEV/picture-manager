const { default: axiosClient } = require("./axiosClient");

const productApi = {
  getAll: (params) => {
    // const url = "https://pokeapi.co/api/v2/pokemon";
    const url = "/products";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
