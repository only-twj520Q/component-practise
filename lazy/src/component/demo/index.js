import lazyWrapper from '../lazy'
import React from 'react';

export default lazyWrapper({
  init() {
    return import(/* webpackChunkName: "demo" */ './demo.js')
  },
  loading() {
    return <div>组件加载中。。。</div>
  },
  beload() {
    return <div>这里是组件加载前占位符</div>
  }
})
