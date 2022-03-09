import { useState } from 'react';
function App() {
  const [name, setName] = useState('Berkin');
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(['Berkin', 'Rumeysa']);
  const [address, setAddress] = useState({
    sehir: 'Bursa',
    ilce: 'Osmangazi',
    zip: '16200',
  });
  return (
    <div>
      <h1> Merhaba {name}</h1>
      <h2>Yaşın {age}</h2>
      <button onClick={() => setName('Rumeysa')}>İsmi değiştir</button>
      <button onClick={() => setAge(22)}>Yaşı değiştir</button>
      <br />
      <hr />
      <br />
      <h3>Arkadaşlar</h3>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, ['Ahmet']])}>
        Arkadaş ekle
      </button>
      <br />
      <h3>Adres</h3>
      {address.sehir} {address.ilce} {address.zip}
      <br />
      <br />
      <button
        onClick={() =>
          setAddress({ ...address, ilce: 'Nilüfer', zip: '13425' })
        }
      >
        Adresi değiştir
      </button>
    </div>
  );
}

export default App;
