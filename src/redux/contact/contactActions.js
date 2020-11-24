import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contact/addContact", (name) => ({
  payload: {
    contacts: {
      id: uuidv4(),
      name: name.name,
      number: name.number,
    },
  },
}));

const removeContact = createAction("contact/removeContact");
const changeFilter = createAction("contact/changeFilter");
const isNewContactUnique = createAction("contact/resetNewContactUnique");
const resetNewContactUnique = createAction("contact/isNewContactUnique");

export default {
  addContact,
  removeContact,
  changeFilter,
  isNewContactUnique,
  resetNewContactUnique,
};
