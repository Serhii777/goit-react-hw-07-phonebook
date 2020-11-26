import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newContact = this.state;
    const { contacts } = this.props;

    let newContactUnique = contacts.find(
      ({ name }) => name === newContact.name
    );

    newContactUnique === undefined
      ? (newContactUnique = false)
      : (newContactUnique = newContactUnique);

    const isContactExist = () => {
      return !newContactUnique
        ? this.props.onAddContact(this.state) &&
            this.props.onIsNewContactUnique(newContactUnique)
        : this.props.onIsNewContactUnique(newContactUnique);
    };

    isContactExist();

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Annie Copeland"
            required
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="227-91-26"
            required
          />
        </label>

        <button type="submit" className={styles.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  number: PropTypes.string,
  newContactUnique: (PropTypes.bool, PropTypes.object),
};

ContactForm.defaultProps = {
  contacts: [],
  name: "",
  number: "",
  newContactUnique: false,
};

export default ContactForm;
