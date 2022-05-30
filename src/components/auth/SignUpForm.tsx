import "./SignUpForm.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { signup } from "../../services/api";

type props = {
  // setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUpForm: React.FC<props> = (props) => {
  const initialFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
    loginType: "",
  };
  const [data,setData] = useState(initialFormValues);
  const [submit,setSubmit] = useState<boolean>(false)
  
  const submitData =async ()=>{
    await signup(data)
  }

  useEffect(()=>{
    if(submit){
      //call api
      submitData()
    }
  },[submit])
  
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required!"),
    password: yup
      .string()
      .min(8, "Password should be minimum 8 characters!")
      .max(15, "Password can be maximum 15 characters!")
      .required("Password is required!"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Password and Confirm Password should match!"
      )
      .required("Please confirm your password!"),
  });
  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setData(values)
          setSubmit(true);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={"form"}>
            <div className={"form_header"}>Create an account</div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Your email address</label>
              <Field className={"field_input"} type="email" name="email" />
              <ErrorMessage
                className={"field_error"}
                name="email"
                component="div"
              />
            </div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Your password</label>
              <Field
                className={"field_input"}
                type="password"
                name="password"
              />
              <ErrorMessage
                className={"field_error"}
                name="password"
                component="div"
              />
            </div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>
                Confirm your password
              </label>
              <Field
                className={"field_input"}
                type="password"
                name="confirmPassword"
              />
              <ErrorMessage
                className={"field_error"}
                name="confirmPassword"
                component="div"
              />
            </div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Login Type</label>
              <Field as="select" name="color"  className={"field_input"}>
                <option value="red">User</option>
                <option value="green">Organiser</option>
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? `form_btn-disable` : `form_btn-enable`}
            >
              Create account
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { SignUpForm };
