import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { placeholder, handleChange } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
