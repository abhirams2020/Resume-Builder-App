import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate ,Navigate} from "react-router-dom";
import axios from "axios";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../src/pages/Login";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("api/user/register", values);
      setLoading(false);
      message.success("Registration successfull");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };

  
  useEffect(()=>{
    if(localStorage.getItem('resume-user'))
    {
      navigate('/home')
    }
  })

  return (
    <div className="auth-parent">
       <h1 className="brand"><a href="https://github.com/abhirams2020/Resume-Builder-App" style={{color: "white"}}>Resume Builder</a></h1>
      {loading && (<Spin size="large"/>)}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click Here to Login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;