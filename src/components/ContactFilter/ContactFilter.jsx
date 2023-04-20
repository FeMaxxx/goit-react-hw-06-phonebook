import React from "react";
import PropTypes from "prop-types";
import { Filter, Label, Title, Input } from "./ContactFilter.styled";

export const ContactFilter = ({ value, onChange }) => {
  return (
    <Filter>
      <Label>
        <Title>Filter</Title>
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Filter>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
