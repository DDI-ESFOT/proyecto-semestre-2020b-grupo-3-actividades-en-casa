import React from "react";
import { Layout, Menu, Row, Col, Image } from "antd";
import MainMenu from "./MainMenu";
import epn from '../images/LOGO_EPN.jpg';
import "../styles/layout.css";
import { FacebookOutlined, InstagramOutlined, GithubOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  NotificationOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <MainMenu />
      </Header>


        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">{children}</div>
          </Content>
        </Layout>

        <Footer className='footer'>
            <Row>
                <Col xs={ { span: 24 } } md={ 8 } className='logo-blanco'>

                    <img className='imagen1' src={epn} />


                </Col>

                <Col xs={ {
                    span: 24,
                    offset: 0
                } }
                     md={ {
                         span: 5,
                         offset: 3
                     } }
                     className='logo-menta'>

                    <p><strong> ¿Quiénes somos?</strong></p>
                    <p>Venimos ayudarte hacer tu vida mas ordenada de forma divertida</p>

                    <a href='https://grupomenta.com' rel='noopener noreferrer' target='_blank'>

                    </a>
                </Col>

                <Col xs={ {
                    span: 24,
                    offset: 0
                } }
                     md={ {
                         span: 4,
                         offset: 4
                     } }
                     className='contact-links'>
                    <p><strong>Contáctanos</strong></p>
                    <p><MailOutlined /> <a href='mailto:desarrolloepn@gmail.com'>desarrolloepn@gmail.com</a></p>
                    <p><WhatsAppOutlined /> <a href='https://wa.me/593993731322' target='_blank' rel='noopener noreferrer'>+593
                        9937331322</a></p>
                </Col>
            </Row>

            <Row type='flex' justify='space-between' align='bottom'>


                <Col xs={ 24 } md={ 4 } className='footer-links'>

                </Col>

                <Col xs={ 24 } md={ 8 } className='logos-social'>
                    <strong>Síguenos en:</strong>
                    <a href='https://www.facebook.com'
                       target='_blank'
                       rel='noopener noreferrer'
                       style={ {
                           marginLeft: 30,
                           marginRight: 30
                       } }>
                        <FacebookOutlined />
                    </a>

                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        <InstagramOutlined />
                    </a>
                </Col>
            </Row>
        </Footer>
    </Layout>
  );
};

export default MainLayout;
