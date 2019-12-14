import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./header";
import Content from "./content";


class App extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <Header/>
                <Switch>
                   <Route exact path = "/">
                       <Content name = "akbcf"/>
                   </Route>
                </Switch>
            </div>
        );
    }
}

export default App;