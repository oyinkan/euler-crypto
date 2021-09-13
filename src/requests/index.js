import axios from "axios";
const baseURL = "https://cors.bridged.cc/https://api.opensea.io/";

const assetRequest = () => {
  const getAllAssets = async () => {
    try {
      const response = await axios.get(baseURL + "api/v1/assets");
      return response.data;
    } catch(error) {
      return error;
    }
  }

  const getAssetById = async (id) => {
    // try {
    //   const response = await axios.get(baseURL + "api/v1/assets");
    //   return response.data;
    // } catch(error) {
    //   return error;
    // }
  }

  return {
    getAllAssets,
    getAssetById
  }
}

export default assetRequest;
