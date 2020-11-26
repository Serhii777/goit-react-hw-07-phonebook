import { connect } from "react-redux";
import Filter from "./Filter";
import contactActions from "../../redux/contacts/contactsActions";

const mapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
