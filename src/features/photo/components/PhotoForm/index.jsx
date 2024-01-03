import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

function PhotoForm({ onSubmit }) {
  // npm i --save react-select
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          id="categoryId"
          name="categoryId"
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

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
}

export default PhotoForm;