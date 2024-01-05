import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup, Label } from "reactstrap";

import Images from "constants/images";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";

function PhotoForm({ onSubmit }) {
  const initialValues = {
    title: "",
    category: "",
  };

  return (
    <Formik initialValues={initialValues}>
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

            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="colorful background"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button type="button" color="primary" onClick={onSubmit}>
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
