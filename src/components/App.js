import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactActions from "../redux/contact/contactActions";

import Container from "./Container";
import MainTitle from "./MainTitle/MainTitle";
import Filter from "./Filter/Filter.container";
import ContactForm from "./ContactForm/ContactForm.container";
import ContactList from "./ContactList/ContactList.container";
import Alert from "./Alert/Alert";
import {
  onLoadFromLocalStorage,
  onSafeToLocalStorage,
} from "../utils/localStorage";

import styles from "./Container/Container.module.css";
import { CSSTransition } from "react-transition-group";
import fadeAlert from "./Animation/FadeAlert.module.css";
import fadeItems from "./Animation/FadeItems.module.css";

class App extends Component {
  componentDidMount() {
    const persistedNumber = localStorage.getItem("number");

    if (persistedNumber) {
      onLoadFromLocalStorage();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { state } = this.props;

    if (prevProps !== this.props) {
      onSafeToLocalStorage(state);
    }
  }

  render() {
    const { state } = this.props;

    return (
      <Container>
        <MainTitle />
        <ContactForm />

        <CSSTransition
          in={state.newContactUnique}
          appear
          timeout={300}
          classNames={fadeAlert}
          unmountOnExit>
          <Alert
            newContactUnique={state.newContactUnique.name}
            timeout={this.props.onResetNewContactUnique}
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
  }
}

const mapStateToProps = (state) => ({ state: state });

const mapDispatchToProps = {
  onResetNewContactUnique: contactActions.resetNewContactUnique,
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  newContactUnique: (PropTypes.bool, PropTypes.object),
};

App.defaultProps = {
  contacts: [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" }],
  newContactUnique: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
