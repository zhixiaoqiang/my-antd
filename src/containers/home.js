import React, { Component } from 'react';
import { Button, message } from 'antd';
import axios from 'axios'
export default class home extends Component {
  render () {
    return (
      <Button onClick={()  => this.getInfo()}>萨达哈就是</Button>
    )
  }

  getInfo () {
    axios.get('http://localhost:8181/api/signUp', {
      params: {
        userName: '12345',
        password: '123'
      }
    }).then(function (response) {
      console.warn(response)
      message.success(response.data.data.text)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}