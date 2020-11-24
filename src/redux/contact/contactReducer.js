import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contactActions";

const defaultContactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const onAddContact = (state, action) => {
  return [...state, action.payload.contacts];
};

const onRemoveContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const contactList = createReducer(defaultContactList, {
  [contactActions.addContact]: onAddContact,
  [contactActions.removeContact]: onRemoveContact,
});

const onIsNewContactUnique = (state, action) => action.payload;

const onResetNewContactUnique = (state, action) => {
  return newContactUnique !== false ? (action.payload = false) : action.payload;
};

const newContactUnique = createReducer(false, {
  [contactActions.isNewContactUnique]: onIsNewContactUnique,
  [contactActions.resetNewContactUnique]: onResetNewContactUnique,
});

const onChangeFilter = (state, action) => action.payload;

const filter = createReducer("", {
  [contactActions.changeFilter]: onChangeFilter,
});

export default combineReducers({
  contactList,
  newContactUnique,
  filter,
});

// const initialState = {
//   contacts: {
//     contactList: [],
//     newContactUnique: false,
//     filter: "",
//   },
// };
