import { useState, useRef, useEffect } from "react";
import Header from "../../../components/UI/Header";
import Button from "../../../components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { editContact } from "../../../features/contactSlice";

type Contact = {
  id: number;
  firstName: string;
  lastName?: string;
  status: boolean;
};

const EditContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState(true);

  // first name input ref
  const firstNameRef = useRef<HTMLInputElement>(null);

  // gets contacts array from store
  const { contacts: contactsArray } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // focuses the first name input
    firstNameRef.current?.focus();
  }, []);

  useEffect(() => {
    // fills up the form with details of contact to be editted
    const { firstName, lastName, status } =
      contactsArray.find((item) => item.id === Number(id)) || {};

    setFirstName(firstName || "");
    setLastName(lastName || "");
    setStatus(status || true);
  }, [id, contactsArray]);

  // updates the store with new data
  const updateContactHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const editedContactObj: Contact = {
      id: Number(id),
      firstName,
      lastName,
      status,
    };

    dispatch(editContact(editedContactObj));
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center w-full bg-blue-50 ">
      <Header title="Contacts Page" />
      <section className="md:bg-white w-full md:w-3/4 lg:w-8/12 p-4 md:py-6 md:pt-10 rounded-md md:shadow">
        <h2 className=" text-2xl md:text-3xl font-bold text-purple-500 text-center">
          Edit Contact Form
        </h2>
        <form className="w-full mt-8 md:my-12 flex flex-col md:px-8 lg:px-16">
          <label
            htmlFor="firstName"
            className="text-lg md:text-xl mb-2 text-blue-900 font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            required
            value={firstName}
            ref={firstNameRef}
            className="md:bg-gray-100 p-2 rounded mb-6"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label
            htmlFor="lastName"
            className="text-lg md:text-xl mb-2 text-blue-900 font-medium"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            className="md:bg-gray-100 p-2 rounded mb-6"
            onChange={(e) => setLastName(e.target.value)}
          />
          <fieldset>
            <legend className="text-lg md:text-xl mb-2 text-blue-900 font-medium">
              Status
            </legend>
            <input
              type="radio"
              id="radioActive"
              name="status"
              checked={status}
              onChange={() => setStatus(true)}
            />
            <label
              htmlFor="radioActive"
              className="mx-2 font-medium  md:text-lg"
            >
              Active
            </label>
            <input
              type="radio"
              id="radioInactive"
              name="status"
              className="ml-4"
              checked={!status}
              onChange={() => setStatus(false)}
            />
            <label
              htmlFor="radioInactive"
              className="mx-2 font-medium  md:text-lg"
            >
              Inactive
            </label>
          </fieldset>

          <div className="mt-8 flex gap-4">
            <Button title="Edit Contact" onClick={updateContactHandler} />
            <Button
              title="Cancel"
              bgColor="bg-gray-500 hover:bg-gray-400"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditContact;
