import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const [contacts,setcontacts]= useState([]);

 const addContactHandler = (contact) =>{
  console.log(contact);
  setcontacts([...contacts,contact]);
 }
   return (
    <div className="ui conatiner">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;

