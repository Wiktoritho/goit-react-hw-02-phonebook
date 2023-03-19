import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    const filterId = nanoid();
    return (
      <div>
        <label htmlFor={filterId}>Find contacts by name</label>
        <input
          id={filterId}
          type="search"
          value={value}
          onChange={onChange}
        ></input>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  filteredContacts: PropTypes.array,
  onChange: PropTypes.func,
};