import React from "react";
import { Filter, Label, Title, Input } from "./ContactFilter.styled";
import { useDispatch } from "react-redux";
import { filterContacts } from "redux/contactsSlice";

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Filter>
      <Label>
        <Title>Filter</Title>
        <Input type="text" onChange={handleChangeInput} />
      </Label>
    </Filter>
  );
};
