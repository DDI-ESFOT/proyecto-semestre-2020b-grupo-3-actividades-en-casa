import "../styles/WFirst.css";
import React, {useEffect, useState} from "react";
import UploadOutlined from "@ant-design/icons";

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
    Image, message,
    Upload
} from "antd";
import UserOutlined,
  UserAddOutlined
} from "@ant-design/icons";


import imgheader from "../images/imgheader.jpg";
import imgb1 from "../images/imgbody1.jpg";
import imgb2 from "../images/imgbody2.jpg";
import imgb3 from "../images/imgbody3.jpg";

import { Carousel } from "antd";
import {auth} from "../firebase";
import translateMessage from "../utils/translateMessage";
import {useAuth} from "../lib/auth";
import { useHistory} from "react-router-dom";
import Routes from "../constants/routes";
import withoutAuth from "../hocs/withoutAuth";


const HomePage = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };


  const { Header, Content } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [loading, setLoading] = useState(false);
  const { Title } = Typography;

  const {login, register, user} = useAuth();
  const history = useHistory();


    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
  const onFinish = ({email, password}) => {

      login(email,password);

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish2 = async (data) => {
      console.log(data)
      setLoading(true);
     await register({
          ...data,
          image: data.image[0].Target
      });
     setLoading(false);

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
    setIsModalVisible(false);
  };


  function onChange(date, dateString) {
    console.log(date, dateString);
  }



  return (
    <>
      <Layout className="layout">
        <Header className="main-header">
          <Title level={2} id="title">
            ACTIVIDADES EN CASA
          </Title>
        </Header>

        <Content className="main-content">
          <Row id="fil1">
            <Col span={5}></Col>
            <Col span={8} type="flex" align="middle">
              <br></br>
              <br></br>
              <Title level={4} id="headt">UNA FORMA DIVERTIDA DE HACER TRABAJOS EN CASA</Title>
              <Row>
                <Col span={12}>
                  <Button type="primary" onClick={showModal2}>
                    Inciar Sesion
                                </Button>
                  <Modal
                    title="ACTIVIDADES EN CASA"
                    visible={isModalVisible2}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
                  >

                    <Row id="mod-head">
                      <Col span={24}><Title level={2} align="middle">
                        <UserOutlined />INICIO DE SESION{" "}
                      </Title></Col></Row>
                    <Row id="mod-back">
                      <Col span={6}></Col>
                      <Col span={12} type="flex" align="middle">
                        <Space direction="vertical">
                          <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                          >
                            <br></br>
                            <Form.Item
                              label="E-mail"
                              name="email"
                              rules={[
                                {
                                    type: "email",
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
                              <Button id="but-mod" type="primary" htmlType="submit">
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

                    Registrese
                  </Button>

                  <Modal
                    title="ACTIVIDADES EN CASA"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Row id="mod-head">
                      <Col span={24}><Title level={2} align="middle">
                        <UserAddOutlined /> REGISTRATE{" "}
                      </Title></Col></Row>
                    <Row id="mod-back">
                      <Col span={6}></Col>
                      <Col span={12} type="flex" align="middle">
                        <Space direction="vertical">
                          <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish2}
                            onFinishFailed={onFinishFailed2}
                          >
                            <br></br>
                            <Form.Item name="UserNames">
                              <Input placeholder="Nombre" />
                            </Form.Item>
                            <Form.Item name="UserLastNames">
                              <Input placeholder="Apellido" />
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
                                                    <Form.Item
                                                        name="image"
                                                        label="Foto"
                                                        valuePropName="fileList"
                                                        getValueFromEvent={normFile}
                                                        extra="Selecciona una foto"
                                                    >
                                                        <Upload name="logo" action={null} listType="picture">
                                                            <Button icon={<UploadOutlined />}>Selecciona una foto</Button>
                                                        </Upload>
                                                    </Form.Item>
                                                    <Form.Item  name="UserNames"
                                                                rules={[
                                                                    {

                                                                        required: true,
                                                                        message: "Ingresa tu nombre",
                                                                    },
                                                                ]}>

                                                        <Input placeholder="Nombres"></Input>
                                                    </Form.Item>
                                                    <Form.Item  name="UserLastNames"
                                                                rules={[
                                                                    {

                                                                        required: true,
                                                                        message: "Ingresa tu apellido",
                                                                    },
                                                                ]}>
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

                                                        name="email"
                                                        rules={[
                                                            {
                                                                type: "email",
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
                                                                message: "Confirmar clave",
                                                            },
                                                            ({ getFieldValue }) => ({
                                                                validator(_, value) {
                                                                    if (!value || getFieldValue('password') === value) {
                                                                        return Promise.resolve();
                                                                    }
                                                                    return Promise.reject(new Error('Las contraseñas no coinciden'));
                                                                },
                                                            }),
                                                        ]}
                                                    >
                                                        <Input.Password placeholder="Confirmar clave"/>
                                                    </Form.Item>


                            <Form.Item name="remember" valuePropName="checked">
                              <Checkbox>Recordarme</Checkbox>
                            </Form.Item>

                            <Form.Item>

                              <Button type="primary" htmlType="submit" loading={loading}>
                                Registrarse

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
            <Col span={11} type="flex" align="right">
              <img src={imgheader} alt="header" width="400" height="200" />
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
                    <Image src={imgb1} alt="header" id="imge" />
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
                    <Image src={imgb2} alt="header" id="imge" />
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
                    <Image src={imgb3} alt="header" id="imge" />
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

export default withoutAuth(HomePage);
