import { Schema } from "mongoose";

export const schemaWorkItem = new Schema({
  workImage: String,
  workHeadingText: String,
  workItemNameSlug: String,
});
