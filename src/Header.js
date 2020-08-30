import React from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input placeholder="Search..." type="text" />
      </div>
      <div className="header-right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
