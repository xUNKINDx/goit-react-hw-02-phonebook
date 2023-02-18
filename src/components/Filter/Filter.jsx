import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, handleChange } = this.props;

    return (
      <>
        <label>Find contacts by name</label>
        <input
          onChange={handleChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
