import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-contatiner">
          <div className="nav1">
            <img
              className="log_instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              width="103px"
              height="29px"
              alt="Logo"
            />
          </div>
          <input id="searchInput" type="search" placeholder="검색" />
          <div className="nav2">
            <a className="nav_link" href="mainpage.html">
              <i className="fas fa-home fa"></i>
            </a>
            <a className="nav_link" href="mainpage.html">
              <i className="far fa-paper-plane"></i>
            </a>
            <a className="nav_link" href="mainpage.html">
              <i className="far fa-compass fa"></i>
            </a>
            <a className="nav_link" href="mainpage.html">
              <i className="far fa-heart fa"></i>
            </a>
            <a className="nav_link" href="mainpage.html">
              <img
                className="nav_image"
                src="https://pbs.twimg.com/profile_images/883011232160141312/DLZ74EMv_400x400.jpg"
                width="22px"
                height="22px"
                alt=" profile"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
