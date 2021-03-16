import React from "react";
import { Row, Col, Layout } from "antd";

import MainMenu from "./MainMenu";

import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import foot from "../images/imgfoot.jpg";
import "../styles/WFirst.css";

const { Header, Content, Footer } = Layout;

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

      <Footer className="footer">
        <Row>
          <Row span={18} id="foot1">
            <Col span={5} type="flex" align="left">
              <img src={foot} alt="foot" width="50" height="75" />
            </Col>
            <Col span={18} id="foot1">
              <br></br>
              <p>ESCUELA POLITECNICA NACIONAL</p>
            </Col>
          </Row>

          <Col
            xs={{
              span: 24,
              offset: 0,
            }}
            md={{
              span: 5,
              offset: 3,
            }}
            className="logo-menta"
          >
            <p>
              <strong> ¿Quiénes somos?</strong>
            </p>
            <p>
              Llegamos hacer que tu vida cotidiana la manejes de forma divertida
              formando valores y responsabilidades a cada miembro de tu nucleo
              familiar, somos un equipo que pensamos en la familia y miramos
              como ayudarlos a tener una mayor comunicación
            </p>

            <a
              href="https://grupomenta.com"
              rel="noopener noreferrer"
              target="_blank"
            ></a>
          </Col>

          <Col
            xs={{
              span: 24,
              offset: 0,
            }}
            md={{
              span: 4,
              offset: 4,
            }}
            className="contact-links"
          >
            <p>
              <strong>Contáctanos</strong>
            </p>
            <p>
              <MailOutlined />{" "}
              <a href="mailto:desarrolloepn@gmail.com">
                desarrolloepn@gmail.com
              </a>
            </p>
            <p>
              <WhatsAppOutlined />{" "}
              <a
                href="https://wa.me/593993731322"
                target="_blank"
                rel="noopener noreferrer"
              >
                +593 9937331322
              </a>
            </p>
          </Col>
        </Row>

        <Row type="flex" justify="space-between" align="bottom">
          <Col xs={24} md={4} className="footer-links"></Col>

          <Col xs={24} md={24} className="logos-social">
            <strong>Síguenos en:</strong>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <FacebookOutlined />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined />
            </a>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
