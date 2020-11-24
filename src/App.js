import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <BrowserRouter basename="/portfolioparker">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
