import React from "react";
import {
  Typography,
  Carousel,
  Row,
  Col

} from "antd";
import avatar1 from "../images/jorge.jpeg";
import avatar2 from "../images/byron.jpeg";
import avatar3 from "../images/bernabe.jpeg";
import avatar4 from "../images/jef.jpeg";
import imgmv from "../images/mvision.png";


import {
  QuestionCircleOutlined
} from "@ant-design/icons";

import "../styles/AboutPage.css";


const { Title } = Typography;

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '560px',
  color: '#08298A',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#2E2E2E',
 
};

const AboutPage = () => {
  return <div>
    <br></br>
    <Title align="middle">¿Quiénes somos? <QuestionCircleOutlined /></Title>
    <br></br>
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <br></br>
          <Row>
            <Col xs={0} sm={0} md={0} lg={3}  xl={3} ></Col>
            <Col xs={0} sm={0} md={0} lg={8}  xl={8} type="flex" align="middle"><img id="im-about" src={avatar1} alt="header" width="300" height="300" /> </Col>
            <Col xs={0} sm={0} md={0} lg={1}  xl={1}></Col>
            <Col xs={24} sm={24} md={24} lg={10}  xl={10}>
              <Title level={2} id="name" type="flex" align="middle">Jorge Washington Alba Venegas</Title>
              <Title id="titu-col" level={5} >
                Mi nombre es Jorge Alba soy estudiante de la Escuela Politecnica Nacional.
                Soy una persona que quiere junto a la tecnologia seguir desarrollando productos
                de calidad los cuales  brinden facilidades a problematicas cotidianas.
                Los desarrolladores podemos cambiar al mundo y lo haremos como mucho esfuerzo.
                Tengo mucha ambición de querer aprender más, para nosotros el programador perfecto
                debe ser un devorador de información nueva y tener la capacidad de trabajo en equipo.
             </Title>
            </Col>

          </Row>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <br></br>
          <Row>
          <Col xs={0} sm={0} md={0} lg={3}  xl={3} ></Col>
            <Col xs={0} sm={0} md={0} lg={8}  xl={8} type="flex" align="middle"><img id="im-about" src={avatar2} alt="header" width="300" height="300" /> </Col>
            <Col xs={0} sm={0} md={0} lg={1}  xl={1}></Col>
            <Col xs={24} sm={24} md={24} lg={10}  xl={10}>
              <Title level={2} id="name" type="flex" align="middle">Byron Sebastian Huaraca Salazar</Title>
              <Title id="titu-col" level={5} >
                Mi nombre es Byron Huaraca soy estudiante de la Escuela Politécnica Nacional.
                Soy una persona que quiere cambiar el mundo desarrollando software de calidad e
                impresión para las personas. Soy alguien de impresiones fuertes, dedicado y centrado
                a lo que le gusta y le apasiona. Pienso que como desarrolladores podremos cambiar la perspectiva
                de las cosas consumiendo información y adaptándonos al cambio, siendo así participes del trabajo
                en equipo.
             </Title>
            </Col>

          </Row>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <br></br>
          <Row>
          <Col xs={0} sm={0} md={0} lg={3}  xl={3} ></Col>
            <Col xs={0} sm={0} md={0} lg={8}  xl={8} type="flex" align="middle"><img id="im-about" src={avatar3} alt="header" width="300" height="300" /> </Col>
            <Col xs={0} sm={0} md={0} lg={1}  xl={1}></Col>
            <Col xs={24} sm={24} md={24} lg={10}  xl={10}>
              <Title level={2} id="name" type="flex" align="middle">Juan Bernabé Dávila Flores</Title>
              <Title id="titu-col" level={5} >
                Mi nombre es Bernabé Dávila soy estudiante de la carrera de Tecnología Superior en Desarrollo de Software
                en la Escuela Politécnica Nacional. Soy un joven que esta  enfocado en el constante aprendizaje de metodologías
                que ayuden a diseñar  aplicaciones, buscando siempre la calidad y simplicidad en estas, para que estas brinden
                a los usuarios una ayuda y solucion a problemas que surgen diariamente. Mi meta como desarrollador de software
                es tener un conocimiento amplio de diferentes lenguajes de programación y obtener conocimientos.
               
             </Title>
            </Col>

          </Row>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <br></br>
          <Row>
          <Col xs={0} sm={0} md={0} lg={3}  xl={3} ></Col>
            <Col xs={0} sm={0} md={0} lg={8}  xl={8} type="flex" align="middle"><img id="im-about" src={avatar4} alt="header" width="300" height="300" /> </Col>
            <Col xs={0} sm={0} md={0} lg={1}  xl={1}></Col>
            <Col xs={24} sm={24} md={24} lg={10}  xl={10}>
              <Title level={2} id="name" type="flex" align="middle">Jefferson Ricardo Llumiquinga Llumiquinga</Title>
              <Title id="titu-col" level={5} >
               Mi nombre es Jefferson Llumiquinga estudiante 
              de la Escuela Politécnica Nacional de la carrera de Análisis de Sistemas Informáticos en base
               a los conocimientos adquiridos en la carrera lo que buscamos es solucionar las problemáticas 
               de la sociedad esto mediante a tecnología que nos  brindan, aplicando buenos criterios y el 
               correcto manejo de las herramientas.
             </Title>
            </Col>

          </Row>
        </h3>
      </div>
    </Carousel>
    <br></br>
    <div id="mvdiv">
      <Row>
        <Col md={12} lg={12} xl={12}>
          <Title level={3}>Nuestra Misión</Title>
          <Title id="tit" level={4}>Maximizar el potencial de nuestros clientes a través del uso de Internet relacioando a la orgnizacion del hogar.</Title>
          <Title level={3}>Nuestros valores como equipo e individuos son</Title>
          <Title id="tit" level={4}>Honestidad, Lealtad, Respeto, Pasión por los desafíos, Superación Constante y Creatividad.</Title>
          <Title level={3}>Nuestra visión</Title>
          <Title id="tit" level={4}>Ofrecer un producto eficiente el cual otorgue beneficios a los usuarios en epocas de pandemia. Mejorar la union familiar dentro de a mayor canridad de hogares del país.</Title>
        </Col>
        
        <Col md={12} lg={12} xl={12} type="flex" align="middle"> 
          <img id="im-vm" src={imgmv} alt="header"  />
        </Col>
      </Row>
    </div>
    <br></br>
    <br></br>

  </div>;
};

export default AboutPage;
