import React from "react";
import { useSelector } from "react-redux";
import Cards from "../pages/Card";

const getAllList = (state) => state;

const Women = () => {
  const { accers, TItem, shoesItem, body, face, hairCare, sport } =
    useSelector(getAllList);
  const allList = [
    ...accers,
    ...TItem,
    ...shoesItem,
    ...body,
    ...face,
    ...hairCare,
    ...sport,
  ].filter((el) => el.category === "women");
  return (
    <div className="cards">
      {allList?.map((item) => {
        return (
          <div key={item.id}>
            <Cards item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Women;
