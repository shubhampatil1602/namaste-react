import React, { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    // console.log("parent component api");
    const data = await fetch("https://api.github.com/users/shubhampatil1602");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    // const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="avatar_url" src={avatar_url} alt="image" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shubhamsp1602</h4>
      </div>
    );
  }
}

export default UserClass;
