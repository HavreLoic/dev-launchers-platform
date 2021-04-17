import React from "react";

import { useForm, useField, splitFormProps } from "react-form";

import style from "./InputField.module.css";

export default React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props);

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps
  } = useField(field, fieldOptions);

  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest })} className={style.formInput} />
      <div style={{ fontSize: "1rem" }}>
        {/*
          Let's inline some validation and error information
          for our field
        */}

        {isValidating ? (
          <em>Validating...</em>
        ) : isTouched && error ? (
          <strong>{error}</strong>
        ) : message ? (
          <small>{message}</small>
        ) : null}
      </div>
    </>
  );
});
