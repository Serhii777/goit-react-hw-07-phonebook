import React from "react";
import PropTypes from "prop-types";

import Container from "./Container";
import MainTitle from "./MainTitle/MainTitle";
import Filter from "./Filter/Filter.container";
import ContactForm from "./ContactForm/ContactForm.container";
import ContactList from "./ContactList/ContactList.container";
import Alert from "./Alert/Alert";

import styles from "./Container/Container.module.css";
import { CSSTransition } from "react-transition-group";
import fadeAlert from "./Animation/FadeAlert.module.css";
import fadeItems from "./Animation/FadeItems.module.css";

const App = ({
  newContactUnique,
  loadingContacts,
  onResetNewContactUnique,
}) => {
  return (
    <Container>
      {loadingContacts && <h2>Loading...</h2>}
      <MainTitle />
      <ContactForm />

      <CSSTransition
        in={newContactUnique}
        appear
        timeout={300}
        classNames={fadeAlert}
        unmountOnExit>
        <Alert
          newContactUnique={newContactUnique.name}
          timeout={onResetNewContactUnique}
        />
      </CSSTransition>

      <h2 className={styles.containerTitle}>Contacts</h2>

      <Filter />

      <CSSTransition
        in={true}
        timeout={300}
        classNames={fadeItems}
        unmountOnExit>
        <ContactList />
      </CSSTransition>
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  newContactUnique: (PropTypes.bool, PropTypes.object),
};

App.defaultProps = {
  contacts: [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" }],
  newContactUnique: false,
};

export default App;
