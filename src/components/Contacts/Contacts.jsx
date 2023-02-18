import { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  handleDelete = (deleteContact, event) => {
    const target = event.target;

    const id = target.dataset['id'];
    deleteContact(id);
  };

  render() {
    const { contacts, filter, deleteContact } = this.props;

    const myContacts = contacts
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
      .map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button
            type="button"
            name="delete"
            data-id={contact.id}
            onClick={this.handleDelete.bind(this, deleteContact)}
          >
            Delete
          </button>
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
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
