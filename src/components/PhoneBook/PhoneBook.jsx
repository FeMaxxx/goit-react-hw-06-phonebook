import React from "react";
import PropTypes from "prop-types";
import { PhoneBookBox, Title, Wrap } from "./PhoneBook.styled";

export const PhoneBook = ({ title, children }) => {
  return (
    <PhoneBookBox>
      <Title>{title}</Title>
      <Wrap>{children}</Wrap>
    </PhoneBookBox>
  );
};

PhoneBook.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
