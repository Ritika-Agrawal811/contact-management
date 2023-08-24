import ContactCard from "./ContactCard";
import { useAppSelector } from "../../../store/hooks";
import NoDataFound from "../../../components/NoDataFound";

const DisplayContacts = () => {
  const { contacts: contactsArray } = useAppSelector((state) => state.contact);

  return (
    <section
      className={`grid ${
        contactsArray.length !== 0 ? "sm:grid-cols-2 lg:grid-cols-4" : ""
      } gap-8 mt-10 w-11/12 md:w-4/5 lg:w-11/12`}
    >
      {contactsArray.length !== 0 ? (
        contactsArray.map((item) => {
          const { id, firstName, lastName, status } = item;

          return (
            <ContactCard
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              status={status}
            />
          );
        })
      ) : (
        <NoDataFound />
      )}
    </section>
  );
};

export default DisplayContacts;
