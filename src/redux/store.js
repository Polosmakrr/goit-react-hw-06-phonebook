import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducer';

// const initialState = {
//     contacts: []
// }

// const reducer = (state = {initialState}, action) => {
//     console.log(action);
//     switch (action.type) {
//         case 'ADD_CONTACT':
//             console.log('ADD_CONTACT');
//             console.log(initialState)
//             return {
//                 contacts:  {item:action.payload},
                
//             }
//         case 'DELETE_CONTACT':
//             return console.log('DELETE_CONTACT')
//     }

//     return state;
// };


 const store = configureStore({
     reducer: {contacts:contactsReducer},
})

export default store