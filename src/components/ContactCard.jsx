import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="contact-list">
      <div className="icon">😎</div>
      <div>
        <p>Name : {name}</p>
        <p>Email : {email}</p>
      </div>
      <div>
        <button
          onClick={() => {
            props.clickHandler(id);
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
