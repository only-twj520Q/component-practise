import React from 'react';
import ReactDOM from 'react-dom';

const _setFontSize = (uiSize, multiple) => (
    <script>
      {
        (function(win,doc){
          function setFontSize(){
            var basicFontSize = `${(doc.documentElement.clientWidth/uiSize * multiple)}px`
            doc.documentElement.style.fontSize = basicFontSize;
          }
          setFontSize();
          win.onresize = setFontSize
        })(window,document)
      }
    </script>
);

const FontSize = props => (
  ReactDOM.createPortal(
    _setFontSize(props.uiSize, props.multiple),
    document.head
  )
)

const _setTitle = (title) => (
    <title>{title}</title>
);

const Title = props => (
  ReactDOM.createPortal(
    _setTitle(props.title),
    document.head
  )
)

const Head = {
  FontSize,
  Title
}

export default Head;
