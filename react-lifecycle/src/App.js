import { useState } from 'react';
import Counter from './components/Counter';
function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Councter Component
      </button>
    </div>
  );
}

export default App;
