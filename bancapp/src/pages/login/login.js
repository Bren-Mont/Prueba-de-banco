import React, { Fragment, useEffect, useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../layout/components/Layout";
import Menu from "../admin/menu/Menu";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";


function Login() {

  const dataUsuario= useData();

  let navigate = useNavigate();
  const [usuario, setUsuario]= useState()

  useEffect(() => {
    if (dataUsuario.usuario && dataUsuario.usuario.length>0) {
      navigate('/transacciones')
    }
  }, [dataUsuario]);

  const {
    register,
    handleSubmit,
    formState:
     { errors },
  } = useForm();
  const [email, setEmail] = useState(null);
  const onSubmit = async(data) => {
    dataUsuario.loginContext(data);
  };
  console.log(dataUsuario.usuario);


  useEffect(() => {
    if (email) {
      alert("ejecuto use effecct cambio estado de email");
    }
  }, [email]);

  return (
    <Fragment>
      <img
        className="img-perfil"
        src="img/perfil-del-usuario.png"
        alt="perfil del usuario logo"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su usuario"
            className="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <Form.Text className="error">Campo requerido</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            className="email"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <Form.Text className="error">Campo requerido</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Autorizo el tratamiento de mis datos"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className="btn-send">
            <div>
              <img
                className="inicio-sesion"
                src="/img/iniciar-sesion.png"
                alt=""
              />
            </div>
            Enviar
          </Button>
        </div>
      </Form>
      <Link to="/forget-password">¿Olvidaste tu contraseña? </Link> <br></br>
      <Link to="/signup">Registro</Link>
    </Fragment>
  );
}

export default Login;
