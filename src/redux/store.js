import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactReducer";
import { onLoadFromLocalStorage } from "../utils/localStorage";

const persistedState = onLoadFromLocalStorage() || {};

const store = createStore(
  contactReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
