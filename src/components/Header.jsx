import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/panelSlice";
import { YOUTUBE_SEARCH_API } from "../helper";
import MenuImg from "../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [suggestions, setSuggetions] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const dispatch = useDispatch();

  // Concept of debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggetion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggetions(json[1]);
  };
  const toggleMenuHandle = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5  border-b">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-11 w-12 mx-4 cursor-pointer"
          src={MenuImg}
          alt="menu"
        />
        <Link to="/">
          <img
            className="h-11 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Youtube_2018.gif"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 p-2 border"
            type="text"
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => setshowSuggestion(false)}
          />
        </div>
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-4 px-3 shadow-sm hover:bg-gray-100">
                  🔎{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
