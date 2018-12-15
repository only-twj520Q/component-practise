import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';

const NOOP = () => {};

class Modal extends Component {

  static defaultProps = {
    visible: false,
    popup: false,
    title: '',
    closable: true,
    maskClosable: true,
    onClose: NOOP,
    isFooter: true,
    footerChildEle: '',
    actions: [],
    onConfirm: NOOP,
    onCancle: NOOP,
    contentStyle: null
  }

  // TODO  添加组件属性验证
  static propTypes = {
  }

  constructor(props) {
    super(props);

    this.firstShow = !props.visible;
    this._renderHeader = this._renderHeader.bind(this);
    this._renderCloseIcon = this._renderCloseIcon.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
  }

  stopEventBubble(e) {
    e.stopPropagation();
  }

  _renderHeader(title) {
    if (!title) {
      return null;
    }

    let headEle = (
      <div className="modal-header">
        { title }
      </div>
    );

    return headEle;
  }

   _renderCloseIcon(closable, onClose) {
     if (!closable) {
       return null;
     }

     return (
       <i className="iconfont modal-close" onClick={onClose}>&#xe676;</i>
     )
   }

  _renderFooter(isFooter, footerChildEle, actions, onConfirm, onCancle, onClose) {
    if (!isFooter) {
      return null;
    }

    let footerEle = '';

    if (footerChildEle) {
      footerEle = (
        <div className="modal-footer">
          { footerChildEle }
        </div>
      );
    } else if (actions.length !== 0) {
      footerEle = (
        <div className="modal-footer">
          {
            actions.map(action => (
              <span className="modal-footer-btn" style={action.style} onClick={action.cb}>{action.text}</span>
            ))
          }
        </div>
      )
    } else if (onConfirm != NOOP) {
      footerEle = (
        <div className="modal-footer">
          <span className="modal-footer-btn modal-footer-btn_confirm" onClick={onConfirm}>确定</span>
          <span className="modal-footer-btn modal-footer-btn_cancel" onClick={onCancle === NOOP ? onClose: onCancle}>取消</span>
        </div>
      )
    }

    return footerEle;
  }

  componentDidMount() {
    this.firstShow = false;
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.visible === nextProps.visible) {
      return false;
    }
    return true;
  }

  render() {
    const {
      visible,
      popup,
      title,
      closable,
      maskClosable,
      onClose,
      isFooter,
      footerChildEle,
      actions,
      onConfirm,
      onCancle,
      contentStyle
    } = this.props;

    const maskClassName = ['modal-mask', visible ? 'modal-mask_show':'modal-mask_hide'].join(' ');
    const boxClassName = ['modal-box', popup ? 'modal-box-popup' : '', popup ? (visible ? 'modal-box-popup_show':'modal-box-popup_hide') : '' ].join(' ');

    // 首屏渲染，如果是组价不可见，不渲染该组件，并且也可以避免出现动画效果
    return (
      !this.firstShow && (
        <div className={maskClassName} onClick={maskClosable ? onClose: NOOP}>
          <div className={boxClassName} onClick={this.stopEventBubble}>
            
            { this._renderCloseIcon(closable, onClose) }
            { this._renderHeader(title) }

            <div className='modal-content' style={contentStyle}>
              { this.props.children }
            </div>

              { this._renderFooter(isFooter, footerChildEle, actions, onConfirm, onCancle, onClose) }
          </div>
        </div>
      )
    )
  }

}


export default Modal;
