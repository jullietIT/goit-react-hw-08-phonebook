import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../redux/filtersSlice';
import { nanoid } from 'nanoid';
import { getFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);
  const filterId = nanoid(3);

  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value)); //передаємо значення у фільтрі
  };
  return (
    <div className={css.div} htmlFor={filterId}>
      <h2 className={css.h2}>Your contacts</h2>
      <h3 className={css.h3}>Find contact by name</h3>
      <label>
        <input
          type="text"
          id={filterId}
          value={filters}
          placeholder="enter contact name"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
