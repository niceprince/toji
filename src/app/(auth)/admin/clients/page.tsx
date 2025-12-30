import React from "react";
import AddClientForm from "./AddClientForm";
import ClientList from "./ClientList";
import WorkTab from "../../admin-components/WorkTabs";

const Clients: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Clients</h1>

      {/* <ViewClients clients={getClients} /> */}
      <WorkTab
        tabs={[
          {
            key: "clients",
            label: "Clients",
            content: <ClientList />,
          },
          {
            key: "create",
            label: "Create Client",
            content: <AddClientForm />,
          },
        ]}
      />
    </>
  );
};

export default Clients;
