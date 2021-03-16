import React from 'react';
import { Button, Table, Tag, Space } from 'antd';
import { useEffect, useState } from "react";
import FIREBASE from "../firebase";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";


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

const [todos] = React.useState(users);

console.log("Arreglo",users);

/*const handleAddComplete = (index) =>{
    setCompleted( ( prevState ) => [
        ...prevState,
        users[ index ]
    ] );
}
*/
/*const handleCompleted = () => {
    todos.map = (todo) => {
        return (
            todo.state ? 'completo' : 'pendiente'
        );
    }
}

const handleCompletedChore = (index) => {
    setUserChore((prevState) => {
        const newListChore = [...prevState];
        newListChore[index].completed = true;
        return newListChore;
    });
};*/

const columns = [
    {
        title: 'Actividad',
        dataIndex: 'activity',
        key: 'activity',
    },
    {
        title: 'Persona',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Estado',
        dataIndex: 'state',
        key: 'state',
        render: (value) => {
            console.log("value", value);
            return value ? (
                <Tag color="green">Completada</Tag>
            ) : (
                <Tag color="gold">Pendiente</Tag>
            );
        },
    },
    {
        title: 'Actualizar',
        render: (value, row) => {
            return (
                <>
                    <Space size="large">
                        <Button type="primary" shape="circle" icon={<CheckOutlined />}></Button>
                        <Button danger shape="circle" icon={<DeleteOutlined />}></Button>
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
}
export default ActivitiesList;