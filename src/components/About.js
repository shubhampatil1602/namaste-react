import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent cons");
  }

  async componentDidMount() {
    // console.log("parent component api");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="container">
        <h1>About</h1>
        <h2>
          This is a simple React app that displays some information about
          foodhub.
        </h2>

        <UserClass name={"1. Shubham (Class)"} />
      </div>
    );
  }
}

export default About;
