import React, { Component } from 'react';
import {Button} from 'antd'
import './App.css'
class App extends Component {
  render() { 
    return (
      <div className="special">
        <h3>App组件</h3>
        <Button type="primary">按钮</Button>
        <hr/>
        <Button type="dashed">按钮</Button>
        

      </div>
    );
  }
}
 
export default App;