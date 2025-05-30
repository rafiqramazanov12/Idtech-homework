// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, deleteAll } from './features/fruits/fruitsSlice';
import FruitCard from './components/FruitCard.jsx';
import SelectedFruits from './components/SelectedFruits.jsx';

const App = () => {
  const fruits = useSelector(state => state.fruits.allFruits);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ marginRight: '50px' }}>
        <h2>Meyvə Kartları</h2>
        <button onClick={() => dispatch(selectAll())}>Select All</button>
        <button onClick={() => dispatch(deleteAll())} style={{ marginLeft: '10px' }}>
          Delete All
        </button>
        {fruits.map(fruit => (
          <FruitCard key={fruit} name={fruit} />
        ))}
      </div>

      <div>
        <SelectedFruits />
      </div>
    </div>
  );
};

export default App;
