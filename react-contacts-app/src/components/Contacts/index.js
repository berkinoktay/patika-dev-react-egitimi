import List from './List';
import Form from './Form';
import { useState, useEffect } from 'react';
import './style.css';
function Contacts() {
  const [contacts, setContacts] = useState([
    { tamAd: 'Berkin oktay', tel: '1231312' },
    { tamAd: 'Ahmet Bilmemne', tel: '412523213' },
    { tamAd: 'Anonim İnsan', tel: '21124421' },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="container">
      <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
