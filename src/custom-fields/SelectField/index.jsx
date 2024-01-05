import React from "react";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

function SelectField({ field, form, label, placeholder, options }) {
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : "";

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        name={name}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectField;
