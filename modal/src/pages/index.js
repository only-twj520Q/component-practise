import React, {Component} from 'react';
import Head from '../component/head';
import Modal from '../component/modal';
import './index.less';

class Page extends Component{
  state = {
    show: false
  }

  render() {
    const actions = [
      {
        text: '按钮1',
        style: {
          color: '#08b2cc'
        },
        cb: () => {console.log('按钮1')}
      },
      {
        text: '按钮2',
        style: {
          color: '#08b2cc'
        },
        cb: () => {console.log('按钮2')}
      },
      {
        text: '按钮3',
        style: {
          color: '#08b2cc'
        },
        cb: () => {console.log('按钮3')}
      }
    ]
    return (
      <div>
        <Head.Title title='组件页面' />
        <Head.FontSize uiSize={375} multiple={100} />
        <Modal
          visible={this.state.show}
          title='上弹的标题'
          popup={true}
          // footerChildEle={(<div style={{width:'100%',textAlign:'center'}}>底部footer</div>)}
          // actions={actions}
          onConfirm={
            ()=>{
              console.log('confirm')
            }
          }
          // onCancle={
          //   ()=>{
          //     console.log('cancle')
          //   }
          // }
          onClose={
            ()=>{
              console.log('hide')
              this.setState({show:!this.state.show})
            }
          }
          // contentStyle={{padding:0}}
        >
          我是弹窗的内容
          {/* <ul>
            <li className="line">上弹的内容1</li>
            <li className="line">上弹的内容2</li>
            <li className="line">上弹的内容3</li>
          </ul> */}
        </Modal>
        <button onClick={()=>{
          this.setState({
            show: !this.state.show,
          })
        }}>点击我显示弹窗</button>
      </div>
    )
  }
}

export default Page
