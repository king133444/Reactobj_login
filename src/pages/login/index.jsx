import React, {Component} from 'react';
import {Menu, Layout, Breadcrumb,Divider,Button,Space,Input} from "antd";
import { useState } from 'react';
import bg from "../imags/login.gif"
import { Link } from 'react-router-dom';

const { Header,Footer,Content} = Layout;
function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };

      const backgroundStyle = {
        backgroundImage:"url(" + bg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width:"1536px",
        
        }
        const bodyStyle = {
          height:'618px'
        }
       
    
      const handlePasswordChange = (event) => { 
        setPassword(event.target.value);
      };
      const jumpRegisterPage = (e)=>{
        window.location.href="http://localhost:3000/register"
        console.log("222");
      }
      const handleSubmit = (event) => {
        event.preventDefault();
    
       
        if (username === 'admin' && password === '123') {
          window.location.href="http://localhost:3000/home"
        } else {
          setErrorMessage('用户名或密码错误');
        }
      };

   return (<Layout className="layout" style={backgroundStyle}>
    

        
        <Menu
            
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={backgroundStyle}
        >
            
            <Menu.Item key="2"><a href={"login"}>登录</a></Menu.Item>
            <Menu.Item key="3"><a href={"register"}>注册</a></Menu.Item>
          
        </Menu>
    
    <Content style={{ padding: '0 '}}>
        <Breadcrumb style={{ margin: '0px 0' }}>
        
        </Breadcrumb>
        <div style={bodyStyle} >
        <div orientation="center" style={{fontSize:"30px",margin:" 30px 0 0 0",textAlign:'center'}}>登录页面</div>
            <br/>
            <br/>
            <div align="center">
                
                <div align="center" style={{padding:'120px 0 0 0'}}>
                <form onSubmit={handleSubmit}>{errorMessage && <p>{errorMessage}</p>}
                    <Input placeholder="请输入用户名" prefix={"账户"}
                              value={username} onChange={handleUsernameChange} style={{width:"20%"}}/>
                    <br/>
                    <br/>
                    <Input placeholder="请输入密码"  prefix={"密码"} id="password" type="password" value={password} onChange={handlePasswordChange} style={{width:"20%"}}/>
                    <br/>
                    <br/>
                    <br/>
                    <Space wrap>
                    <Button type="primary" htmlType='submit' >登录</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="default" onClick={jumpRegisterPage}>注册</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                    </Space>
                </form>
                </div>

            </div>
            
        </div>
    </Content>
    <Divider orientation="center" style={{fontSize:"10px"}}>React and Ant Design ©2023 Created by J.Alex</Divider>
      
      
</Layout>
   )
}
export default Login