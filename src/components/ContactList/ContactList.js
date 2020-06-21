import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";

import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) =>
  contacts.length > 0 && (
    <ul className={styles.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.item}>
            <ContactListItem
              {...contact}
              onDeleteContact={() => onDeleteContact(contact.id)}
            />
          </li>
        );
      })}
    </ul>
  );

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;