import { connect } from "react-redux";
import ContactList from "./ContactList";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};

export default connect(mapStateToProps, null)(ContactList);
