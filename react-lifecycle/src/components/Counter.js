import { useState, useEffect } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  //   const [name, setName] = useState('Berkin');
  useEffect(() => {
    // Mount (Oluşturma) anı yani DOM'a html elementlerinin render edilme anını yakalar
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval); // Unmount (Ortadan kaldırma) olduğu anı yakalar ve işlemleri gerçekleştirir
  }, []);

  useEffect(() => {
    console.log('Number state güncellendi');
  }, [number]);

  //   useEffect(() => {
  //     console.log('Name state güncellendi');
  //   }, [name]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Değeri arttır</button>
      <br />
      {/* <h1>{name}</h1>
      <button onClick={() => setName('Rumeysa')}>İsmi değiştir</button> */}
    </div>
  );
}

export default Counter;
