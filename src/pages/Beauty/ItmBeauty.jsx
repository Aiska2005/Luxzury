import React from "react";
import { NavLink, Link } from "react-router-dom";

const ItmBeauty = () => {
  return (
    <>
      <div className="blockGlav">
        <h3 className="glav">
          <Link to="/">Главная</Link>
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        <NavLink to="/face">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/3/47/face_15202_az.jpg"
            />
            <p>Лицо</p>
          </div>
        </NavLink>

        <NavLink to="/body">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/4/89/body_15202_az.jpg"
            />
            <p>Тело</p>
          </div>
        </NavLink>
        <NavLink to="/hairCare">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/3/91/hair_treatment_15202_az.jpg"
              alt=""
            />
            <p>Уход за волосами</p>
          </div>
        </NavLink>
        <NavLink to="/makeup">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/9/85/makeup_15202_az.jpg"
              alt=""
            />

            <p>Макияж</p>
          </div>
        </NavLink>
        <NavLink to="/perfumery">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/6/38/fragrance_15202_az.jpg"
            />
            <p>Парфюмерия</p>
          </div>
        </NavLink>
        <NavLink to="/manicure">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/0/53/nails_15202_az.jpg"
            />
            <p>Маникюр</p>
          </div>
        </NavLink>
        <NavLink to="/styling">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/7/60/hair_15202_az.jpg"
            />
            <p>Укладка</p>
          </div>
        </NavLink>
        <NavLink to="/brushes">
          <div className="animation">
            <img
              className="imgBorder"
              src="//a.lmcdn.ru/bs2/1/28/accessories_kz_15202_az.jpg"
              alt=""
            />
            <p>Кисти и спонжи</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default ItmBeauty;
