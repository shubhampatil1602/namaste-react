import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React from JSX 😄
  </h1>
);

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h3>{"Tetudo"}</h3>
      {number}
      <h1 id="heading">Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent />);
console.log(Title);
