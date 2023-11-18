import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Homepage } from "./components/Homepage/homepage";
import { DogDetails } from "./components/DogDetails/DogDetails";
import { Navbar } from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/dog-details/:id">
            <DogDetails />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
