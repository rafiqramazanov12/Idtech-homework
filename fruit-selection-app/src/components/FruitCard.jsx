import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFruit } from '../features/fruits/fruitsSlice';
import './FruitCard.scss';


const FruitCard = ({ name }) => {
  const dispatch = useDispatch();
  const selectedFruits = useSelector(state => state.fruits.selectedFruits);
  const isSelected = selectedFruits.includes(name);

  return (
    <div
      className={`fruit-card ${isSelected ? 'selected' : ''}`}
      onClick={() => dispatch(toggleFruit(name))}
    >
      {name}
    </div>
  );
};

export default FruitCard;
