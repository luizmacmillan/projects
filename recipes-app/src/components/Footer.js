import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

const Footer = () => (
  <div className="main-footer" data-testid="footer">
    <Link to="/bebidas">
      <img src={ drinkIcon } alt="drink" data-testid="drinks-bottom-btn" />
    </Link>
    <Link to="/explorar">
      <img src={ exploreIcon } alt="explore" data-testid="explore-bottom-btn" />
    </Link>
    <Link to="/comidas">
      <img src={ mealIcon } alt="food" data-testid="food-bottom-btn" />
    </Link>
    <div className="colored-bar" />
  </div>
);

export default Footer;
