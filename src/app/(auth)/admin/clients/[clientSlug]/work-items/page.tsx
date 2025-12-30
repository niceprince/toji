import React from "react";

import WorkTab from "@/app/(auth)/admin-components/WorkTabs";
import WorkItemList from "./WorkItemList";
import AddWorkItem from "./AddWorkItem";
import { toTitleCase } from "@/helper/common-logic";

const WorkItems = async ({
  params,
}: {
  params: Promise<{ clientSlug: string }>;
}) => {
  const { clientSlug } = await params;

  return (
    <>
      <h1 className="text-3xl text-black pb-6">
        {toTitleCase(clientSlug)} {" >> "} Works
      </h1>

      <WorkTab
        tabs={[
          {
            key: "WorkItemList",
            label: "Work Item List",
            content: <WorkItemList clientId={clientSlug} />,
          },
          {
            key: "AddWorkItem",
            label: "Add Work Item",
            content: <AddWorkItem clientId={clientSlug} />,
          },
        ]}
      />
    </>
  );
};

export default WorkItems;
