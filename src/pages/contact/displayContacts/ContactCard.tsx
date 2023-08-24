import { useState } from "react";
import Button from "../../../components/UI/Button";
import { useAppDispatch } from "../../../store/hooks";
import { deleteContact } from "../../../features/contactSlice";
import { useNavigate } from "react-router-dom";

type ContactCardProps = {
  id: number;
  firstName: string;
  lastName?: string;
  status: boolean;
};

const ContactCard = ({ id, firstName, lastName, status }: ContactCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <article className="bg-white rounded-2xl flex flex-col items-center justify-center p-4 m-4 shadow-md transition-all">
      <figure className="w-20 h-20 md:w-28 md:h-28">
        <img
          src="/user-profile.png"
          alt={`profile icon of ${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <h3 className="mt-4 text-xl font-medium">
        {firstName} {lastName}
      </h3>
      <p
        className={`text-lg mt-2 font-medium transition-all duration-75  ${
          !showDetails ? "hidden" : ""
        }`}
      >
        Status:
        <span className={status ? "text-green-600" : "text-red-600"}>
          {status ? " Active" : " Inactive"}
        </span>
      </p>
      <Button
        title={showDetails ? "Hide" : "View"}
        className="w-full mt-6"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      />
      <div className="flex gap-2 w-full mt-2">
        <Button
          title="Edit"
          className="w-1/2"
          bgColor="bg-green-800 hover:bg-green-600"
          onClick={() => navigate(`edit/${id}`)}
        />

        <Button
          title="Delete"
          className="w-1/2"
          bgColor="bg-red-700 hover:bg-red-500"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        />
      </div>
    </article>
  );
};

export default ContactCard;
