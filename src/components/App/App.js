import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Input, Pagination, Select, Range } from 'fwt-internship-uikit';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header/Header';
import Card from '../Card/Card';

import './App.css';

import { getPaitings, getLocations, getAuthors } from '../../redux/actionCreators/dataAC';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const wrapperClass = classnames({ wrapper: true, wrapper_dark: isDarkTheme });
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [authorId, setAuthorId] = useState(null);
  const [locationId, setLocationId] = useState(null);
  const [author, setAuthor] = useState('Author');
  const [location, setLocation] = useState('Location');

  const params = { q: query, _page: page, _limit: 12, authorId, locationId };
  const searchQuery = Object.keys(params).filter((key) => params[key]).map((key) => `${key}=${params[key]}`).join("&");

  useEffect(() => {
    dispatch(getPaitings(searchQuery));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getAuthors());
  }, [dispatch]);

  const { paintigs, isLoading, locations, authors } = useSelector((state) => state.dataReducer);

  const handleSearchQuery = (query) => {
    setQuery(query);
  };

  const handleSearchAuthor = (name) => {
    setAuthor(name);
    const findAuthor = authors.find((item) => item.name === name);
    setAuthorId(findAuthor.id);
  };

  const handleSearchLocation = (location) => {
    setLocation(location);
    const findLocation = locations.find((item) => item.name === location);
    setLocationId(findLocation.id);
  };

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={wrapperClass}>
      <div className="сontainer">
        <Header
          onClick={handleSwitchTheme}
          isDarkTheme={isDarkTheme}
        />
        <div className="сontent">
          <Input
            className="input"
            isDarkTheme={isDarkTheme}
            placeholder="Name"
            value={query}
            onChange={(event) => handleSearchQuery(event.target.value)}
            type="search"
          />
          <Select
            className="select"
            isDarkTheme={isDarkTheme}
            value={author}
            options={authors}
            onChange={handleSearchAuthor}
          />
          <Select
            className="select"
            isDarkTheme={isDarkTheme}
            value={location}
            options={locations}
            onChange={handleSearchLocation}
          />
          <Range
            className='range'
            isDarkTheme={isDarkTheme}
            aria-hidden="true"
          >
            <Input
              isDarkTheme={isDarkTheme}
              minLength="4" 
              maxLength="4" 
              size="4"
              placeholder="from"
            />
            <Input
              isDarkTheme={isDarkTheme}
              minLength="4" 
              maxLength="4" 
              size="4"
              placeholder="before"
            />
          </Range>
        </div>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="card__wrapper">
            {paintigs.map(paintig => (
            <Card key={uuidv4()} card={paintig} 
            location={locations.find((item) => item.id === paintig.locationId)} 
            author={authors.find((item) => item.id === paintig.authorId)}/>
            ))}
          </div>
        )}
        <Pagination
          className="pagination"
          isDarkTheme={isDarkTheme}
          currentPage={page}
          pagesAmount={3}
          onChange={(page) =>
            setPage(() => page)
          }
        />
      </div>
    </div>
  );
}

export default App;
