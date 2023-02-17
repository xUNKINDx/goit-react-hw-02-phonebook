import { render } from '@testing-library/react';
import { Component } from 'react';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: '',
  filter: ''
};

class App extends Component {
  state = {
    ...initialState,
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return { [name]: value };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      const { name, number } = prevState;
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      return { ...initialState, contacts: [...prevState.contacts, newContact] };
    });
  };

  getContacts = () => {
    const myContacts = this.state.contacts
    .filter(contact => contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    .map(contact => (
      <li key={contact.id}>
        {contact.name} {contact.number}
      </li>
    ));

    return <>{myContacts}</>;
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
          <label>Number</label>
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
          <button type="submit" name="addContact">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <label>Find contacts by name</label>
        <input
            onChange={this.handleChange}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
          />
        <ul>{this.getContacts()}</ul>
      </>
    );
  }
}

export default App;
