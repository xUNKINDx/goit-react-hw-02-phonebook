import { render } from '@testing-library/react';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  handleChange = event => {
    this.setState(prevState => {
      return { name: event.target.value };
    });
  };

  handleClick = event => {
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: prevState.name,
      };
      const newContacts = [...prevState.contacts, newContact];
      return { contacts: newContacts };
    });
  };

  getContacts = () => {
    const myContacts = this.state.contacts.map(contact => (
      <li key={contact.id}>{contact.name}</li>
    ));

    return <>{myContacts}</>;
  };

  render() {
    return (
      <>
        <h2>Name</h2>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button onClick={this.handleClick} name="addContact">
          Add contact
        </button>
        <h2>Contacts</h2>
        <ul>{this.getContacts()}</ul>
      </>
    );
  }
}

export default App;
