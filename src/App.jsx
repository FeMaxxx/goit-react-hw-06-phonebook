import React from "react";

import { PhoneBook } from "components/PhoneBook";
import { PBForm } from "components/PBForm";
import { ContactFilter } from "components/ContactFilter";
import { ContactList } from "components/ContactList";
import { Contacts, Title } from "components/Contacts";

const App = () => {
  return (
    <>
      <PhoneBook title="PhoneBook">
        <PBForm />
        <Contacts>
          <Title>Contacts</Title>
          <ContactFilter />
          <ContactList />
        </Contacts>
      </PhoneBook>
    </>
  );
};

export { App };
