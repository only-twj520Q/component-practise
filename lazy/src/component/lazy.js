import React, { PureComponent, Component } from 'react';
import "@babel/polyfill";

/* 用法说明：参考demo文件夹下的index.js的配置 */
function lazyWrapper(WrappedComponent) {

  return class lazyComponent extends Component{
    constructor(props) {
      super(props);
      this.state = {
        loaded: false        // 组件加载状态
      };

      this.initComponent = this.initComponent.bind(this);
      this.sleep = this.sleep.bind(this);

       // 组件未加载的状态
      this.LazyComponent = WrappedComponent.beload();
    }

     // 根据组件的visible属性确定是否需要加载，如果为true则开始初始化组件
    async initComponent(visible) {

      if (!visible) {
        return;
      }

      // visible属性为true并且组件还未被加载
      if (visible && !this.state.loaded) {

        // 准备开始加载组价，显示加载中loading的状态
        this.LazyComponent = WrappedComponent.loading();
        this.setState({
          loaded: false
        });

        // 为了实现加载的过程，让loading的状态持续一秒，实际使用时可以注释这段代码
        await this.sleep(10000);

        // 开始加载组件
        let WrappedComponent_module = await WrappedComponent.init();
        this.LazyComponent = WrappedComponent_module.default;
        this.setState({
          loaded: true
        });
      }
    }

    // 模拟停顿的效果
    sleep(ms){
      return new Promise(resolve => setTimeout(resolve,ms))
    }

    componentWillReceiveProps(nextProps){
      let { loaded } = this.state;

      // 如果已加载完毕直接返回已经加载的component
      if (loaded) {
        return this.LazyComponent
      }

      this.initComponent(nextProps.visible)
    }

    componentDidMount() {
      this.initComponent(this.props.visible)
    }

    render() {
      const {
        loaded
      } = this.state;

      if (!loaded) {
        return this.LazyComponent
      } else {
        return <this.LazyComponent {...this.props} />
      }
    }
  }

}

export default lazyWrapper;
