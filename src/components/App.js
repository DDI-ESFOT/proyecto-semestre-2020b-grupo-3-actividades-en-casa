import "../styles/App.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "../pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "../pages/AboutPage";
import ActivitiesPage from "../pages/ActivitiesPage";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/actividades">
              <ActivitiesPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
