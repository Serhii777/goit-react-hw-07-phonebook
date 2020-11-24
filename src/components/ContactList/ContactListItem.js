import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contact/contactActions";

import styles from "./ContactList.module.css";

const ContactListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={styles.contactItem}>
      <p className={styles.contactName}>{name}:</p>
      <span className={styles.contactNumber}>{number}</span>
      <button
        type="button"
        className={styles.contactButton}
        onClick={onRemoveContact}>
        &#10006;
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

ContactListItem.defaultProps = {
  name: "",
  number: "",
};

const mapStateToProps = (state, ownProps) => {
  const contactListItem = state.contactList.find(
    (contact) => contact.id === ownProps.id
  );
  return {
    ...contactListItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
