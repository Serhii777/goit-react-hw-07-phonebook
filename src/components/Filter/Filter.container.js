import { connect } from "react-redux";
import Filter from "./Filter";
import contactActions from "../../redux/contact/contactActions";

const mapStateToProps = (state) => ({
  contacts: state.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
