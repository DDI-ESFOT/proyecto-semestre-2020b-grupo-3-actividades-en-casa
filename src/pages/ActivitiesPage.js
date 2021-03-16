import { useState } from "react";
import { db } from "../firebase";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Space,
  Modal,
  Form,
  DatePicker,
} from "antd";

import ActivitiesList from "../components/ActivitiesList";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import "../styles/home.css";

import withAuth from "../hocs/withAuth";

import { FormOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const ActivitiesPage = () => {
  const [isModalVisiblePra, setIsModalVisiblePra] = useState(false);
  const [form] = Form.useForm();

  const showModalPra = () => {
    setIsModalVisiblePra(true);
  };

  const handleOkPra = () => {
    setIsModalVisiblePra(false);
  };

  const handleCancelPra = () => {
    setIsModalVisiblePra(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const handleActivity = async () => {
    const activity = document.querySelector("#activity").value;
    const date = document.querySelector("#date").value;
    const nameF = document.querySelector("#nameF").value;

    await db.ref("Familiares").push({
      activity: activity,
      date: date,
      name: nameF,
      state: "pendiente",
    });
    form.resetFields();
  };

  const { Title } = Typography;

  return (
    <div className="espacio2">
      <Row>
        <Col span={8}>
          <Row>
            <Col span={6}></Col>
            <Col span={12} type="flex" align="middle">
              <Space direction="vertical">
                <Button type="primary" id="but-reg" onClick={showModalPra}>
                  Añadir Actividad
                </Button>

                <Modal
                  title="ACTIVIDADES EN CASA"
                  visible={isModalVisiblePra}
                  onOk={handleOkPra}
                  onCancel={handleCancelPra}
                >
                  <Row id="mod-head">
                    <Col span={24}>
                      <Title level={2} align="middle">
                        <FormOutlined /> REGISTRO DE ACTIVIDAD{" "}
                      </Title>
                    </Col>
                  </Row>
                  <Row id="mod-back">
                    <Col span={6}></Col>
                    <Col span={12} type="flex" align="middle">
                      <Space direction="vertical">
                        <Form
                          form={form}
                          name="basic"
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                        >
                          <br></br>
                          <Form.Item name="Actividad">
                            <Input placeholder="Actividad" id="activity" />
                          </Form.Item>
                          <Form.Item name="FechaActividad">
                            <DatePicker onChange={onChange} id="date" />
                          </Form.Item>
                          <Form.Item name="Persona">
                            <Input placeholder="Nombre Familiar" id="nameF" />
                          </Form.Item>
                          <Form.Item>
                            <Button
                              id="but-mod"
                              type="primary"
                              htmlType="submit"
                              onClick={handleActivity}
                            >
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
        </Col>
        <Col span={8} offset={8}>
          <Link to={Routes.HOME}>
            <Button id="but-reg" type="primary">
              Cerrar Sesión
            </Button>
          </Link>
        </Col>
      </Row>

      <ActivitiesList />
    </div>
  );
};

export default withAuth(ActivitiesPage);
