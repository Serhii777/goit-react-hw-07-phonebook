import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/removeError");

const changeFilter = createAction("contacts/changeFilter");
const isNewContactUnique = createAction("contacts/newContactUnique");
const resetNewContactUnique = createAction("contacts/resetNewContactUnique");



export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
  isNewContactUnique,
  resetNewContactUnique,
};
