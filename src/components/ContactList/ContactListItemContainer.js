import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mapStateToProps = (state, ownProps) => {
  const contactListItem = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...contactListItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
