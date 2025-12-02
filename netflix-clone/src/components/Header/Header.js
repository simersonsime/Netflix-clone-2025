import React from 'react'
import "./Header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
    return (
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={NetflixLogo} alt="Netflix Logo" width="100" />
              </li>
              <li>Home</li>
              <li>TVshows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by Lanuages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <SearchIcon style={{ color: "white", cursor: "pointer" }} />
              </li>
              <li>
                <NotificationsNoneIcon
                  style={{ color: "white", cursor: "pointer" }}
                />
              </li>
              <li>
                <AccountBoxIcon style={{ color: "white", cursor: "pointer" }} />
              </li>
              <li>
                <ArrowDropDownIcon
                  style={{ color: "white", cursor: "pointer" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Header
