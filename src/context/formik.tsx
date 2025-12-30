"use client";

import React, { ReactNode } from "react";
import { useFormik, FormikConfig, FormikProps, FormikValues } from "formik";

/* ----------------------------------
   Context (store unknown safely)
----------------------------------- */
export const FormikContext = React.createContext<unknown>(null);

/* ----------------------------------
   Props
----------------------------------- */
interface CustomFormikProps<Values extends FormikValues>
  extends FormikConfig<Values> {
  children: ReactNode | ((formik: FormikProps<Values>) => ReactNode);
}

/* ----------------------------------
   Provider
----------------------------------- */
export function Formik<Values extends FormikValues>({
  children,
  ...props
}: CustomFormikProps<Values>) {
  const formikStateAndHelpers = useFormik<Values>(props);

  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  );
}
