import { createAction } from '@reduxjs/toolkit'
import shortId from 'shortid';

const addContact = createAction('add', (name, number) => ({
  payload: {
      id: shortId.generate(),
      name,
      number,
  },
}));

const deleteContact = createAction('delete');

const filterContacts = createAction('filter');

export { addContact,  deleteContact, filterContacts };


// const addContact = (name, number) => ({
//       type: ADD,
//       payload: {
//         id: shortId.generate(),
//         name,
//         number,
//       },
//     });
    
// const deleteContact = id => ({
//   type: DELETE,
//   payload: id,
// });
    
// const filter = value => ({
//   type: FILTER,
//   payload: value,
// });

