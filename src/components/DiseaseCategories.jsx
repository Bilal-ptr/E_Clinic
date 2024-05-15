import React from "react";
import Card2 from "../ui/Card2";
import { useDiasease } from "./TreatementFilterSection/useDiseases";

const DiseaseCategories = () => {
  const { Diseases, isLoading, isError } = useDiasease();

  if (isLoading) return <p>loading...</p>;
  return (
    <div className=" my-20 flex flex-col gap-6 px-4">
      <h2 className=" text-center font-secondary text-3xl font-black uppercase">
        disease categories
      </h2>

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
        {Diseases?.map((cur, i) => i < 6 && <Card2 cur={cur} key={i} />)}
        <button className="  col-span-3 justify-self-center rounded-md bg-gray-500 px-5 py-1.5 font-medium text-white shadow-xl">
          see more
        </button>
      </div>
    </div>
  );
};

export default DiseaseCategories;
