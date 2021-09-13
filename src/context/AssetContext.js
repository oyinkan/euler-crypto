import React, { useContext, useState, useEffect, createContext } from "react";
import assetRequest from "../requests/index";

const AssetContext = createContext();

export function AssetContextProvider({ children }) {
  const [assetData, setAssetData] = useState([]);

  const { getAllAssets } = assetRequest();

  const getAllAssetsList = async() => {
    const response = await getAllAssets();
    setAssetData(response.assets);
  }

  useEffect(() => {
    getAllAssetsList();
  }, []);

  return(
    <AssetContext.Provider value={{assetData}}>
      {children}
    </AssetContext.Provider>
  )
}

// create a hook to use the AssetContext
export function useAssetAPI() {
  const context = useContext(AssetContext);
  if (context === undefined) {
    throw new Error("Context must be within a Provider");
  }

  return context;
}
