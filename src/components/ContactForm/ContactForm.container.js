import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import contactActions from "../../redux/contact/contactActions";

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  onAddContact: contactActions.addContact,
  onIsNewContactUnique: contactActions.isNewContactUnique,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
