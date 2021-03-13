import React, { useState } from 'react';
import { Row, Col, Typography, Input, Button, Space, Modal, Form, DatePicker } from 'antd';
import ActivitiesList from '../components/ActivitiesList';
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
      <Row>
        <Col span={8}>
          <Row>
            <Col span={6}></Col>
            <Col span={12} type="flex" align="middle">
              <Space direction="vertical">
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

          <Link to={Routes.HOME}><Button id="but-reg" type="primary">Cerrar Sesión</Button></Link>
        </Col>
      </Row>


      <ActivitiesList />
    </div>
  );
};

export default ActivitiesPage;
