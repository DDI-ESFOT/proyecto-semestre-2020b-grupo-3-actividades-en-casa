import React from "react";
import {Button, Menu} from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import {useAuth} from "../lib/auth";
import {LogoutOutlined} from "@ant-design/icons";

const {SubMenu} = Menu;
const MainMenu = () => {

    const {user, logout} = useAuth();
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>

        {
            user ?(
                <SubMenu key="sub1" title={user.email}>
                    <Menu.ItemGroup key="g1" title="Tu cuenta">
                        <Menu.Item key="1"icon={<LogoutOutlined/>}>
                            <Button type="link" style={{color : "#ffffff"}} onClick={logout}>Salir</Button>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            ) :(
                <Menu.Item>
                    <Link to={Routes.HOME}>Home</Link>
                </Menu.Item>
            )}
      <Menu.Item key="2">
          {
              user ? <Link to={Routes.ACTIVITIES}>Actividades</Link> :
                  <Link to={Routes.HOME}>Home</Link>
          }

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
