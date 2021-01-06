import React, { Component } from "react";
import "./App.css";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Parks from "../src/Components/Parks";
import ParkInfo from "../src/Components/ParkInfo";
import Navbar from "../src/Components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      parks: [],
    };
  }

  componentDidMount() {
    let apiKey = "3dks8X8l8w0Ds47DSdDQEIfYfJ7Hw3Y1lxztQO3z";
    let apiUrl =
      "https://developer.nps.gov/api/v1/parks?&api_key=3dks8X8l8w0Ds47DSdDQEIfYfJ7Hw3Y1lxztQO3z";
    fetch(apiUrl)
      .then((data) => data.json())
      .then((parks) => this.setState({ parks: parks.data }));
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* <nav>
          <Link to="/">
            <div className="heading">
              <h1>National Parks</h1>
            </div>
          </Link>
        </nav> */}
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Parks parkList={this.state.parks} />;
              }}
            />
            {this.state.parks.length !== 0 ? (
              <Route
                exact
                path="/parks/:id"
                render={(routerProps) => {
                  let park = this.state.parks.filter(
                    (park) => park.id == routerProps.match.params.id
                  );
                  return <ParkInfo parkList={park} />;
                }}
              />
            ) : null}
          </Switch>
        </main>
        <footer>
          <div className="logo">
            <h2> National Park Services</h2>
            <h1> U.S. Department of the Interior </h1>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
