import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { FormBox, Title, Input, Label, Button, Eror } from "./PBForm.styled";
import { object, string, number } from "yup";
import { addContact } from "redux/contactsSlice";
import shortid from "shortid";
import { getContacts } from "redux/selectors";

const schema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});

const initialValues = { name: "", number: "" };

export const PBForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

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

    dispatch(addContact(newContact));

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
