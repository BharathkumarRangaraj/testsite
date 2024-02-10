import React, { useContext } from "react";
import { context } from "../Secondary";
import Imagecard from "./Imagecard";

const SimilarProducts = () => {
  const Images = useContext(context);
  return (
    <div>
      <h1 className="md:mt-0 mt-40 font-bold text-center flex-wrap w-100%">
        SIMILAR PRODUCTS
      </h1>
      <div className="md:flex md:overflow-x-auto align-middle ">
        {Images.map((data) => (
          <Imagecard data={data} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
