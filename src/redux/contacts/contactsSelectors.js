import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.contactList;
const getFilter = (state) => state.contacts.filter;
const getLoading = (state) => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find((contact) => contact.id === contactId)
);

export default {
  getContacts,
  getFilter,
  getLoading,
  getVisibleContacts,
  getContactById,
};
