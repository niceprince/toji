import React from "react";
import Image from "next/image";
import { WorkItem } from "@/utils/types";
import { WorkDetail, WorkItemTypes } from "@/utils/workTypes";

const SingleContentContainer: React.FC<{
  workItemData: WorkItemTypes;
  workDetails: WorkDetail[];
}> = ({ workItemData, workDetails }) => {
  return (
    <div>
      <div className="italic-text text-xl mb-2">
        {workItemData.workItemName}
      </div>
      <div className="gap-4">
        {workDetails.map((item, index) => (
          <div key={index}>
            <Image
              src={item.workDetailImage}
              alt={item.workDetailName}
              width={100}
              height={50}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="py-3">{item.workDetailName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleContentContainer;
