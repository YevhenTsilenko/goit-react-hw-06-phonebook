import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './action-types';


const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: '',
  }
}

const filterReducer = (state = INITIAL_STATE.contacts, { type, payload }) => {
  switch (type) {
    case FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

const contactsReducer = (state = INITIAL_STATE.contacts, { type, payload }) => {
  switch (type) {
    case ADD:
      if (state.items.some(({ name }) => name === payload.name)) {
        alert(`${payload.name} is already exists`);
        return {...state};
      }
      return {
        ...state, 
        items: [...state.items, payload]
      };

    case DELETE:
      const itemsAfterDeleteContact = state.items.filter(({ id }) => id !== payload);
      return {
        ...state,
        items: itemsAfterDeleteContact,
      }
       
    default:
      return state;
  }
};

const combineReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export { combineReducer }