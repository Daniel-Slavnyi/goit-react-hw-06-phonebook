import React from 'react';
import { Label, Input, Span } from './Filter.styled';

import { getFilter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const togleFilter = e => {
    dispatch(getFilter(e.target.value));
  };
  return (
    <Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={togleFilter}
        value={filter}
        placeholder=" "
      />
      <Span>Name</Span>
    </Label>
  );
}
