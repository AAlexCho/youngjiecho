import React, { useState } from "react";
import { StickyContainer } from "react-sticky";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Home from "./component/Home/Home";
import Project from "./component/Project/Project";
//import Error from "src/component/Error";
import ProjectData from "./constants/ProjectData.js";
import "./App.css";

function App() {
  const myHistory = useHistory();
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="App">
      <StickyContainer>
        <Switch>
          <Route
            path="/youngjiecho"
            exact={true}
            render={() => {
              return (
                <Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
              );
            }}
          />
          <Route
            exact
            path="/youngjiecho/projects/:project_id"
            render={(routeProps) => {
              if (
                parseInt(routeProps.match.params.project_id) >= 0 &&
                parseInt(routeProps.match.params.project_id) <
                  ProjectData.length
              ) {
                return (
                  <Project
                    {...routeProps}
                    id={routeProps.match.params.project_id}
                  />
                );
              } else {
                myHistory.push("/404");
              }
            }}
          />
          {/* error pages */}
          {/* <Route path="/500" render={() => <Error err={500} />} />
          <Route path="/404" render={() => <Error err={404} />} />
          <Redirect to="/404" /> */}
        </Switch>
      </StickyContainer>
    </div>
  );
}

export default App;
