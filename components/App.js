import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState([]);


  const AddContactHandler = (contact) =>{
    console.log(contact);
    setcontacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  useEffect(() => {
    const retreiveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retreiveContact) setcontacts(retreiveContact)
  }, [])

  return (
    <div className='iu container'>
      <Router>
        <Header />

        <Switch>
          <Route path='/' exact component={ () => <ContactList contacts={contacts} getContactId={removeContactHandler} />} 
            /*  render={(props) => {
                <ContactList {...props} path='/' exact contacts={contacts} getContactId={removeContactHandler} />
            }} */ />
          <Route path='/add' exact component={ () => <AddContact AddContactHandler = {AddContactHandler} /> } 
            /*  render={(props) => {
                <AddContact {...props} path='/add' exact AddContactHandler = {AddContactHandler} />
            }} */ />       
        </Switch>

        {/*<AddContact AddContactHandler = {AddContactHandler} /> */}
        {/*<ContactList contacts={contacts} getContactId={removeContactHandler} />*/}
      </Router>   
    </div>
  );
}

export default App;
