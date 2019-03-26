# ReactClipboardFunctionComponent

react clipboard function component

## Install

```bash
$ yarn add react-clipboard-function-component --save
```

## Used

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
      <div>
        <button onClick={
          () => {
            this.setState({
              username: "icepy"
            })
          }
        }>
          <ReactClipboardFunctionComponent
            text={username}
            onCopy={() => {
              // 复制成功
            }}
          >
          copy
          </ReactClipboardFunctionComponent>
        </button>
      </div>
    )
  }
}


ReactDOM.render(
  <Home />,
  document.getElementById("app"),
);
```