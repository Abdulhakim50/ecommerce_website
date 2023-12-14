'use client'
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/Ai";

const InputIcon = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center flex-col max-sm:flex-row">
      <div className="relative">
        <AiOutlineSearch
          onClick={handleToggle}
          className="bg-green-700 w-20 h-12 text-white text-sm rounded-sm max-sm:w-10 max-sm:bg-green-800 cursor-pointer transition-all duration-300"
        />
        <input
          type="text"
          className={`border border-green-400 w-[600px] h-12 border-sm max-sm:w-60 max-sm:h-10 max-sm:mt-2 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        />
      </div>
    </div>
  );
};

export default InputIcon;
