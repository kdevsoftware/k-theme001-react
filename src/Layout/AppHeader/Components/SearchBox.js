import React, { Fragment } from 'react';

class SearchBox extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="search-wrapper">
          <div className="input-holder">
            <input type="text" className="search-input" />
            <button className="search-icon">
              <span />
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchBox;
