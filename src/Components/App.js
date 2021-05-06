import React, { Component } from "react";
import Container from "./Container/Container";
import Phonebook from "./Phonebook/Phonebook";
import Section from "./Section/Section";
import Contacts from "./Contacts/Contacts";
import FindContact from "./FindContact/FindContact";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  updateContact = (newContact) => {
    if (
      this.state.contacts.find((contact) => contact.name === newContact.name)
    ) {
      alert(newContact.name + " is already exist in phonebook");
      return;
    }
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = (elementID) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== elementID
      ),
    }));
  };

  normalizedFilter = this.state.filter.toLowerCase();

  filteredContacts = this.state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(this.normalizedFilter)
  );

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <Section title={"Phonebook"}>
          <Phonebook func={this.updateContact} />
        </Section>
        <Section title={"Contacts"}>
          <FindContact filterFunc={this.changeFilter} />
          <Contacts
            data={filteredContacts}
            filterFunc={this.changeFilter}
            deleteFunc={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
