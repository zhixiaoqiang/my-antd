import React, { Component } from 'react';
// import { Button, message, Input } from 'antd';
import {withRouter} from "react-router-dom";
import Style from './home.less'

const BlockItem = props => {
  const {title, onClick} = props
  return (
    <div className='block-item' onClick={onClick}>
      {title}
    </div>
  )
}

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
    return (
      <div className='home-container'>
        <h1>我的应用</h1>
        <div className='block'>
          {this.renderBlockItem()}
        </div>
      </div>
    )
  }

  renderBlockItem () {
    let {push} = this.props.history
    let data = [
      {
        title: '词典',
        path: '/youdao'
      },
      {
        title: '掘金',
        path: '/youdao'
      },
      {
        title: '每日一文',
        path: '/youdao'
      },
      {
        title: '天气',
        path: '/youdao'
      },
      {
        title: '电影',
        path: '/youdao'
      },
      {
        title: '开眼',
        path: '/youdao'
      },
      {
        title: '壁纸',
        path: '/youdao'
      },
      {
        title: '快递',
        path: '/youdao'
      },
      {
        title: '头条',
        path: '/youdao'
      },
      {
        title: 'api',
        path: '/youdao'
      }
    ]
    return data.map((item, i) => {
      return <BlockItem key={i} title={item.title} onClick={() => push(item.path)}></BlockItem>
    })
  }
}

export default withRouter(Home)