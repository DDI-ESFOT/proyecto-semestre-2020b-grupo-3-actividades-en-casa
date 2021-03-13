import "../styles/WFirst.css";
import React, { useState } from "react";

import {
  Button,
  Row,
  Col,
  Layout,
  Space,
  Modal,
  Input,
  Typography,
  Form,
  Checkbox,
  Image,
} from "antd";

import imgheader from "../images/imgheader.jpg";
import imgb1 from "../images/imgbody1.jpg";
import imgb2 from "../images/imgbody2.jpg";
import imgb3 from "../images/imgbody3.jpg";
import { Carousel } from "antd";

const HomePage = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const { Header, Content} = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const { Title } = Typography;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish2 = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed2 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  return (
    <>
      <Layout className="layout">
        <Header className="main-header">
          <Title level={2} id="title">
            ACTIVIDADES EN CASA
          </Title>
        </Header>

        <Content className="main-content">
          <Row type="flex" align="middle" id="fil1">
            <Col span={4}></Col>
            <Col span={10} type="flex" align="middle">
              <Title level={4} id="headt">UNA FORMA DIVERTIDA DE HACER TRABAJOS EN CASA</Title>
              <Row>
                <Col span={12}>
                  <Button type="primary" onClick={showModal2}>
                    Iniciar Sesión
                  </Button>
                  <Modal
                    title="ACTIVIDADES EN CASA"
                    visible={isModalVisible2}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
                  >
                    <Title level={2} type="flex" align="middle">
                      INICIO DE SESIÓN{" "}
                    </Title>
                    <Row>
                      <Col span={6}></Col>
                      <Col span={12} type="flex" align="middle">
                        <Space direction="vertical">
                          <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              label="E-mail"
                              name="username"
                              rules={[
                                {
                                  required: true,
                                  message: "Ingresa un correo valido!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item
                              label="Clave"
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Ingresa una contraseña valida!",
                                },
                              ]}
                            >
                              <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                              <Checkbox>Recordarme</Checkbox>
                            </Form.Item>

                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                Iniciar Sesión
                              </Button>
                            </Form.Item>
                          </Form>
                        </Space>
                      </Col>
                      <Col span={6}></Col>
                    </Row>
                  </Modal>
                </Col>
                <Col span={12}>
                  <Button type="primary" onClick={showModal}>
                    Registrarse
                  </Button>
                  <Modal
                    title="ACTIVIDADES EN CASA"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Title level={2} ype="flex" align="middle">
                      REGISTRATE{" "}
                    </Title>
                    <Row>
                      <Col span={6}></Col>
                      <Col span={12} type="flex" align="middle">
                        <Space direction="vertical">
                          <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish2}
                            onFinishFailed={onFinishFailed2}
                          >
                            <Form.Item label="Nombres" name="UserNames">
                              <Input />
                            </Form.Item>
                            <Form.Item label="Apellidos" name="UserLastNames">
                              <Input />
                            </Form.Item>


                                                    <Form.Item>
                                                        <Button type="primary" htmlType="submit">
                                                            Iniciar Sesión
                                                        </Button>
                                                    </Form.Item>
                                                </Form>
                                            </Space>
                                        </Col>
                                        <Col span={6}></Col>
                                    </Row>
                                </Modal>
                            </Col>
                            <Col span={12}>
                                <Button type="primary" onClick={showModal}>
                                    Registrarse
                                </Button>
                                <Modal
                                    title="ACTIVIDADES EN CASA"
                                    visible={isModalVisible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                >
                                    <Title level={2} ype="flex" align="middle">
                                        REGISTRATE{" "}
                                    </Title>
                                    <Row>
                                        <Col span={6}></Col>
                                        <Col span={12} type="flex" align="middle">
                                            <Space direction="vertical">
                                                <Form
                                                    name="basic"
                                                    initialValues={{ remember: true }}
                                                    onFinish={onFinish2}
                                                    onFinishFailed={onFinishFailed2}
                                                >
                                                    <Form.Item  name="UserNames">
                                                        <Input placeholder="Nombres"></Input>
                                                    </Form.Item>
                                                    <Form.Item  name="UserLastNames">
                                                        <Input placeholder="Apellidos"/>
                                                    </Form.Item>

                                                    <Form.Item

                                                        name="UserDate"
                                                        rules={[
                                                            {

                                                                required: true,
                                                                message: "Ingresa una fecha valida!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Fecha Nacimiento"/>
                                                    </Form.Item>
                                                    <Form.Item

                                                        name="UserEmail"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Ingresa un correo valido!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="E-mail"/>
                                                    </Form.Item>
                                                    <Form.Item

                                                        name="password"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Ingresa una clave valida!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input.Password placeholder="Clave"/>
                                                    </Form.Item>
                                                    <Form.Item

                                                        name="passwordConfirm"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Las claves no cionciden!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input.Password placeholder="Confirmar clave"/>
                                                    </Form.Item>

                            <Form.Item
                              label="Fecha Nacimiento"
                              name="UserDate"
                              rules={[
                                {
                                  required: true,
                                  message: "Ingresa una fecha valida!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              label="E-mail"
                              name="UserEmail"
                              rules={[
                                {
                                  required: true,
                                  message: "Ingresa un correo valido!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              label="Clave"
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Ingresa una clave valida!",
                                },
                              ]}
                            >
                              <Input.Password />
                            </Form.Item>
                            <Form.Item
                              label="Confirmar clave"
                              name="passwordConfirm"
                              rules={[
                                {
                                  required: true,
                                  message: "Las claves no cionciden!",
                                },
                              ]}
                            >
                              <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                              <Checkbox>Recordarme</Checkbox>
                            </Form.Item>


                            <Form.Item>
                              <Button type="primary" htmlType="submit">
                                Registrarse{" "}
                              </Button>
                            </Form.Item>
                          </Form>
                        </Space>
                      </Col>
                      <Col span={6}></Col>
                    </Row>
                  </Modal>
                </Col>
              </Row>
            </Col>

            <Col span={10} type="flex" align="right">
              <img src={imgheader} alt="header" width="100%" height="100%" />
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Carousel autoplay>
            <Row style={contentStyle}>
              <Col>
                <Row>
                  <Col span={3}></Col>
                  <Col span={18} type="flex" align="middle">
                    <Image src={imgb1} alt="header" id="imge"/>
                  </Col>
                  <Col span={3}></Col>
                </Row>
                <Row>
                  <Col span={3}></Col>
                  <Col span={18}>
                    <p id="par">
                      <br></br>
                      <br></br>
                      Ayuda a fomentar que los hijos se conviertan en personas
                      solidarias, altruistas y colaboradoras. La cooperación o
                      colaboración es el proceso por el que ayudamos a los demás
                      de forma desinteresada.
                    </p>
                    <br></br>
                  </Col>
                  <Col span={3}></Col>
                </Row>
              </Col>
            </Row>
            <Row style={contentStyle}>
              <Col>
                <Row>
                  <Col span={3}></Col>
                  <Col span={18} type="flex" align="middle">
                    <Image src={imgb2} alt="header"  id="imge"/>
                  </Col>
                  <Col span={3}></Col>
                </Row>
                <Row>
                  <Col span={3}></Col>
                  <Col span={18}>
                    <p id="par">
                      <br></br>
                      <br></br>
                      Nuestro sitio web te brinda todo lo que necesitas para
                      organizar las actividades o quehaceres que quieres que tus
                      hijos o familiares realicen en tu casa cuando tu estés
                      trabajando o estes fuera de ella.
                    </p>
                    <br></br>
                  </Col>
                  <Col span={3}></Col>
                </Row>
              </Col>
            </Row>
            <Row style={contentStyle}>
              <Col>
                <Row>
                  <Col span={3}></Col>
                  <Col span={18} type="flex" align="middle">
                    <Image src={imgb3} alt="header"  id="imge"/>
                  </Col>
                  <Col span={3}></Col>
                </Row>
                <Row>
                  <Col span={3}></Col>
                  <Col span={18}>
                    <p id="par">
                      <br></br>
                      <br></br>
                      Con nuestro sitio web podras tener la seguridad que las
                      tareas que se guarden en nuestra base de datos sean
                      enviadas y asignadas a cada uno de los miembros de tu
                      familia y así asegurar que todos reciban un labor
                      coherente y justo.
                    </p>
                    <br></br>
                  </Col>
                  <Col span={3}></Col>
                </Row>
              </Col>
            </Row>
          </Carousel>
          <br></br>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
