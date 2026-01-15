import React from 'react'
import ReactDOM from 'react-dom/client'
const h2 = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello parent-child-heading")
  )
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
