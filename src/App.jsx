import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Artist from "./components/Artist";
import "./App.scss";

export default class App extends Component {
  state = {
    amount: 0,
    addedcartAlbums: [
      {
        "albumArtist": "Graham",
        "albumName": "Canne a gogo",
        "albumPrice": 5,
        "albumYear": 2019,
        "albumImage": "http://placekitten.com/g/150/150"
      },
      {
        "albumArtist": "Graham",
        "albumName": "Cannette",
        "albumPrice": 5,
        "albumYear": 2019,
        "albumImage": "http://placekitten.com/g/150/150"
      },
      {
        "albumArtist": "Graham",
        "albumName": "La Minima",
        "albumPrice": 5,
        "albumYear": 2019,
        "albumImage": "http://placekitten.com/g/150/150"
      }
    ],
  };

  AddItem = (albumName) => {
    console.log(albumName);
    this.setState({
      addedcartAlbums: [...this.state.addedcartAlbums, albumName],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/cart"
                render={(props) => (
                  <Cart
                    {...props}
                    addedcartAlbums={this.state.addedcartAlbums}
                  />
                )}
              />

              <Route
                exact
                path="/artist"
                render={(props) => <Artist {...props} AddItem={this.AddItem} />}
              />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}
