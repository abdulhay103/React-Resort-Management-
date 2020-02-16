import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,

  document.getElementById("root")
);
