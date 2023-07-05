import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  userQuery = event => {
    this.setState({
      query: event.target.value,
    });
  };

  userFormSubmit = event => {
    event.preventDefault();
    const userSearchQuery = this.state.query;
    this.props.newUserQuery(userSearchQuery);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.userFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.userQuery}
          />
        </form>
      </header>
    );
  }
}
