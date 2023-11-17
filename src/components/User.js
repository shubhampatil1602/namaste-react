import { useState, useEffect } from "react";

const User = ({ name }) => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(1);

  useEffect(() => {
    // Api Call
  }, []);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Silvassa</h3>
      <h4>Contact: @shubhamsp1602</h4>
    </div>
  );
};

export default User;
