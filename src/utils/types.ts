import { ReactNode } from "react";

export type PageContainerProps = {
  LeftContents: ReactNode;
  RightcontentItems: ReactNode;
};

export type WorkItem = {
  imagePath: string;
  itemName: string;
};

export type WorkItemsProps = {
  workItems: WorkItem[];
  pageLink: string;
};

export type UserParams = {
  userId: string;
};

export type ClientParams = {
  clientId: string;
};

export type WorkItemParams = {
  clientId: string;
  workItemId: string;
};

export type WorkItemDetailParams = {
  clientId: string;
  workItemId: string;
  workDetailId: string;
};

export type ClientWorkItem = {
  workItemImage: string;
  workItemDescription: string;
};

export interface AddWorkItemFormValues {
  workItemName: string;
  workItemImage: string;
  workItemDescription: string;
  clientIdRef: string;
  workItemSlug: string;
}

export interface AddWorkDetailFormValues {
  workDetailName: string;
  workDetailImage: string;
  workDetailDoubleSection: boolean;
  workDetailDescription: string;
  workItemIdRef: string;
  clientIdRef: string;
  workDetailSlug: string;
}
