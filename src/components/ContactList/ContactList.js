import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "./ContactListItemContainer";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import contactFade from "../Animation/ContactFade.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div className={styles.contactWrapper}>
      <TransitionGroup component="ul" className={styles.contactList}>
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames={contactFade}>
            <ContactListItem
              key={id}
              id={id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  props: PropTypes.exact({
    contacts: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactList;

