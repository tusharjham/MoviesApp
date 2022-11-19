import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import data from "./Data";
import { addMovies, showFavourites } from "../actions";
import "./style.css";
import { StoreContext } from "../index";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    // store.subscribe(() => {
    //   this.forceUpdate();
    // });

    this.props.dispatch(addMovies(data));
  }

  changeTab = (data) => {
    const { store } = this.props;
    this.props.dispatch(showFavourites(data));
  };
  isFavourite = (movie) => {
    const { movieData } = this.props;
    const index = movieData.favourites.indexOf(movie);
    if (index === -1) return false;
    return true;
  };
  render() {
    const { movieData, searchData } = this.props;
    const { movies, favourites, showFavourites } = movieData;
    console.log("RENDER", this.props);
    const tabData = showFavourites ? favourites : movies;
    return (
      <div className="container">
        <Navbar />
        <div className="main-list">
          <div className="tab">
            <div
              className={`tabs ${showFavourites ? "" : "active-tab"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tabs ${showFavourites ? "active-tab" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>
          {tabData.map((movie, index) => {
            return (
              <MovieCard
                data={movie}
                key={index}
                dispatch={this.props.dispatch}
                isFavourite={this.isFavourite}
              />
            );
          })}
          {tabData.length === 0 ? (
            <div className="no-movies">Nothing to Show</div>
          ) : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    movieData: state.movieData,
    searchData: state.searchData,
  };
}

const AppConnectedComponent = connect(callback)(App);

export default AppConnectedComponent;
