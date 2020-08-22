import React, { useState, useEffect } from "react";
import { StickyContainer } from "react-sticky";

import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Home from "./component/Home/Home";
import Project from "./component/Project/Project";
//import Error from "src/component/Error";
import ProjectData from "./constants/ProjectData.js";
import "./App.css";

function App() {
  const myHistory = useHistory();
  const themeType = {
    dark: "dark",
    light: "light",
  };
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("theme");
      return val ? JSON.parse(val) : themeType.light;
    }
    return themeType.light;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(mode));
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light);
  };

  return (
    <div className="App">
      <StickyContainer>
        <Switch>
          <Route
            path="/youngjiecho"
            exact={true}
            render={() => {
              return <Home mode={mode} toggleMode={toggleMode} />;
            }}
          />
          <Route
            path="/youngjiecho/projects/:project_id"
            render={(routeProps) => {
              return (
                <Project
                  {...routeProps}
                  id={routeProps.match.params.project_id}
                  mode={mode}
                  toggleMode={toggleMode}
                />
              );
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
