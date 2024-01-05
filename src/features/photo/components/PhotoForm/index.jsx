import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";

import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";

function PhotoForm() {
  const initialValues = {
    title: "",
    category: null,
    photo: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),

    category: Yup.number().required("This field is required."),

    // photo: Yup.string().when("categoryId", {
    //   is: 1,
    //   then: Yup.string().required("This field is required."),
    //   otherwise: Yup.string().notRequired(),
    // }),
    photo: Yup.string().required("This field is required."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(formikProps) => {
        return (
          <Form>
            <FastField
              // Props của FastField
              name="title"
              component={InputField}
              // Props truyền vào InputField
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              // Props của FastField
              name="category"
              component={SelectField}
              // Props truyền vào InputField
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              // Props của FastField
              name="photo"
              component={RandomPhotoField}
              // Props truyền vào InputField
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
