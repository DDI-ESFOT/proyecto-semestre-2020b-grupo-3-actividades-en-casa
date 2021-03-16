import "../styles/App.css";
import React, {useEffect} from "react";
import MainLayout from "./MainLayout";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ActivitiesPage from "../pages/ActivitiesPage";
import NotFoundPage from "../pages/NotFoundPage";
import {auth} from "../firebase";
import Routes from "../constants/routes";
import {AuthProvider} from "../lib/auth";

function App() {
  let history = useHistory();


  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
