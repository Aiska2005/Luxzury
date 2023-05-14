import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import img from "../img/hero2.jpg";

const Luxzury = () => {
  const Luxzury = useSelector((state) => state.luxzury);

  return (
    <div>
      <div className="bgImgHome">
        <div className="bgRoot">
          <div>{/* <img className="homeText" src={img} alt="" /> */}</div>
        </div>
      </div>

      <div className="blockPopulation">
        <h2 className="popular">Популярное</h2>
        <div className="media-scroller">
          {Luxzury.map((item) => {
            return (
              <div className="cardAnimation" key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="NewItemsLuxzury">
        <h3>New </h3>
        <p>
          Additional 15%, <br />
          on new items
        </p>
      </div>

      <div className="blockAsideHome">
        <div>
          <Link to="/accessories">
            <div className="blockHomeMoreDetails">
              <img
                className="imgLuxzuryHome"
                src="https://a.lmcdn.ru/img236x341/M/P/MP002XW0D71Z_17175820_2_v1.jpg   "
                alt=""
              />
              <h3>
                Узнать по подробнее
                <RightOutlined />
              </h3>
            </div>
          </Link>

          <Link to="/shoes">
            <div className="blockHomeMoreDetails">
              <img
                className="imgLuxzuryHome"
                src=" https://a.lmcdn.ru/img236x341/R/T/RTLAAC979702_16327578_2_v1.jpg"
                alt=""
              />
              <h3>
                Узнать по подробнее
                <RightOutlined />
              </h3>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/sport">
            <img
              className="ImgSportStyle"
              src="https://a.lmcdn.ru/bs2/4/74/w_17881122_5_1_colors.jpg"
              alt=""
            />

            <h3 className="textItemSportStyle">
              В спортивном стиле
              <RightOutlined />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Luxzury;
