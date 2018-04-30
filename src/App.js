import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import Style from './App.less';
class App extends Component {
  componentWillMount () {
    Style.use()
  }
  render() {
    return (
      <div className="App">
        <Button type='danger'>开始</Button>
      </div>
    );
  }

  componentWillUnmount () {
    Style.unuse()
  }
}

export default App;
