import React from 'react';
import './css/App.css';
import ContactsList from './component/contactsList';
import { Container, AppHeader } from './style/styleComponents';
import axios from 'axios';
import AddContactForm from './component/AddContactForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      editingContact: null
    };
    this.handleAddContact = this.handleAddContact.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.handleEditContact = this.handleEditContact.bind(this);
  }



  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
          const storedContacts = localStorage.getItem('contacts');
          if (storedContacts) {
            this.setState({ users: JSON.parse(storedContacts) });
          }else{
            this.setState({ users: response.data });
          }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }

  componentWillUnmount(){
     localStorage.removeItem('contacts');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem('contacts', JSON.stringify(this.state.users));
    }
  }


  handleAddContact(contact) {
    // const { users, editingContact } = this.state;
    if (this.state.editingContact) {
      const updatedContacts = this.state.users.map((c) => 
        c.id === this.state.editingContact.id ? { ...contact, id: c.id } : c
      );
      this.setState({ users: updatedContacts, editingContact: null });
    } else {
      this.setState({ users: [...this.state.users, { ...contact, id: Date.now() }] });
    }
  }


  handleDeleteContact(contactToDelete) {
    if(window.confirm("Are you sure to delete this contact?")){
      const newContacts = this.state.users.filter(contact => contact.id !== contactToDelete.id);
          this.setState({ users: newContacts });
     }
  }



  handleEditContact(contact) {
    this.setState({ editingContact: contact });
  }


   saveChanges = (id, updatedName, updatedEmail,updatedPhone) => {
    console.log(1)
     this.setState(prevState => ({
        users: prevState.users.map(contact =>
            contact.id !== id ? contact : {...contact, name: updatedName, email: updatedEmail, phone: updatedPhone}
        ),
         editingContact: null  // reset after editing
    }));

      console.log(this.state.editingContact)
};

  

  render() {
    return (
      <Container>
      <AppHeader>Contacts</AppHeader>
      <AddContactForm 
          onAdd={this.handleAddContact} 
          editingContact={this.state.editingContact} 
        />
      <ContactsList 
        key={this.state.users.id}
        contacts={this.state.users}   
        onDelete={this.handleDeleteContact}
        onEdit={this.handleEditContact}
        contactBeingEdited={this.state.editingContact} 
        onSaveChanges={this.saveChanges} 
        />
    </Container>
    );
  }
}

export default App;