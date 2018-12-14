import React, {Component} from 'react';
import Head from '../component/head'
import './index.less';

class Page extends Component{
  render() {
    return (
      <div>
        <Head.Title title='组件页面' />
        <Head.FontSize uiSize={375} multiple={100} />
      </div>
    )
  }
}

export default Page
