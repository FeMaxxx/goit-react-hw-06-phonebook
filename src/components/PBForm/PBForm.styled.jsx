import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  background-color: rgba(255, 115, 0, 0.1);
  border: 2px solid rgba(255, 115, 0, 0.8);
  border-radius: 10px;
  width: 200px;
  padding: 10px;
  margin-right: 20px;
  height: fit-content;
  gap: 20px;
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 20px;
`;

export const Input = styled(Field)`
  padding: 5px 10px;
  margin-top: 5px;
  width: 100%;
  cursor: text;

  background: none;
  border: 1px solid rgba(255, 115, 0, 0.8);
  border-radius: 5px;

  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;

  color: rgba(255, 115, 0, 0.6);
  background: none;
  border: 2px solid rgba(255, 115, 0, 0.8);
  border-radius: 10px;

  transition: border-color var(--animation), background var(--animation),
    color var(--animation);

  &:hover,
  &:focus {
    color: rgb(255, 115, 0);
    background: rgba(242, 255, 0, 0.1);
    border-color: rgba(242, 255, 0, 0.8);
  }
`;

export const Eror = styled.p`
  position: absolute;
  font-size: 14px;
  width: 160px;
  text-align: end;

  bottom: 7px;
  left: -200px;
`;
