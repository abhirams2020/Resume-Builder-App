import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post("api/user/login", values);
      message.success("Login successfull");
      localStorage.setItem("resume-user", JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Login failed");
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
      {loading && <Spin size="large"/>}
      {/* <h1 className="brand"><Link to="/home">Resume Builder</Link></h1> */}
      <h1 className="brand"><a href="https://github.com/abhirams2020/Resume-Builder-App" style={{color: "white"}}>Resume Builder</a></h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input placeholder="abhirams2020"/>
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" placeholder="12345"/>
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here to Register</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
