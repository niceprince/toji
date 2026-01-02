"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAxios } from "@/hooks/useAxios";
import { toast } from "react-toastify";
import ImageUpload from "@/components/common/ImageUpload";
import { AddWorkItemFormValues } from "@/utils/types";
import TipTapEditor from "@/components/common/TiptapEditor";

const workItemSchema = Yup.object({
  workItemName: Yup.string().required("Required"),
  workItemImage: Yup.string().url("Invalid image URL").required("Required"),
  workItemDescription: Yup.string().min(5).required("Required"),
  clientIdRef: Yup.string(),
  workItemSlug: Yup.string()
    .matches(/^[a-z0-9-]+$/, "Slug must be lowercase & hyphen-separated")
    .required("Slug is required"),
});

const AddWorkItem: React.FC<{ clientId: string }> = ({ clientId }) => {
  const { post, loading } = useAxios();

  const initialValues: AddWorkItemFormValues = {
    workItemName: "",
    workItemImage: "",
    workItemDescription: "",
    clientIdRef: clientId,
    workItemSlug: "",
  };

  const handleSubmit = async (
    values: AddWorkItemFormValues,
    { resetForm }: FormikHelpers<AddWorkItemFormValues>
  ) => {
    const addedWork = await post(`/works/${clientId}/work-items`, values);
    resetForm();
    toast.success("New client is added!");
    return addedWork;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add New Work item
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={workItemSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values, errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work item name
              </label>
              <Field
                name="workItemName"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="workItemName"
                component="p"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work item image
              </label>
              <div className="flex">
                <div className="flex-1">
                  <Field
                    name={`workItemImage`}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    disabled={true}
                  />
                  <ErrorMessage
                    name={`workItemImage`}
                    component="p"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <div className="mt-1">
                  <ImageUpload
                    onSuccess={(url) => setFieldValue(`workItemImage`, url)}
                  />
                </div>

                {/* Preview */}
                {values.workItemImage && (
                  <div className="mt-1">
                    <img
                      src={values.workItemImage}
                      alt="Preview"
                      className="h-10 rounded-lg object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work item (left section description)
              </label>
              <TipTapEditor
                value={values.workItemDescription}
                onChange={(val) => setFieldValue("workItemDescription", val)}
                error={errors.workItemDescription}
                touched={touched.workItemDescription}
              />
              {/* <Field
                as="textarea"
                name="workItemDescription"
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="workItemDescription"
                component="p"
                className="text-sm text-red-500 mt-1"
              /> */}
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work item path name
              </label>
              <Field
                name="workItemSlug"
                placeholder="example-work-item"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="workItemSlug"
                component="p"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <Field type="hidden" name="clientIdRef" />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-3 cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Save Client"}
            </button>
            <button
              type="button"
              disabled={false}
              className="p-3 ml-4 cursor-pointer bg-red-800 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {"Clear"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddWorkItem;
