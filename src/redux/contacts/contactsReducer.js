import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const defaultContactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const contactList = createReducer(defaultContactList, {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const resetContactUnique = (state, action) => {
  return newContactUnique !== false ? (action.payload = false) : action.payload;
};

const contactUnique = (state, action) => action.payload;

const newContactUnique = createReducer(false, {
  [contactsActions.isNewContactUnique]: contactUnique,
  [contactsActions.resetNewContactUnique]: resetContactUnique,
});

const isChangeFilter = (state, action) => action.payload;

const filter = createReducer("", {
  [contactsActions.changeFilter]: isChangeFilter,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  contactList,
  newContactUnique,
  filter,
  loading,
});

// const initialState = {
//   contacts: {
//     contactList: [],
//     newContactUnique: false,
//     filter: "",
//   },
// };
