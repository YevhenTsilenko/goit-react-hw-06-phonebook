import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact,  deleteContact, filterContacts } from './actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, { payload }) => {
      if (state.some(({ name }) => name === payload.name)) {
        alert(`${payload.name} is already exists`);
        return [...state];
      }     
      return [...state, payload]
    },
    [deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const combineReducer = combineReducers({
  items,
  filter,
})

// const INITIAL_STATE = {
//   contacts: {
//     items: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      // ],
//     filter: '',
//   }
// }

// const filterReducer = (state = INITIAL_STATE.contacts, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return {
//         ...state,
//         filter: payload,
//       };

//     default:
//       return state;
//   }
// };

// const contactsReducer = (state = INITIAL_STATE.contacts, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       if (state.items.some(({ name }) => name === payload.name)) {
//         alert(`${payload.name} is already exists`);
//         return {...state};
//       }
//       return {
//         ...state, 
//         items: [...state.items, payload]
//       };

//     case DELETE:
//       const itemsAfterDeleteContact = state.items.filter(({ id }) => id !== payload);
//       return {
//         ...state,
//         items: itemsAfterDeleteContact,
//       }
       
//     default:
//       return state;
//   }
// };

// const combineReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// })

export { combineReducer }