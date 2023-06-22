import React from "react";
import { useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const SidePanel = () => {
  const isMenuOpen = useSelector((store) => store.panel.isMenuOpen);
  // Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="border shadow-md py-3 px-4">
      <h1 className="font-bold text-4xl">Subscription</h1>
      <ul>
        <Link to="/">
          <li className="py-3 hover:bg-gray-100 text-2xl cursor-pointer">
            🏠Home
          </li>
        </Link>
        <li className="py-3 hover:bg-gray-100  text-2xl cursor-pointer">
          🩳Shorts
        </li>
      </ul>
      <h1 className="font-bold pt-5 text-4xl">About</h1>
      <ul>
        <li className="py-3 hover:bg-gray-100  text-2xl cursor-pointer">
          📚Library
        </li>
        <li className="py-3 hover:bg-gray-100  text-2xl cursor-pointer">
          📝History
        </li>
        <li className="py-3 hover:bg-gray-100  text-2xl cursor-pointer">
          📺Watch Later
        </li>
        <li className="py-3 hover:bg-gray-100  text-2xl cursor-pointer">
          👍Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
