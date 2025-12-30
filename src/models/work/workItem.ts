import mongoose, { Schema } from "mongoose";

const workItemSchema = new Schema({
  workItemName: String,
  workItemImage: String,
  workItemDescription: String,
  clientIdRef: String,
  workItemSlug: String,
});

const WorkItem =
  mongoose.models.workItems || mongoose.model("workItems", workItemSchema);

export default WorkItem;

// import mongoose, { Schema } from "mongoose";

// const workItemSchema = new Schema({
//   workItemLeftSectionContent: String,
//   workItemRightSectionContent: [
//     {
//       workItemImage: String,
//       workItemDescription: String,
//     },
//   ],
//   clientIdRef: {
//     type: Schema.Types.ObjectId,
//     ref: "Client",
//   },
//   workItemSlug: String,
// });

// const WorkItem =
//   mongoose.models.workItems || mongoose.model("workItems", workItemSchema);

// export default WorkItem;
