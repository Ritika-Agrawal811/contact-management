import React from "react";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-white w-full mb-8 p-4 text-2xl font-bold text-gray-900 shadow">
      {title}
    </header>
  );
};

export default Header;
