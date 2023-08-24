import React from "react";

type ButtonProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  bgColor?: string;
};

const Button = ({ title, onClick, className, bgColor }: ButtonProps) => {
  // sets default background color of button to purple
  const backgroundColor = bgColor || "bg-purple-900 hover:bg-purple-700";

  return (
    <button
      className={`text-white px-6 py-2 md:text-xl rounded-md duration-150 ${
        className ? className : ""
      } ${backgroundColor}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
