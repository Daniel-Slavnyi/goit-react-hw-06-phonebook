import React from 'react';
import { UlList, Button, Item } from './ContactList.styled';

import { deleteUser } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);

  const filteredContacts = contacts.filter(obj =>
    obj.name.toLowerCase().trim().includes(filter)
  );
  return (
    <UlList>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteUser(id));
            }}
          ></Button>
        </Item>
      ))}
    </UlList>
  );
}
