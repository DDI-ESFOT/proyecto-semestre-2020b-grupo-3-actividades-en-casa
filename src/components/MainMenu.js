import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";

const MainMenu = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="1">
        <Link to={Routes.HOME}>Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={Routes.ACTIVITIES}>Actividades</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={Routes.ABOUT}>About</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="notexist">No existe</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
