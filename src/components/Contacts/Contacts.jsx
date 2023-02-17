import { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { contacts, filter } = this.props;

    const myContacts = contacts
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
      .map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
        </li>
      ));

    return (
      <>
        <ul>{myContacts}</ul>
      </>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Contacts;
