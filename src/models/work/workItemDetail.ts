import mongoose, { Schema } from "mongoose";

const workItemSchema = new Schema({
  workDetailName: String,
  workDetailImage: String,
  workDetailDoubleSection: Boolean,
  workDetailDescription: String,
  workItemIdRef: String,
  clientIdRef: String,
  workDetailSlug: String,
});

const WorkItemDetail =
  mongoose.models.workItemDetail ||
  mongoose.model("workItemDetail", workItemSchema);

export default WorkItemDetail;

// import mongoose, { Schema } from "mongoose";

// const workItemSchema = new Schema({
//   workDetailLeftSectionContent: String,
//   workDetailRightSectionContentSingle: [
//     {
//       workDetailImage: String,
//       workDetailDescription: String,
//     },
//   ],
//   workDetailRightSectionContentDouble: Boolean,
//   clientIdRef: String,
//   workItemIdRef: String,
//   workDetailIdRef: String,
//   workDetailSlug: String,
// });

// const WorkItemDetail =
//   mongoose.models.workItemDetail ||
//   mongoose.model("workItemDetail", workItemSchema);

// export default WorkItemDetail;
