import React from "react";
import { Table } from "antd";
import { useEffect, useState } from "react";
import FIREBASE from "../firebase";

const ActivitiesList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      FIREBASE.db.ref("Familiares").on("value", (snapshot) => {
        const userList = [];
        snapshot.forEach((userSnapshot) => {
          userList.push(userSnapshot.val());
        });
        setUsers(userList);
      });
    };
    getUsers();
    return () => {
      FIREBASE.db.ref("Familiares").off();
    };
  }, []);

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
    },
  ];
  return (
    <div>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};
export default ActivitiesList;
