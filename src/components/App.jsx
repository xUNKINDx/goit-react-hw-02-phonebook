import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = {
    ...initialState,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return { [name]: value };
    });
  };

  addNewContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return { ...initialState, contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      const currentContacts = prevState.contacts.filter(item => item.id !== id);
      return { contacts: currentContacts };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>Phonebook</h1>
        <ContactForm callback={this.addNewContact} />
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange}></Filter>
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        ></Contacts>
      </>
    );
  }
}

export default App;
