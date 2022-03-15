import { ThemeProvider } from './Context/ThemeContext';
import { UserProvier } from './Context/UserContext';
import Container from './Components/Container';

function App() {
  return (
    <ThemeProvider>
      <UserProvier>
        <Container />
      </UserProvier>
    </ThemeProvider>
  );
}

export default App;
