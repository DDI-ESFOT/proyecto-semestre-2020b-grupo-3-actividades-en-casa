<<<<<<< HEAD
import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Space,
  Layout,
  Modal,
  Menu,
} from "antd";
import ActivitiesList from "../components/ActivitiesList";
=======
import React, { useState } from 'react';
import { Row, Col, Typography, Input, Button, Space, Modal, Form, DatePicker } from 'antd';

import ActivitiesList from '../components/ActivitiesList';
>>>>>>> 33a6850c188d00d9bf5816f3ed69e09ff0f6f399
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import "../styles/home.css";

import {
  FormOutlined,
  UsergroupAddOutlined 
} from "@ant-design/icons";

const ActivitiesPage = () => {
  const [isModalVisiblePrf, setIsModalVisiblePrf] = useState(false);
  const [isModalVisiblePra, setIsModalVisiblePra] = useState(false);

  const showModalPra = () => {
    setIsModalVisiblePra(true);
  };

  const handleOkPra = () => {
    setIsModalVisiblePra(false);
  };

  const handleCancelPra = () => {
    setIsModalVisiblePra(false);
  };

  const showModalPrf = () => {
    setIsModalVisiblePrf(true);
  };

  const handleOkPrf = () => {
    setIsModalVisiblePrf(false);
  };

  const handleCancelPrf = () => {
    setIsModalVisiblePrf(false);
  };

<<<<<<< HEAD
  const { Title } = Typography;
  const { Header, Content, Footer } = Layout;

  return (
    <div className="espacio2">
=======
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

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const { Title } = Typography;
 


  return (
 
    <div className='espacio2'>
      <br></br>
>>>>>>> 33a6850c188d00d9bf5816f3ed69e09ff0f6f399
      <Row>
        <Col span={8}>
          <Row>
            <Col span={6}></Col>
            <Col span={12} type="flex" align="middle">
              <Space direction="vertical">
<<<<<<< HEAD
                <Button type="primary" id="but-reg" onClick={showModalPrf}>
                  Registrar
                </Button>

                <Modal
                  title="ACTIVIDADES EN CASA"
                  visible={isModalVisiblePrf}
                  onOk={handleOkPrf}
                  onCancel={handleCancelPrf}
                >
                  <Title level={2} ype="flex" align="middle">
                    REGISTRA TU FAMILIAR
                  </Title>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={12} type="flex" align="middle">
                      <Space direction="vertical">
                        <Input placeholder="Apellidos" />
                        <Input placeholder="Nombre" />
                        <Input placeholder="Parentesco" />
                        <Button type="primary" id="but-reg">
                          Registrar
                        </Button>
=======
                <Button type="primary" id="but-reg" onClick={showModalPrf}>Registrar Familiar</Button>
                <Modal title="ACTIVIDADES EN CASA" visible={isModalVisiblePrf} onOk={handleOkPrf} onCancel={handleCancelPrf}>
                  <Row id="mod-head">
                    <Col span={24}><Title level={2} align="middle">
                    <UsergroupAddOutlined /> REGISTRA TU FAMILIAR{" "}
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
                          <Form.Item
                            name="ApellidoFamiliar"
                          >
                            <Input placeholder="Apellido" />
                          </Form.Item>

                          <Form.Item
                            name="NombreFamiliar"
                          >
                            <Input placeholder="Nombre" />
                          </Form.Item>
                          <Form.Item
                            name="ParentescoFamiliar"
                          >
                            <Input placeholder="Parentesco" />
                          </Form.Item>
                          <Form.Item>
                            <Button   id="but-mod"  type="primary" htmlType="submit">
                              Registrar
                             </Button>
                          </Form.Item>
                        </Form>
>>>>>>> 33a6850c188d00d9bf5816f3ed69e09ff0f6f399
                      </Space>
                    </Col>
                    <Col span={6}></Col>
                  </Row>
                </Modal>

                <br></br>
              </Space>
            </Col>

            <Col span={6}></Col>
          </Row>

          <Row>
            <Col span={6}></Col>
            <Col span={12} type="flex" align="middle">
              <Space direction="vertical">
<<<<<<< HEAD
                <Button type="primary" id="but-reg" onClick={showModalPra}>
                  Añadir Actividad
                </Button>

                <Modal
                  title="ACTIVIDADES EN CASA"
                  visible={isModalVisiblePra}
                  onOk={handleOkPra}
                  onCancel={handleCancelPra}
                >
                  <Title level={2} ype="flex" align="middle">
                    REGISTRO DE ACTIVIDAD
                  </Title>
                  <Row>
                    <Col span={6}></Col>
                    <Col span={12} type="flex" align="middle">
                      <Space direction="vertical">
                        <Input placeholder="Actividad" />
                        <Input placeholder="Fecha" />
                        <Input placeholder="Persona" />
                        <Button type="primary" id="but-reg">
                          Añadir Actividad
                        </Button>
=======
                <Button type="primary" id="but-reg" onClick={showModalPra}>Añadir Actividad</Button>

                <Modal title="ACTIVIDADES EN CASA" visible={isModalVisiblePra} onOk={handleOkPra} onCancel={handleCancelPra}>

                  <Row id="mod-head">
                    <Col span={24}><Title level={2} align="middle">
                    <FormOutlined /> REGISTRO DE ACTIVIDAD{" "}
                    </Title></Col></Row>
                  <Row v id="mod-back">
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
                            name="Actividad"
                          >
                            <Input placeholder="Actividad" />
                          </Form.Item>
                          <Form.Item
                            name="FechaActividad"
                          >
                            <DatePicker onChange={onChange} />
                          </Form.Item>
                          <Form.Item
                            name="Persona"
                          >
                            <Input placeholder="Persona" />
                          </Form.Item>
                          <Form.Item>
                            <Button  id="but-mod"  type="primary" htmlType="submit">
                              Iniciar Sesión
                             </Button>
                          </Form.Item>
                        </Form>
>>>>>>> 33a6850c188d00d9bf5816f3ed69e09ff0f6f399
                      </Space>
                    </Col>
                    <Col span={6}></Col>
                  </Row>
                </Modal>

                <br></br>
              </Space>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Col>
        <Col span={8} offset={8}>
<<<<<<< HEAD
          <Link to={Routes.HOME}>
            <Button type="primary">Cerrar Sesión</Button>
          </Link>
        </Col>
      </Row>
      <ActivitiesList />
    </div>
=======

          <Link to={Routes.HOME}><Button id="but-reg" type="primary">Cerrar Sesión</Button></Link>
        </Col>
      </Row>


      <ActivitiesList />
    </div>

>>>>>>> 33a6850c188d00d9bf5816f3ed69e09ff0f6f399
  );
};

export default ActivitiesPage;
