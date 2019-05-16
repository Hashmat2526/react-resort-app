import React, { Component } from "react";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    greeting: "hello",
    name: "john"
  };
  render() {
    return (
      <div>
        <RoomContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </RoomContext.Provider>
      </div>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
