import React from 'react';
import './style.css';

export default function App() {
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    // add item
    // const newList = list.concat({ name });
    //operateur de diffusion
    setList([...list, name]);
    setName('');
  }
  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Collaborateur GS
      </h1>
      <input id="search" type="text" onChange={handleChange} />
      <button onClick={handleAdd}>AJOUT</button>

      {/* parcours de la boucle */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
