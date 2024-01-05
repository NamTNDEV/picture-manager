import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField({ form, field, label, placeholder }) {
  const { name, values, onChange, onBlur } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        name={name}
        value={values}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FormGroup>
  );
}

export default InputField;
