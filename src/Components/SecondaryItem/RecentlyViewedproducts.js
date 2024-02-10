import React, { useContext } from "react";
import { context } from "../Secondary";
import Imagecard from "./Imagecard";

const RecentlyViewedproducts = () => {
  const Images = useContext(context);
  return (
    <div>
      <div>
        <h1 className="font-bold text-center flex-wrap w-100%">
          RECENTLY VIEWED PRODUCTS
        </h1>
        <div className="md:flex overflow-x-auto">
          {Images.reverse().map((data) => (
            <Imagecard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedproducts;
