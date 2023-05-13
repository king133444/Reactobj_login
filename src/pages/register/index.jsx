import React,{ useState } from 'react';
import {Layout, Menu, Breadcrumb,Button,Input,Divider} from 'antd';
import axios from "axios";
import bg from "../imags/login.gif"
const {Content } = Layout;
 


function Register() {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const backgroundStyle = {
    backgroundImage:"url(" + bg + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"1536px",
    
    }
    const bodyStyle = {
      height:'616px'
    }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const returnLoginPage=(e)=>{
    window.location.href="http://localhost:3000"
  }
  const handleSubmit = async(data) => {
    try {
      const response = await axios.post('/graphql', {
        query: `
          mutation {
            registerUser(input: {
              username: "${data.username}",
              password: "${data.password}"
            }) {
              id
              username
              password
            }
          }
        `,
      });
      console.log(response.data.data.registerUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="layout" style={backgroundStyle}>
        
       
            <Menu
               
                mode="horizontal"
                defaultSelectedKeys={['3']}
                style={backgroundStyle}
            >
               
                <Menu.Item key="2"><a href={"/"}>登录</a></Menu.Item>
                <Menu.Item key="3"><a href={"register"}>注册</a></Menu.Item>
                
            </Menu>

      
        <Content style={{ padding: '0 '}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
        
            </Breadcrumb>
            <div style={bodyStyle}> 
                
                 
            <div orientation="center" style={{fontSize:"30px",textAlign:'center'}}>注册页面</div>
                <br/>
                <div align="center" style={{padding:"120px 0 0 0 "}}>
                <form onSubmit={handleSubmit}>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
                    <Input placeholder="请输入账号" id="username" type="text"
                        prefix="账号"  style={{width:"20%"}} onChange={handleUsernameChange}/>
                    <br/>
                    <br/>
                   <Input placeholder="请输入密码" id="password" type="password" prefix="密码" style={{width:"20%"}} onChange={handlePasswordChange}/>
                    <br/>
                    <br/>
                    <Input placeholder="请再次输入密码" id="confirmpwd" type="password"  prefix="确认密码" style={{width:"20%"}}  onChange={handleConfirmPasswordChange}/>
                    <br/>
                    <br/>
                    <br/>
                    <Button type='primary' htmlType='submit' >注册</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={returnLoginPage}>取消</Button>
                    </form>
                </div>
            </div>
        </Content>
        <Divider orientation="center" style={{fontSize:"10px"}}>React and Ant Design ©2023 Created by J.Alex</Divider>
    </Layout>
);
}

export default Register;