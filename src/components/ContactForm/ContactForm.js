import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const contacts = this.props.contacts;

    const includeContacts = contacts.find(
      contact => contact.name === this.state.name
    );

    const createNewContact = {
      id: uuidv4(),
      name: name,
      number: number
    };
    if (name === "" || number === "") {
      return;
    }
    if (includeContacts) {
      alert(` ${this.state.name} is allready in contacts`);
    } else {
      this.props.addContact(createNewContact);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className={styles.input}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              className={styles.input}
              type="tel"
              placeholder="Enter number XXX-XX-XX"
              name="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
};

export default ContactForm;