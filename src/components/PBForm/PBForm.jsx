import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import { FormBox, Title, Input, Label, Button, Eror } from "./PBForm.styled";
import { object, string, number } from "yup";

const schema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});

const initialValues = { name: "", number: "" };

export const PBForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormBox>
        <Title>Add contact</Title>

        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name">{(msg) => <Eror>{msg}</Eror>}</ErrorMessage>
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <ErrorMessage name="number">
            {(msg) => <Eror>{msg}</Eror>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Add</Button>
      </FormBox>
    </Formik>
  );
};

PBForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
