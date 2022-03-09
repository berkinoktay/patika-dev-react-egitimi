import { useState } from 'react';
function List({ contacts }) {
  const [filteredText, setFilteredText] = useState('');
  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toString().toLowerCase().includes(filteredText.toLowerCase())
    );
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Kişi arayınız.."
        value={filteredText}
        onChange={(e) => setFilteredText(e.target.value)}
      />
      <h2>Toplam kişi sayısı: {filtered.length}</h2>
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.tamAd}</span>
            <span>{contact.tel}</span>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
