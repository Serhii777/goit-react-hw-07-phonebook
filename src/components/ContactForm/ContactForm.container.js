import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import contactActions from "../../redux/contacts/contactsActions";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
  onIsNewContactUnique: contactActions.isNewContactUnique,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
