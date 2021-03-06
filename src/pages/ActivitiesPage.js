import React, { useState } from 'react';
import {Row, Col, Typography, Input, Button, Space, Layout, Modal, Menu} from 'antd';
import ActivitiesList from '../components/ActivitiesList';
import {Link} from "react-router-dom";
import Routes from "../constants/routes";
import "../styles/home.css";
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

  const {Title} = Typography;
  const {Header, Content,Footer} = Layout;


  return (
      <div className='espacio2'>
        <Row>
          <Col span={8}>
            <Row>
              <Col span={6}></Col>
              <Col span={12}type="flex" align="middle">
                <Space direction="vertical">
                  <Button type="primary" id="but-reg" onClick={showModalPrf}>Registrar</Button>

                  <Modal title="ACTIVIDADES EN CASA" visible={isModalVisiblePrf} onOk={handleOkPrf} onCancel={handleCancelPrf}>
                    <Title level={2} ype="flex" align="middle" >REGISTRA TU FAMILIAR</Title>
                    <Row>
                      <Col span={6}></Col>
                      <Col span={12} type="flex" align="middle">
                        <Space direction="vertical">
                          <Input placeholder="Apellidos" />
                          <Input placeholder="Nombre"/>
                          <Input placeholder="Parentesco"/>
                          <Button type="primary" id="but-reg">Registrar</Button>
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
              <Col span={12}type="flex" align="middle">
                <Space direction="vertical">
                  <Button type="primary" id="but-reg" onClick={showModalPra}>Añadir Actividad</Button>

                  <Modal title="ACTIVIDADES EN CASA" visible={isModalVisiblePra} onOk={handleOkPra} onCancel={handleCancelPra}>
                    <Title level={2} ype="flex" align="middle" >REGISTRO DE ACTIVIDAD</Title>
                    <Row>
                      <Col span={6}></Col>
                      <Col span={12} type="flex" align="middle">
                        <Space direction="vertical">
                          <Input placeholder="Actividad" />
                          <Input placeholder="Fecha"/>
                          <Input placeholder="Persona"/>
                          <Button type="primary" id="but-reg">Añadir Actividad</Button>
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

            <Link to={Routes.HOME}><Button type="primary">Cerrar Sesión</Button></Link>
          </Col>
        </Row>


<ActivitiesList/>
      </div>
  );
};

export default ActivitiesPage;
