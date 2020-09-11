import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies
      .map((currentMovie) => <MovieCard movie={currentMovie} key={currentMovie.title} />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieList;
