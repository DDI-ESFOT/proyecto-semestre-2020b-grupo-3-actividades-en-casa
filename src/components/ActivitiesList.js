import React from "react";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { database } from "../firebase";

const ActivitiesList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    database.ref("familiares").on("value", (snapshot) => {
      const userList = [];
      snapshot.forEach((userSnapshot) => {
        userList.push(userSnapshot.val());
      });
      setUsers(userList);
    });
    return () => {
      database.ref("familiares").off();
    };
  }, []);

  const dataSource = [
    {
      key: "1",
      activity: "Limpiar la sala",
      person: "Andres",
      date: "2020/11/01",
      state: "completo",
    },
    {
      key: "2",
      activity: "Limpiar el patio",
      person: "Andrea",
      date: "2020/12/24",
      state: "pendiente",
    },
    {
      key: "3",
      activity: "Hacer la tarea",
      person: "Pedro",
      date: "2020/10/01",
      state: "completo",
    },
    {
      key: "4",
      activity: "Acompañar hacer compras",
      person: "Andres",
      date: "2020/01/24",
      state: "completado",
    },
    {
      key: "5",
      activity: "Pasear las mascotas",
      person: "Pedro",
      date: "2021/03/015",
      state: "pendiente",
    },
  ];

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
  console.log("usuarios", users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ActivitiesList;
