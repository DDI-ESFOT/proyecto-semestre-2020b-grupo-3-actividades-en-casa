import React from "react";

import { Button, Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { db } from "../firebase";

const ActivitiesList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
        db.ref("Familiares").on("value", (snapshot) => {
        const toDoList = [];
        snapshot.forEach((userSnapshot) => {
          toDoList.push({ id: userSnapshot.key, ...userSnapshot.val() });
        });
        setUsers(toDoList);
        //console.log("Arreglo", userList);
      });
    };
    getUsers();
    return () => {
      db.ref("Familiares").off();
    };
  }, []);

  console.log("Arreglo", users);

  const handleCompleted = async (id) => {
    await db.ref(`Familiares/${id}/state`).set("completada");
  };

  const handeDelete = async (id) => {
    await db.ref(`Familiares/${id}`).remove();
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
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};
export default ActivitiesList;
