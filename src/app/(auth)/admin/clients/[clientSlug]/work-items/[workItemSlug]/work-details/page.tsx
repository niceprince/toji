import WorkTab from "@/app/(auth)/admin-components/WorkTabs";
import React from "react";
import WorkDetailList from "./WorkDetailList";
import AddWorkDetails from "./AddWorkDetails";
import { toTitleCase } from "@/helper/common-logic";

const WorkDetails = async ({
  params,
}: {
  params: Promise<{ clientSlug: string; workItemSlug: string }>;
}) => {
  const { clientSlug, workItemSlug } = await params;

  return (
    <>
      <h1 className="text-3xl text-black pb-6">
        {toTitleCase(clientSlug)} {">>"} {toTitleCase(workItemSlug)} {">>"} Work
        Details
      </h1>

      <WorkTab
        tabs={[
          {
            key: "WorkDetailList",
            label: "Work Details List",
            content: (
              <WorkDetailList
                clientId={workItemSlug}
                workItemId={workItemSlug}
              />
            ),
          },
          {
            key: "AddWorkDetail",
            label: "Add Work Detail",
            content: (
              <AddWorkDetails clientId={clientSlug} workItemId={workItemSlug} />
            ),
          },
        ]}
      />
    </>
  );
};

export default WorkDetails;
