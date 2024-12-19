import { FaFilter } from "react-icons/fa";
import { useState } from "react";

export default function ShowFilter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <div className="lg:hidden">
      <div
        id="overlay"
        className={`w-full h-full bg-black fixed top-0 left-0 z-50 duration-200 blur-xl
            ${isOpen ? "opacity-70 visible" : "opacity-0 invisible"}`}
      />
      <div
        id="drawer"
        className={`w-9/12 h-full bg-white fixed top-0 right-full z-50 duration-500 ml-6 mt-8 p-4
            ${isOpen ? "right-0" : "right-full"}`}
      >
        <p>Drawer Content</p>
      </div>
      <button
        className="w-[50px] h-[50px] bg-red-600 rounded-full fixed bottom-6 right-3 flex justify-center items-center z-50 fill-white"
        onClick={toggleDrawer}
      >
        <FaFilter />
      </button>
    </div>
  );
}
