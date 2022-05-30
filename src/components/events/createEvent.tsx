import "./SignUpForm.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { addEvent } from "../../services/api";

type props = {
  // setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateEvent: React.FC<props> = (props) => {
  const initialFormValues = {
    title: "",
    description: "",
    eventType: "",
    timing: {
      start: "",
      end: "",
    },
    amount: 0,
  };

  const [data, setData] = useState(initialFormValues);
  const [submit, setSubmit] = useState<boolean>(false);

  const submitData =async ()=>{
    await addEvent(data)
  }

  useEffect(()=>{
    if(submit){
      //call api
      submitData()
    }
  },[submit])

  const schema = yup.object().shape({
    title: yup.string().required("Title is required!"),
    description: yup
      .string()
      .min(8, "Description should be minimum 8 characters!")
      .max(15, "Description can be maximum 15 characters!")
      .required("Description is required!"),
    eventType: yup.mixed().oneOf(["free", "paid"]),
    timing: yup.object().shape({
      start: yup.date().required("Start date is required!").min(new Date()),
      end: yup.date().min(new Date()).required("End date is required!"),
    }),
    amount: yup
      .number()
      .when("eventType", { is: "paid", then: yup.number().required() }),
  });
  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setData(values);
          setSubmit(true);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={"form"}>
            <div className={"form_header"}>Create Event</div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Title</label>
              <Field className={"field_input"} type="string" name="title" />
              <ErrorMessage
                className={"field_error"}
                name="title"
                component="div"
              />
            </div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Description</label>
              <Field
                className={"field_input"}
                type="string"
                name="description"
              />
              <ErrorMessage
                className={"field_error"}
                name="description"
                component="div"
              />
            </div>
            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Description</label>
              <Field
                as="select"
                className={"field_input"}
                type="string"
                name="eventType"
              >
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </Field>
              <ErrorMessage
                className={"field_error"}
                name="eventType"
                component="div"
              />
            </div>

            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Timings</label>
              <Form name="timing">
                <Field type="date" name="start" className={"field_input"} />
                <Field type="date" name="end" className={"field_input"} />
              </Form>
            </div>

            <div className={`field_container-column`}>
              <label className={`field_label-opaque`}>Amount</label>
              <Field
                className={"field_input"}
                type="number"
                name="amount"
              />
              <ErrorMessage
                className={"field_error"}
                name="amount"
                component="div"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? `form_btn-disable` : `form_btn-enable`}
            >
              Create Event
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { CreateEvent };
