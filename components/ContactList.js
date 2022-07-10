import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';


const ContactList = (props) => {
  
      const deleteContactHandler = (id) => {
        props.getContactId(id)
      } ;

      /*
    const contacts = [
      {
        id: "1",
        "name": "Yusuf",
        "email": "yusuflife@gmail.com",
      },
    ]; */

    const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id} />
      )
    })

  return (
    <div className='main'>
        <Link to='/add'>  
          <h2>Registering</h2>
          <button className='ui button blue right'>Add Contact</button>
        </Link>  
      
      <div className='ui celled list'>{renderContactList}</div>
    </div>
  )
}

export default ContactList