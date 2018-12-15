import React, {Component} from 'react';
import Head from '../component/head';
import Demo from '../component/demo'

import './index.less';

class Page extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }

  render() {
    return (
      <div>
        <Head.Title title='组件页面' />
        <Head.FontSize uiSize={375} multiple={100} />
        <Demo
          visible={this.state.visible}
        />
        <button onClick={()=>{
          this.setState({
            visible: !this.state.visible
          })
        }}>点击按钮引入组件</button>
      </div>
    )
  }
}

export default Page
