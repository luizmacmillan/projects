import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import HeaderContext from '../context/HeaderContext';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  const {
    title,
    showsSearchBar,
    setShowsSearchBar,
  } = useContext(HeaderContext);

  const handleSearchImage = () => {
    if (
      title === 'Comidas'
      || title === 'Bebidas'
      || title === 'Explorar Origem'
    ) {
      return true;
    }
    return false;
  };

  const toggleSearchBar = () => {
    if (showsSearchBar) {
      setShowsSearchBar(false);
    } else {
      setShowsSearchBar(true);
    }
  };

  return (
    <div className="header-container">
      <div className="main-header-container">
        <Link className="profile-btn" to="/perfil">
          <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
        </Link>
        <h1 data-testid="page-title" className="header-page-title">{ title }</h1>
        {
          handleSearchImage() && (
            <button
              type="button"
              data-testid="search-top-btn"
              onClick={ toggleSearchBar }
              src={ searchIcon }
              className="search-btn"
            >
              <img
                src={ searchIcon }
                id="search-image"
                alt="Search"
              />
            </button>
          )
        }
      </div>
      { showsSearchBar && <SearchBar /> }
    </div>
  );
};

export default Header;
