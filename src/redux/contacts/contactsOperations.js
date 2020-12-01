import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import contactsActions from "./contactsActions";

axios.defaults.baseURL =
  "https://my-json-server.typicode.com/Serhii777/goit-react-hw-07-phonebook";

axios.defaults.headers.post["Content-Type"] = "application/json";

const baseURL =
  "https://my-json-server.typicode.com/Serhii777/goit-react-hw-07-phonebook";

const addContact = ({ name, number }) => (dispatch) => {
  const id = uuidv4();

  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number, id })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

//! Через fetch
const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());
  
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  fetch(`${baseURL}/contacts/${id}`, options)
  .then((response) => response.json())
  .then(() => dispatch(contactsActions.removeContactSuccess(id)))
  .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

// const removeContact = (id) => (dispatch) => {
//   dispatch(contactsActions.removeContactRequest());
//   axios
//     .delete(`/contacts/${id}`, )
//     .then(() => dispatch(contactsActions.removeContactSuccess(id)))
//     .catch((error) => dispatch(contactsActions.removeContactError(error)));
// };

export default {
  addContact,
  fetchContacts,
  removeContact,
};
