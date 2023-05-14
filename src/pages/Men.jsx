import React from "react";
import Card from "../pages/Card";
import { useSelector } from "react-redux";

const getAllList = (state) => state;

const Men = () => {
  const { accers, TItem, shoesItem } = useSelector(getAllList);
  const allList = [...accers, ...TItem, ...shoesItem].filter(
    (el) => el.category === "men"
  );
  return (
    <div className="cards">
      {allList?.map((item) => {
        return (
          <div key={item.id}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Men;
