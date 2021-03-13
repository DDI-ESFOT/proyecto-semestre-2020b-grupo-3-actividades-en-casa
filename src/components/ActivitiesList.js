import React from 'react';
import { Table} from 'antd';

const ActivitiesList = () =>{
    const dataSource = [
        {
            key: '1',
            activity: 'Limpiar la sala',
            person: 'Andres',
            date: '2020/11/01',
            state: 'completo',
        },
        {
            key: '2',
            activity: 'Limpiar el patio',
            person: 'Andrea',
            date: '2020/12/24',
            state: 'pendiente',
        },
        {
            key: '3',
            activity: 'Hacer la tarea',
            person: 'Pedro',
            date: '2020/10/01',
            state: 'completo',
        },
        {
            key: '4',
            activity: 'Acompañar hacer compras',
            person: 'Andres',
            date: '2020/01/24',
            state: 'completado',
        },{
            key: '5',
            activity: 'Pasear las mascotas',
            person: 'Pedro',
            date: '2021/03/015',
            state: 'pendiente',
        },

    ];

    const columns = [
        {
            title: 'Actividad',
            dataIndex: 'activity',
            key: 'activity',
        },
        {
            title: 'Persona',
            dataIndex: 'person',
            key: 'person',
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
        },

    ];
    return (

        <div>
            <Table dataSource={dataSource} columns={columns} />;

        </div>
    );
}
export default ActivitiesList;