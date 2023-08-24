import { useState, useRef, useEffect } from "react";
import Header from "../../../components/UI/Header";
import Button from "../../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addContact } from "../../../features/contactSlice";

type Contact = {
  id: number;
  firstName: string;
  lastName?: string;
  status: boolean;
};

const CreateContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState(true);

  // gets contacts array from store
  const { contacts: contactsArray } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const firstNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focuses first name input
    firstNameRef.current?.focus();
  }, []);

  // generates a new ID for contact object
  const getID = (): number => {
    const id = contactsArray[contactsArray.length - 1]?.id + 1 || 1;
    return id;
  };

  // saves the contact object to the store
  const saveContactHandler = (event: React.MouseEvent): void => {
    event.preventDefault();
    const id = getID();
    const contactObj: Contact = {
      id,
      firstName,
      lastName,
      status,
    };

    dispatch(addContact(contactObj));
    setFirstName("");
    setLastName("");
    setStatus(true);
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center w-full bg-blue-50 ">
      <Header title="Contacts Page" />
      <section className="md:bg-white w-full md:w-3/4 lg:w-8/12 p-4 md:py-6 md:pt-10 rounded-md md:shadow">
        <h2 className=" text-2xl md:text-3xl font-bold text-purple-500 text-center">
          Create Contact Form
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
            <Button title="Save Contact" onClick={saveContactHandler} />
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

export default CreateContact;
