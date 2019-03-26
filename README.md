# ReactClipboardFunctionComponent

![img](https://img.shields.io/github/license/icepy/react-clipboard-function-component.svg) ![img](https://img.shields.io/github/package-json/v/icepy/react-clipboard-function-component.svg)

react clipboard function component

## Install

```bash
$ yarn add react-clipboard-function-component --save
```

## Usage

```js
import React from "react";
import * as ReactDOM from "react-dom";
import ReactClipboardFunctionComponent from "../lib";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ""
    }
  }
  render(){
    const { username } = this.state;
    return (
      <>
        <button onClick={
          () => {
            this.setState({
              username: "icepy"
            })
          }
        }>
          copy
          <ReactClipboardFunctionComponent
            text={username}
            onCopy={() => {
              // 复制成功
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

> onCopy 中不要执行当前 setState 因为会死循环