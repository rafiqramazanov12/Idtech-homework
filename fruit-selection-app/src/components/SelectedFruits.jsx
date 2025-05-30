import React from 'react';
import { useSelector } from 'react-redux';
import './SelectedFruits.scss';


const SelectedFruits = () => {
  const selected = useSelector(state => state.fruits.selectedFruits);

  return (
    <div className='fruit_card'>
      <h3 className='fruit_card_title'>Seçilmiş Meyvələr</h3>
      {selected.length === 0 ? (
        <p className='fruit_card_note'>Heç bir meyvə seçilməyib</p>
      ) : (
        <div>
          {selected.map(fruit => <div className='fruit_card_selected' key={fruit}>{fruit}</div>)}
        </div>
      )}
    </div>
  );
};

export default SelectedFruits;
