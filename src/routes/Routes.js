import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

// Import Store
import { StoreProvider } from "../Store";

// Components
import Main from "../components/Main/Main";
import Single from "../components/Single/Single";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";

const Routes = () => {
  const history = createBrowserHistory();
  return (
    <StoreProvider>
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path="/" component={PhotoGrid}></Route>
            <Route path="/view/:postId" component={Single}></Route>
          </Switch>
        </Main>
      </Router>
    </StoreProvider>
  );
};

export default Routes;
