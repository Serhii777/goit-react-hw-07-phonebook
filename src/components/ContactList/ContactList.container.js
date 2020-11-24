import { connect } from "react-redux";
import ContactList from "./ContactList";

const mapStateToProps = (state) => {
  const { contactList, filter } = state;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contactList.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
