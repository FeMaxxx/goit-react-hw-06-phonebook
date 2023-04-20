import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "redux/contactsSlice";
import { getContacts, getFilter } from "redux/selectors";
import {
  ContactListBox,
  Item,
  Name,
  Number,
  Button,
} from "./ContactList.styled";

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter);
  });
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ContactListBox>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ContactListBox>
  );
};
