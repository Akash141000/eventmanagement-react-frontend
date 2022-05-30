import  "./SignUpForm.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { login } from "../../services/api";
import { useAppDispatch } from "../../store/redux";
import { actions } from "../../store/reducer";

type props = {
  // setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm: React.FC<props> = (props) => {
  const dispatch = useAppDispatch();
  
  const initialFormValues = {
    email: "",
    password: "",
    loginType:"user",
  };

  const [data,setData] = useState(initialFormValues);
  const [submit,setSubmit] = useState<boolean>(false)

  const submitData =async ()=>{
  const response =  await login(data)
  dispatch(actions.addToken(response.data.response))

}

  useEffect(()=>{
    if(submit){
      //call api
      dispatch(actions.addAuthType(data.loginType))
      dispatch(actions.addUser(data.email))
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
    loginType: yup.mixed().oneOf(['user','organiser'])
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
            <div className={"form_header"}>Login</div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>
                Your email address
              </label>
              <Field className={"field_input"} type="email" name="email" />
              <ErrorMessage
                className={"field_error"}
                name="email"
                component="div"
              />
            </div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>
                Your password
              </label>
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
              <label className={`field_label-opaque`}>Login Type</label>
              <Field as="select" name="loginType"  className={"field_input"}>
                <option value="user">User</option>
                <option value="organiser">Organiser</option>
              </Field>
            </div>
           

            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting
                  ? `form_btn-disable`
                  : `form_btn-enable`
              }
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { LoginForm };
