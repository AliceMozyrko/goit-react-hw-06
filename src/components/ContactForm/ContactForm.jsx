import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.username, values.number));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("*Required"),
    number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("*Required"),
  });

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.item}>
          <label className={css.inputLabel}>Name</label>
          <Field className={css.inputItem} type="text" name="username" />
          <ErrorMessage className={css.error} name="username" component="span" />
        </div>

        <div className={css.item}>
          <label className={css.inputLabel}>Number</label>
          <Field className={css.inputItem} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
