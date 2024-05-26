import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { FiFlag } from "react-icons/fi";

import ThemeContext from "../utils/ThemeContext";

const MapComponent = () => {
  const { theme } = useContext(ThemeContext);

  const position = [19.076, 72.8777];
  return (
    <div className="bg-neutral-100 dark:bg-[#161616] p-2 rounded-xl mt-3 relative w-full mx-auto shadow-lg overflow-hidden z-10 font-Intermedium">
      <div className="flex justify-between items-center text-black dark:text-white w-full p-2">
        <span>My Location</span>
        <div className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 text-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:text-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 duration-300 transition-all ease-in font-Intermedium">
          <FiFlag />
          IND
        </div>
      </div>
      <MapContainer center={position} zoom={12} className="mt-3 h-56 w-full">
        <TileLayer
          url={
            theme === "dark"
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
