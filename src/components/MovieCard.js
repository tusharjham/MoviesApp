import React, { Component } from "react";
// import { connect } from "react-redux";
import { connect } from "react-redux";
import { StoreContext } from "..";
import { addFavourite, removeFav } from "../actions";
class MovieCard extends React.Component {
  increaseFav = () => {
    const { data } = this.props;
    this.props.dispatch(addFavourite(data));
  };
  removeFav = () => {
    const { data } = this.props;
    this.props.dispatch(removeFav(data));
  };

  render() {
    const { data, isFavourite } = this.props;
    return (
      <div className="moviecard">
        <div className="card-left">
          <img src={data.Poster} />
        </div>
        <div className="card-right">
          <h1>{data.Title}</h1>
          <p>{data.Plot}</p>

          {isFavourite(data) ? (
            <button onClick={this.removeFav} className="unfav-btn">
              UnFavourites
            </button>
          ) : (
            <button onClick={this.increaseFav} className="fav-btn">
              Add to Favourites
            </button>
          )}
          <div className="rate">{data.imdbRating}</div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
