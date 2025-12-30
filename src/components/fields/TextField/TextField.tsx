"use client";

import React from "react";
import { ErrorMessage, Field, useField } from "formik";

/* ----------------------------------
   Props
----------------------------------- */
interface TextFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  id?: string;
}

/* ----------------------------------
   Component
----------------------------------- */
const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.id || props.name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <Field
        {...field}
        {...props}
        className="rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {meta.touched && meta.error && (
        // <p className="text-sm text-red-500">{meta.error}</p>
        <ErrorMessage
          name={props.id || props.name}
          component="p"
          className="text-sm text-red-500 mt-1"
        />
      )}
    </div>
  );
};

export default TextField;
