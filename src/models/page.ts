import mongoose, { Schema } from "mongoose";
import { schemaWorkItem } from "./commonSchema";

const PagesSchema = new Schema({
  pageName: String,
  pageNameSlug: String,
  pageSectionLeft: String,
  pageSectionRightHtml: String,
  pageSectionRightItems: [schemaWorkItem],
});

export const Page =
  mongoose.models.pages || mongoose.model("pages", PagesSchema);
