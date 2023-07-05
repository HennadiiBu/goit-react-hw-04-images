import React, { useState } from 'react';

function Searchbar({ newUserQuery }) {
  const [query, setQuery] = useState('');

  const userQuery = event => {
    setQuery(event.target.value);
  };

  const userFormSubmit = event => {
    event.preventDefault();
    newUserQuery(query);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={userFormSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={userQuery}
        />
      </form>
    </header>
  );
}

export default Searchbar;
