import React from "react";
import { Filter, Label, Title, Input } from "./ContactFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";

export const ContactFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Filter>
      <Label>
        <Title>Filter</Title>
        <Input value={filter} type="text" onChange={handleChangeInput} />
      </Label>
    </Filter>
  );
};
