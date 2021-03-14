import React from "react";
import { Button, Result } from "antd";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Result 
      status="500"
      title="500"
      subTitle="Lo sentimos, algo salio mal."
      extra={
        <Button type="primary">
          <Link to={Routes.HOME}>Regresar a Inicio</Link>
        </Button>
      }
    />
  );
};

export default NotFoundPage;
