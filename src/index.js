import ReactDOM from "react-dom";
import React from "react";
import Root from "./components/Root/Root.tsx";

const App = () => {
  return (
    <>
      <h1>This is my React app! It worked</h1>
      <Root />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
