import React, {Component} from 'react';

class Demo extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={()=>{
        this.setState({load:true})
      }}>
        懒加载组件是否可见：{this.props.visible? '是' : '否'}
      </div>
    )
  }
}
export default Demo
