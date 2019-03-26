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
    console.log(username);
    return (
      <div>
        <ReactClipboardFunctionComponent
          text={username}
          onCopy={() => {
            
          }}
        >
          <button onClick={
            () => {
              this.setState({
                username: "icepy"
              })
            }
          }>copy</button>
        </ReactClipboardFunctionComponent>
      </div>
    )
  }
}


ReactDOM.render(
  <Home />,
  document.getElementById("app"),
);