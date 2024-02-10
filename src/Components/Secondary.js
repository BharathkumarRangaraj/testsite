import React, { createContext, useEffect, useState } from "react";
import SimilarProducts from "./SecondaryItem/SimilarProducts";
import RecentlyViewedproducts from "./SecondaryItem/RecentlyViewedproducts";

export const context = createContext();
const Secondary = () => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);
  async function getAPI() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setImages(json);
  }
  return (
    <div className="m-4 md:mt-8 mt-[1000px]">
      <context.Provider value={Images}>
        <SimilarProducts />
        <RecentlyViewedproducts />
      </context.Provider>
    </div>
  );
};

export default Secondary;
