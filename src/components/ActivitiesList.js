import React from "react";
import { Button, Table, Tag, Space, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { db } from "../firebase";
import { useAuth } from "../lib/auth";

const ActivitiesList = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();
  //Leyendo la base de datos
  useEffect(() => {
    const getTask = async () => {
      db.ref(`users/${user.uid}/task`).on("value", (snapshot) => {
        const taskList = [];
        snapshot.forEach((userSnapshot) => {
          taskList.push({ id: userSnapshot.key, ...userSnapshot.val() });
        });
        setTasks(taskList);
      });
    };
    getTask();
    return () => {
      db.ref("task").off();
    };
  }, []);

  const handleCompleted = async (id) => {
    await db.ref(`users/${user.uid}/task/${id}/state`).set("completada");
  };

  const handeDelete = async (id) => {
    await db.ref(`users/${user.uid}/task/${id}`).remove();
  };

  const columns = [
    {
      title: "Actividad",
      dataIndex: "activity",
      key: "activity",
    },
    {
      title: "Persona",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Estado",
      dataIndex: "state",
      key: "state",
      render: (value, row) => {
        console.log("value", value);
        return value === "completada" ? (
          <Tag color="green">Completada</Tag>
        ) : (
          <Tag color="gold">Pendiente</Tag>
        );
      },
    },
    {
      title: "Actualizar",
      render: (value, row) => {
        console.log("ROW", row);
        return (
          <>
            <Space size="large">
              <Button
                type="primary"
                shape="circle"
                icon={<CheckOutlined />}
                onClick={() => handleCompleted(row.id)}
              ></Button>
              <Button
                danger
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => handeDelete(row.id)}
              ></Button>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Table dataSource={tasks} columns={columns} />
        </Col>
      </Row>
    </>
  );
};
export default ActivitiesList;
