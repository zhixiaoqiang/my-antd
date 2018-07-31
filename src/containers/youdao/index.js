import React, { Component } from 'react';
import {message, Input, Table } from 'antd';
import {withRouter} from "react-router-dom";
import {get} from 'utils/index.js'
import Style from './index.less'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      suggest: [],
      userInfo: {}
    }
  }
  componentWillMount () {
    Style.use()
  }

  componentDidMount () {
  }

  componentWillUnmount () {
    Style.unuse()
  }

  render () {
    let columns = [
      {
        title: '单词',
        dataIndex: 'entry'
      },
      {
        title: '含义',
        dataIndex: 'explain'
      }
    ]
    let dataSource = this.state.suggest.map((o, i) => {
      return {
        ...o,
        key: i
      }
    })
    return (
      <div className='youdao-container'>
        <p className='youdao-container-header'>
          <span>查找单词:</span>
          <Input
            placeholder='输入中文或英文'
            onBlur={(e)  => this.getSuggest(e.target.value)}></Input>
        </p>
        <Table dataSource={dataSource} columns={columns} bordered />
      </div>
    )
  }
  
  setUserInfo (data) {
    let userInfo = {...this.state.userInfo, ...data}
    this.setState({userInfo})
  }

  getSuggest (word) {
    let _this = this
    get('/youdao/suggest', {
        word
      }, data => {
        _this.setState({suggest: data.entries || []})
        typeof data === 'string' && message.error(data)
      }, (err) => console.warn(err))
  }
}

export default withRouter(Home)