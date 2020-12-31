import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { IState } from '../../store/index';
import { getToken } from '../../store/actions/login';
import { Dispatch } from 'redux';
import './login.css';
export interface IProps {
  dispatch: Dispatch;
}
class Login extends Component<IProps> {
  state = {
    layout: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    tailLayout: {
      wrapperCol: { offset: 8, span: 16 },
    }
  }
  
  onFinish = (values:any) => {
    console.log(this)
    this.props.dispatch(getToken(values));
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };
   
  render(){
    return <>
      <div className="fixedLogin">
        <div className="loginBox">
        <Form
          {...this.state.layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: '请填写账号!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请填写密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...this.state.tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    </>
  }
}

export default connect((state:IState)=>{
  return {
    token: state.login.token
  }
}, (dispatch:Dispatch)=>({dispatch}))(Login);