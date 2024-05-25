import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FiFlag } from "react-icons/fi";

const MapComponent = () => {
  const position = [19.076, 72.8777];
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 relative w-full mx-auto shadow-lg overflow-hidden z-10 font-Intermedium">
      <div className="flex justify-between items-center text-white w-full p-2">
        <span>My Location</span>
        <div className="p-1 px-2 w-fit rounded-full flex items-center gap-x-2 hover:bg-neutral-800 bg-neutral-900 duration-300 transition-all ease-in font-Intermedium text-neutral-300">
          <FiFlag />
          IND
        </div>
      </div>
      <MapContainer center={position} zoom={12} className="mt-3 h-56 w-full">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
