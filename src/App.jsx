import React, { useState, useEffect } from "react";
import shortid from "shortid";

import { PhoneBook } from "components/PhoneBook";
import { PBForm } from "components/PBForm";
import { ContactFilter } from "components/ContactFilter";
import { ContactList } from "components/ContactList";
import { Contacts, Title } from "components/Contacts";

const App = () => {
  const parseContacts = JSON.parse(localStorage.getItem("localContacts"));

  const [contacts, setContacts] = useState(parseContacts ?? []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("localContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const haveContact = contacts.some((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (haveContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts((prevState) => [newContact, ...prevState]);
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase();

    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalized);
    });
  };

  const deleteContact = (ContactId) => {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== ContactId);
    });
  };

  return (
    <>
      <PhoneBook title="PhoneBook">
        <PBForm onSubmit={addContact} />
        <Contacts>
          <Title>Contacts</Title>
          <ContactFilter onChange={changeFilter} value={filter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Contacts>
      </PhoneBook>
    </>
  );
};

export { App };
