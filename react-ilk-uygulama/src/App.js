import './App.css';
import User from './components/User';

const friends = ['Rumeysa', 'Berkin', 'Uğur', 'Buran'];
function App() {
  return (
    <>
      <h1>Merhaba React!</h1>
      <User
        name="Berkin"
        surName="Oktay"
        // isLoggedIn={true}
        age={21}
        friends={friends}
        address={{
          title: 'Bursa/Osmangazi',
          zip: 16200,
        }}
      />
    </>
  );
}

export default App;
