import React, { useState, useEffect } from 'react';
import FormInput from './components/FormInput/FormInput';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import './App.css';
import { connect } from 'react-redux';

// const useLocalStorage = (key, defaultValue)=>{
//   const [state, setState] = useState(() => {
//     return (JSON.parse(window.localStorage.getItem(key))) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

const App=(contacts)=> {
  // const [contacts, setContacts] = useLocalStorage('contacts',[]);
  // const [filter, setFilter] = useState('');
  
  // const formSubmitHandler = data => {
  //   const contact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  
  //   setContacts(contacts => {
  //     return [contact, ...contacts]
  //   });
  // }

  // const removeContact = id => {
  //   setContacts(contact => contact.filter(cont=>cont.id !== id)
  // );
  // };

  //   const changeFilter = filterValue => {
  //     setFilter(filterValue);

  //   };
  
  //    const getFilteredContacts = () =>{
       
  //        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // };
  // console.log('CC',contacts.contacts.length);

   return (
      <>
        <h1>Phone Book</h1>
        <FormInput />
        <h2>Contacts</h2>
       {contacts.contacts.length >= 1 &&
         <Filter/>}
       <ContactsList />
      </>
    );
}

const mapStateToProps = (state) => ({
  contacts:state.contacts.items,
});



export default connect(mapStateToProps)(App)

// export default App