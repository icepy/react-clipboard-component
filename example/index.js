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