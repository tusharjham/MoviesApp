import React from "react";
import { connect } from "react-redux";
import { addMovieToList, closeSearchBar, handleMovieSearch } from "../actions";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleAdd = () => {
    const { result } = this.props.store.searchData;
    this.props.dispatch(addMovieToList(result));
  };
  handleClose = () => {
    const { result } = this.props.store.searchData;
    this.props.dispatch(closeSearchBar(result));
  };
  render() {
    const { result, showSearchResult } = this.props.store.searchData;
    return (
      <div className="navbar">
        {showSearchResult && (
          <div className="searchSlider">
            <div className="searchSlider-left">
              <img alt="MoviePoster" src={result.Poster} />
            </div>
            <div className="searchSlider-right">
              <h1>{result.Title}</h1>

              <button onClick={this.handleAdd}>ADD</button>
              <div className="search-rate">{result.imdbRating}</div>
              <div className="close-search" onClick={this.handleClose}>
                Close
              </div>
            </div>
          </div>
        )}
        <input
          onChange={this.handleChange}
          placeholder="Search your favourite movies"
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

//Wrapper Class (Context API )
// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar
//             dispatch={store.dispatch}
//             searchData={store.getState().searchData}
//           />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    store: state,
  };
}

const NavbarConnectedComponent = connect(callback)(Navbar);

export default NavbarConnectedComponent;
