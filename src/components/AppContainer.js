import React, { Component } from "react";
import { connect } from "react-redux";

import App from "./App";
import contactActions from "../redux/contacts/contactsActions";
import contactsOperations from "../redux/contacts/contactsOperations";

class AppContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    newContactUnique: state.contacts.newContactUnique,
    loadingContacts: state.contacts.loading,
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
  onResetNewContactUnique: contactActions.resetNewContactUnique,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
