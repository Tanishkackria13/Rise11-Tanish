"use client";

import React, { useState } from "react";
import UploadField, { AdditionalCard, UploadCards } from "./UploadField";

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const Form: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleSelectionPlace = (value: string) => {
    setSelectedPlace(value);
  };
  const handleSelectionLanguage = (value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="p-2 bg-white shadow-md rounded-lg">
      <h3 className="font-bold text-gray-800 mb-2">
        File Your Claim{" "}
        <span className="text-gray-400 text-xs">(Approx 5 Minutes)</span>
      </h3>
      <div className="w-full h-0 border border-gray-200 mb-2"></div>

      <div className="grid grid-cols-3 gap-6 m-2">
        {/* Claim Value */}
        <div>
          <div className="flex m-1 p-2 -mx-6">
            <img src="/calculator.svg" alt="" className="mx-2" />
            <h1 className="font-bold text-lg text-zinc-700 tracking-wide">
              Claim Value
            </h1>
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Contract Value</label>
            <input
              type="text"
              placeholder="10,00,00"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Claim Value</label>
            <input
              type="text"
              placeholder="15,00,00"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Place */}
        <div>
          <div className="flex m-1 p-2 -mx-6">
            <img src="/location.svg" alt="" className="mx-2" />
            <h1 className="font-bold text-lg text-zinc-700 tracking-wide">
              Place
            </h1>
          </div>
          <input
            type="text"
            placeholder="Select the Place For Proceedings"
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
          <p className="m-2 text-gray-500">
            Is the Place for the proceeding the one mentioned in the
            arrangement?
          </p>
          <div className="flex ">
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  id={option.value}
                  name="place-group"
                  value={option.value}
                  checked={selectedPlace === option.value}
                  onChange={() => handleSelectionPlace(option.value)}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 mx-2"
                />
                <label htmlFor={option.value} className="text-gray-800">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex m-1 p-2 -mx-6">
            <img src="/language.svg" alt="" className="mx-2" />
            <h1 className="font-bold text-lg text-zinc-700 tracking-wide">
              Language
            </h1>
          </div>
          <input
            type="text"
            placeholder="Select the Language For Proceedings"
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
          <p className="m-2 text-gray-500">
            Is the Language for the proceedings the one mentioned in the
            arrangement?
          </p>
          <div className="flex ">
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  id={option.value}
                  name="language-group"
                  value={option.value}
                  checked={selectedLanguage === option.value}
                  onChange={() => handleSelectionLanguage(option.value)}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 mx-2"
                />
                <label htmlFor={option.value} className="text-gray-800">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Fields */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="flex m-1 p-2 -mx-6">
            <img src="/statement.svg" alt="" className="mx-2" />
            <h1 className="font-bold text-lg text-zinc-700 tracking-wide">
              Statement
            </h1>
          </div>
          <UploadField title="Agreement under Disputes" />
        </div>
        <div>
          <div className="flex m-1 p-2 -mx-6">
            <img src="/statement.svg" alt="" className="mx-2" />
            <h1 className="font-bold text-lg text-zinc-700 tracking-wide">
              Agreement under Disputes
            </h1>
          </div>
          <UploadCards/>
        </div>
        <div>
          <div className="flex m-1 p-2 -mx-6">
            <img src="/statement.svg" alt="" className="mx-2" />
            <h1 className="font-bold text-lg text-zinc-700 tracking-wide">
              Additional Documentation
            </h1>
          </div>
          <AdditionalCard/>
        </div>
      </div>
    </div>
  );
};

export default Form;
