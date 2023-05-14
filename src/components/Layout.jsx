import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import { createFromIconfontCN } from "@ant-design/icons";
import SearchCpt from "./search/Search";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js",
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js",
  ],
});

const Layout = () => {
  return (
    <div className="root">
      <div className="PositionHeaderHomeImg">
        <header>
          <div className="container">
            <div className="headerBLock">
              <NavLink className="LuxLogo" to="/">
                LuxShop
              </NavLink>

              <nav>
                <SearchCpt />

                <NavLink className="navLINK" to="/women">
                  Women
                </NavLink>
                <NavLink className="navLINK" to="/men">
                  Men
                </NavLink>
                <NavLink to="/cart">
                  <IconFont
                    type="icon-shoppingcart"
                    style={{ fontSize: 24, color: "#0a8077" }}
                  />
                </NavLink>
              </nav>
            </div>
          </div>
        </header>

        <aside>
          <div className="container">
            <div className="wrapp">
              <div>
                <Link className="navLINK" to="/cloth">
                  Сloth
                </Link>
                <Link className="navLINK" to="/shoes">
                  Shoes
                </Link>
                <Link className="navLINK" to="/accessories">
                  Accessories
                </Link>
                <Link className="navLINK" to="/sport">
                  Sport
                </Link>
                <Link className="navLINK" to="/beauty">
                  Beauty
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main>
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>

      <footer>
        <div className="container">
          <div className="footer">
            <h2 className="LuxFooter"> LuxShop</h2>
            <div>
              <p>+996709654592</p>
            </div>
            <div>
              <a href="https://www.luxzury.com/" className="sylka">
                www.luxShop.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
