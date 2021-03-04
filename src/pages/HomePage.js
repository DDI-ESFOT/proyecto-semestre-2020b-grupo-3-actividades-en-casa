import React, { useEffect, useState } from "react";
import {Divider, Statistic, Typography, Image, Carousel, Button, message, Skeleton, Row, Col, Header} from 'antd';
import familia1 from "../images/familia1.jpg";
import familia2 from "../images/familia2.jpg";
import familia3 from "../images/familia3.jpg";
import familia4 from "../images/familia4.jpg";
import "../styles/home.css";


const HomePage = () => {
    const contentStyle = {
        height: '180px',
        color: '#fff',
        lineHeight: '180px',
        textAlign: 'center',
        background: '#364d79',
    };


  const searchStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
        <div>
            <Row className='espacio'>

                <Col span={12} className='fondo' >
                    <div className='fondo'>
<h1 className='letra1'>Actividades en casa</h1>
                        <Row >
                        <Col className='boton1' span={12}>
                            <Button type="primary">Inicio Sesión</Button>
                        </Col>
                        <Col span={12}>
                            <Button type="primary">Registrate</Button>
                        </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={12} >
                    <img className='imagen' src={familia1} />
                </Col>
            </Row>
        </div>


        <Row className='espacio1'>
                <Col span={8}>
                    <div>
                    <p className='text'>Ayuda a fomentar que los hijos se conviertan en<br/>
                    personas solidarias, altruistas y colaboradoras<br/>
                    La cooperación o colaboraciones es el proceso por<br/>
                    el que ayudamos a los demás de forma<br/>
                    desinteresada</p>
                    </div>
                </Col>
                <Col span={8} offset={4}>
                    <img className='imagen2' src={familia2} />
                </Col>

            </Row>

        <Row className='espacio1'>

            <Col span={8} >
                <img className='imagen2' src={familia3} />
            </Col>
            <Col span={8} offset={4}>
                <div>
                    <p className='text'>Nuestro sitio web te brinda todo lo que necesitas para <br/>
                    organizar las actividades o quehaceres que quieres que tus <br/>
                    hijos o familiares realicen en tu casa cuando tu estés<br/>
                    trabajando o estes fuera de ella</p>
                </div>
            </Col>


        </Row>

        <Row className='espacio1'>
            <Col span={8}>
                <div>
                    <p className='text'>Con nuestro sitio web podras tener la seguridad que las <br/>
                    tareas que se guarden en nuestra base de datos sean<br/>
                    enviadas y asignadas a cada uno de los miembros de tu<br/>
                    familia y así asegurar que todos reciban una labor<br/>
                    coherente y justa</p>
                </div>
            </Col>
            <Col span={8} offset={4}>
                <img className='imagen2' src={familia4} />
            </Col>

        </Row>
        </>
    );
};

export default HomePage;
