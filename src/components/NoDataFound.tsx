const NoDataFound = () => {
  return (
    <section className="mx-auto w-full md:w-3/4 lg:w-1/2 flex flex-col items-center mt-10">
      <figure className="w-40 ml-6">
        <img src="/no-data.jpg" alt="no data found" />
      </figure>
      <p className="text-red-600 font-medium md:text-lg text-center">
        <span className="text-xl md:text-2xl font-bold">
          No Contacts Found.
        </span>
        <br />
        Kindly use "Create Contact" Button to add new contacts.
      </p>
    </section>
  );
};

export default NoDataFound;
