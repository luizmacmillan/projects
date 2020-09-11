import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return <p className="movie-card-rating"><span className="rating">{this.props.rating}</span></p>;
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
