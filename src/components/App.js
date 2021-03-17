import "../styles/App.css";
import MainLayout from "./MainLayout";
import HomePage from "../pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ActivitiesPage from "../pages/ActivitiesPage";
import { AuthProvider } from "../lib/auth";

function App() {
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
          </Switch>
        </MainLayout>
      </AuthProvider>
    </>
  );
}

export default App;
