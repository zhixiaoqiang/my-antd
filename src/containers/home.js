import React, { Component } from 'react';
import { Button, message, Input } from 'antd';
import {get} from 'utils/index.js'
export default class home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      userInfo: {}
    }
  }
  componentDidMount () {
  }
  render () {
    return (
      <div style={{padding: '100px 0', textAlign: 'center'}}>
        <p><Input style={{width: 100}} onChange={(e)  => this.setUserInfo({userName: e.target.value})} placeholder='请输入姓名'></Input></p>
        <p><Input style={{width: 100}} onChange={(e)  => this.setUserInfo({password: e.target.value})} placeholder='请输入密码'></Input></p>
        <Button style={{marginRight: 20}} onClick={()  => this.signUp()}>注册</Button>
        <Button style={{marginRight: 20}} onClick={()  => this.signIn()}>登录</Button>
        查找姓名: <Input style={{width: 100}} onBlur={(e)  => this.getInfo(e.target.value)}></Input>
        <p>{this.state.text}</p>
      </div>
    )
  }
  
  setUserInfo (data) {
    let userInfo = {...this.state.userInfo, ...data}
    this.setState({userInfo})
  }

  signIn () {
    let {userName, password} = this.state.userInfo
    if (!userName) return message.error('请输入姓名')
    if (!password) return message.error('请输入密码')
    get('http://localhost:8181/login/signIn', {
        userName,
        password
      }, (data) => message.success(data.text), (err) => console.warn(err))
  }

  signUp () {
    let {userName, password} = this.state.userInfo
    if (!userName) return message.error('请输入姓名')
    if (!password) return message.error('请输入密码')
    get('http://localhost:8181/login/signUp', {
        userName,
        password
      }, (data) => message.success(data.text), (err) => console.warn(err))
  }

  getInfo (userName) {
    let _this = this
    get('http://localhost:8181/user/getInfo', {
        userName
      }, data => _this.setState({text: JSON.stringify(data.info)}), (err) => console.warn(err))
  }
}