"use client";
import React, { useEffect, useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import ClientCard from "../../admin-components/clientsWork/ClientCard";
import { ClientType } from "@/utils/workTypes";
import BackButton from "@/components/common/BackButton";
import Modal from "../../admin-components/Modal";
import { DeleteResponse } from "@/utils/types";
import ClientEditForm from "./ClientEditForm";
import { clientInitialValues } from "@/data/static";

const ClientList: React.FC = () => {
  const { get, del, loading } = useAxios();
  const [clients, setClients] = useState<ClientType[]>([]);
  const [formIntialValue, setFormInitialValue] =
    useState<Omit<ClientType, "_id">>(clientInitialValues);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const workData = await get<ClientType[]>("/works");
        setClients(workData);
        console.log("Clients fetched:", workData);
      } catch (error) {
        console.error("Failed to fetch clients", error);
      }
    };

    fetchClients();
  }, []);

  const handleEdit = (client: Omit<ClientType, "_id">) => {
    setFormInitialValue(client);
    setOpen(true);
  };

  const handleDelete = async (slug: string) => {
    const deletedRes = await del<DeleteResponse>(`/works/${slug}`);

    if (deletedRes?.success) {
      setClients((prevClient) =>
        prevClient.filter((client) => client.clientSlug !== slug)
      );
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!clients.length) {
    return <p className="text-center text-gray-500">No clients found</p>;
  }

  return (
    <div>
      {clients.map((client) => (
        <ClientCard
          key={client._id}
          client={client}
          onEdit={(client) => handleEdit(client)}
          onDelete={(slug) => handleDelete(slug)}
        />
      ))}
      <BackButton />

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="This is My modal for edit form..."
      >
        <ClientEditForm
          initialValues={formIntialValue}
          modalClose={() => setOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ClientList;
