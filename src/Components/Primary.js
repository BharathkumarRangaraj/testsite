import React, { createContext, useEffect, useState } from "react";
import Cloths from "./Cloths";
import Clothdetas from "./Clothdetas";

export const context = createContext();

const Primary = () => {
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
    <div className="md:flex border w-full md:h-[1020px]">
      <context.Provider value={Images}>
        <Cloths />
        <Clothdetas />
      </context.Provider>
    </div>
  );
};

export default Primary;
