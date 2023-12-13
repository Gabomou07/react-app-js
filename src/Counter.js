import { useState, useEffect } from 'react';
//Hooks
//Use state
export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        Definir
      </button>
    </div>
  );
}

export const Save = () => {
  const [mensaje, setMensaje] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('render');
  }, [counter]);

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert('el mensaje es:' + mensaje);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};
