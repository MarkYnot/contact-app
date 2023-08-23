import React, { useRef } from 'react';
import { ContactItem, ContactName, ContactDetails, DetailText } from '.././style/styleComponents';

const Contact = ({ contact, onDelete, onEdit, contactBeingEdited, onSaveChanges}) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  return (
    <ContactItem onClick={() => { if (!contactBeingEdited || contactBeingEdited.id !== contact.id) onEdit(contact) }}>
       {contactBeingEdited && contactBeingEdited.id === contact.id ? (   
            <>
      
                <input defaultValue={contact.name} ref={nameInputRef} />
                <input defaultValue={contact.email} ref={emailInputRef} />
                <input defaultValue={contact.phone} ref={phoneInputRef} />
                <button onClick={() => onSaveChanges(contact.id, nameInputRef.current.value, emailInputRef.current.value , phoneInputRef.current.value)}>Save</button>
        
            </>
      
      ):( 
            <>
                <ContactName>{contact.name}</ContactName>
                <ContactDetails>
                      <DetailText>{contact.email}</DetailText>
                      <DetailText>{contact.phone}</DetailText>
                </ContactDetails>
                <button onClick={(e) => {e.stopPropagation(); onDelete(contact)}}>Delete</button>
            </>
      )}

  </ContactItem>
  );
};

export default Contact;