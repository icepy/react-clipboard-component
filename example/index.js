import React from "react";
import * as ReactDOM from "react-dom";
import ReactClipboardFunctionComponent from "../lib";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      open: false
    }
  }
  render(){
    const { username, open } = this.state;
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