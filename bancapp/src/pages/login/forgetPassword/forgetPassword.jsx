import React, { Fragment } from "react";


import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import Layout from "../../../layout/components/Layout";
import { useForm } from "react-hook-form";


function ForgetPassword() {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data)=>{
    
   console.log(data);
    alert(JSON.stringify (data));
  }

    return (
        <Fragment>
                <Form  onSubmit={handleSubmit(onSubmit)} >
            
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Autorizo el tratamiento de mis datos" />
                  </Form.Group>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" className="btn-send">
                    <div>
                      <img className="inicio-sesion" src="/img/iniciar-sesion.png" alt="" />
                    </div>
                    Enviar
                  </Button>
                  </div>
            </Form>
        </Fragment>

    );
}

export default ForgetPassword;