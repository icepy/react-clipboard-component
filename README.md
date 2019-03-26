# ReactClipboardComponent

![img](https://img.shields.io/github/license/icepy/react-clipboard-function-component.svg) ![img](https://img.shields.io/github/package-json/v/icepy/react-clipboard-function-component.svg)

react clipboard components

## Install

```bash
$ yarn add react-clipboard-components --save
```

## Usage

```js
import React from "react";
import * as ReactDOM from "react-dom";
import Clipboard from "../lib";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      mark: 0,
      open: false
    }
  }
  render(){
    const { username, open, mark } = this.state;
    console.log(this.state);
    return (
      <>
        <button onClick={
          () => {
            this.setState({
              username: "icepy",
              mark: this.state.mark + 1
            })
          }
        }>
          copy
          <Clipboard.ReactClipboardComponent
            text={username}
            mark={mark}
            onCopy={() => {
              // 复制成功
              this.setState({
                open: true
              })
            }}
          />
        </button>
      </>
    )
  }
}


ReactDOM.render(
  <Home />,
  document.getElementById("app"),
);
```

- ReactClipboardComponent 可以在 onCopy 中执行 setState 但必须传入 mark 标记来确认
- ReactClipboardFunctionComponent 中的 onCopy 不要执行当前 setState 因为会死循环