import mongoose, { Schema } from "mongoose";

const workSchema = new Schema({
  clientName: String,
  clientImage: String,
  clientDescriptionText: String,
  clientSlug: String,
});

const Client = mongoose.models.clients || mongoose.model("clients", workSchema);

export default Client;
