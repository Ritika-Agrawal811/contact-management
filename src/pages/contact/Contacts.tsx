import React from "react";
import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";
import { useNavigate } from "react-router-dom";
import DisplayContacts from "./displayContacts/DisplayContacts";

const Contacts = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center w-full bg-blue-50 flex-grow">
      <Header title="Contacts Page" />
      <section>
        <Button title="Create Contact" onClick={() => navigate("/create")} />
      </section>
      <DisplayContacts />
    </main>
  );
};

export default Contacts;
