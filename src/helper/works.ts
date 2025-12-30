import { serverGet } from "@/lib/apicall";
import { Client, WorkDetail, WorkItemTypes } from "@/utils/workTypes";

export function getClients() {
  return serverGet<Client[]>("/works");
}

export function getClientBySlug(clientSlug: string) {
  return serverGet<Client>(`/works/${clientSlug.toLowerCase()}`);
}

export function getWorkItems(clientSlug: string) {
  return serverGet<WorkItemTypes[]>(
    `/works/${clientSlug.toLowerCase()}/work-items`
  );
}

export function getWorkItemBySlug(clientSlug: string, workItemSlug: string) {
  return serverGet<WorkItemTypes>(
    `/works/${clientSlug.toLowerCase()}/work-items/${workItemSlug.toLowerCase()}`
  );
}

export function getWorkDetails(clientSlug: string, workItemSlug: string) {
  return serverGet<WorkDetail[]>(
    `/works/${clientSlug.toLowerCase()}/work-items/${workItemSlug.toLowerCase()}/work-details/`
  );
}

export function getWorkDetailsById(
  clientSlug: string,
  workItemSlug: string,
  workDetailSlug: string
) {
  return serverGet<WorkDetail>(
    `/works/${clientSlug.toLowerCase()}/work-items/${workItemSlug.toLowerCase()}/work-details/${workDetailSlug.toLowerCase()}`
  );
}
