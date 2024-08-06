import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContacts }) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContacts={onDeleteContacts}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContacts: PropTypes.func,
};

export default ContactList;