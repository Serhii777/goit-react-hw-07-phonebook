import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import contactsActions from "./contactsActions";
import store from "../store";

// axios.defaults.baseURL = "http://localhost:2990";

axios.defaults.baseURL =
  "https://my-json-server.typicode.com/Serhii777/goit-react-hw-07-phonebook";

axios.defaults.headers.post['Content-Type'] = 'application/json';



const getId = () => Date.now();
// const getId = () => {
//   const { contactList } = store.getState().contacts;
// };

const addContact = ({ name, number }) => (dispatch) => {
  // const idUuid = uuidv4();
  const id = getId();
  // getId();

  // console.log(idUuid);
  console.log(id);

  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number, id })
    .then(({ data }) => {
      dispatch(contactsActions.addContactSuccess(data));
      console.log(data);
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

//* const addContact = ({ name, number }) => (dispatch) => {
//   dispatch(contactsActions.addContactRequest());

//   // axios
//   api
//     .post("/contacts", { name, number })
//     .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
//     .catch((error) => dispatch(contactsActions.addContactError(error)));
// };

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());
  console.log(id);
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};
