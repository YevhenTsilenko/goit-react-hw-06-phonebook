import shortId from 'shortid';
import { ADD, DELETE, FILTER } from './action-types';

const addContact = (name, number) => ({
      type: ADD,
      payload: {
        id: shortId.generate(),
        name,
        number,
      },
    });
    
const deleteContact = id => ({
  type: DELETE,
  payload: id,
});
    
const filter = value => ({
  type: FILTER,
  payload: value,
});

export { addContact,  deleteContact, filter};