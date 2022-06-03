import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContacts = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return (
    <div>
      <h3>Contact list</h3>
      <div>{renderContacts}</div>
    </div>
  );
};

export default ContactList;
