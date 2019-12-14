import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import App from "./components/App.js";

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
