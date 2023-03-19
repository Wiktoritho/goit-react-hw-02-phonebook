import { ContactForm } from 'components/ContactForm';
import { Component } from 'react';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactList';
import { ContactsListElement } from 'components/ContactListElement';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  filter = element => {
    this.setState({
      filter: element.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const value = this.state.filter;
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter
          value={value}
          filterContacts={this.filterContacts}
          onChange={this.filter}
        />
        <ContactsList>
          <ContactsListElement
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </ContactsList>
      </div>
    );
  }
}
