import React from 'react';
import Contact from './contact';
import { ContactsListContainer } from '.././style/styleComponents';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '.././css/aniamtion.css'; // Import the CSS file

const ContactsList = ({ contacts, onDelete, onEdit, contactBeingEdited, onSaveChanges}) => {
  // const transitions = useTransition(contacts, contact => contact.id, {
  //   from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  // });


  return (
    <ContactsListContainer>
      {contacts.map(contact => <Contact key={contact.id} onDelete={onDelete} onEdit={onEdit} contact={contact} contactBeingEdited={contactBeingEdited} onSaveChanges={onSaveChanges}/>)}
    </ContactsListContainer>
  );
};

export default ContactsList;