import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Button, message, Input } from 'antd';
import {get} from 'utils'
import cookie from 'cookiejs'
import constants from 'constants'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      userInfo: {}
    }
  }
  componentDidMount () {
    console.warn(this.props)
  }
  render () {
    return (
      <div style={{padding: '100px 0', textAlign: 'center'}}>
        <p><Input style={{width: 100}} onChange={(e)  => this.setUserInfo({userName: e.target.value})} placeholder='请输入姓名'></Input></p>
        <p><Input style={{width: 100}} onChange={(e)  => this.setUserInfo({password: e.target.value})} placeholder='请输入密码'></Input></p>
        <Button style={{marginRight: 20}} onClick={()  => this.sign('signUp')}>注册</Button>
        <Button style={{marginRight: 20}} onClick={()  => this.sign('signIn')}>登录</Button>
      </div>
    )
  }
  
  setUserInfo (data) {
    let userInfo = {...this.state.userInfo, ...data}
    this.setState({userInfo})
  }

  sign (type) {
    let {userName, password} = this.state.userInfo
    let _this = this
    let url = type === 'signIn' ? '/login/signIn' : '/login/signUp'
    if (!userName) return message.error('请输入姓名')
    if (!password) return message.error('请输入密码')
    get(url, {
        userName,
        password
      }, (data) => {
        message.success(data.text)
        cookie.set('nId', userName, constants.COOKIE_OPTIONS)
        _this.props.history.push('/')
      }, (err) => console.warn(err))
  }
}

export default withRouter(Login)