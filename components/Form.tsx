"use client";

import React, { useState } from "react";
import UploadField, { AdditionalCard, UploadCards } from "./UploadField";
import { countryList } from "@/data";

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
  const [selectedCurrencyContract, setSelectedCurrencyContract] =
    useState<string>("USD");
  const [selectedCurrencyClaim, setSelectedCurrencyClaim] = useState<string>(
    "USD"
  );

  const handleSelectionPlace = (value: string) => setSelectedPlace(value);
  const handleSelectionLanguage = (value: string) => setSelectedLanguage(value);
  const handleCurrencyChangeContract = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedCurrencyContract(event.target.value);
  const handleCurrencyChangeClaim = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedCurrencyClaim(event.target.value);

  return (
    <div className="container mx-auto p-4 lg:w-3/4">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h3 className="font-bold text-gray-800 mb-4 text-lg">
          File Your Claim{" "}
          <span className="text-gray-400 text-sm">(Approx 5 Minutes)</span>
        </h3>
        <div className="border-b border-gray-200 mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-zinc-700 mb-2">Claim Value</h4>
            <label className="block mb-2 text-gray-500">Contract Value</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="10,00,00"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={selectedCurrencyContract}
                onChange={handleCurrencyChangeContract}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.keys(countryList).map((currencyCode) => (
                  <option key={currencyCode} value={currencyCode}>
                    {currencyCode}
                  </option>
                ))}
              </select>
            </div>
            <label className="block mt-4 mb-2 text-gray-500">Claim Value</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="15,00,00"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={selectedCurrencyClaim}
                onChange={handleCurrencyChangeClaim}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.keys(countryList).map((currencyCode) => (
                  <option key={currencyCode} value={currencyCode}>
                    {currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-zinc-700 mb-2">Place</h4>
            <input
              type="text"
              placeholder="Select the Place For Proceedings"
              className="w-full p-2 border rounded bg-gray-100"
            />
            <p className="mt-2 text-gray-500 text-sm">
              Is the Place for the proceeding the one mentioned in the
              arrangement?
            </p>
            <div className="flex gap-4 mt-2">
              {options.map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="place-group"
                    value={option.value}
                    checked={selectedPlace === option.value}
                    onChange={() => handleSelectionPlace(option.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-zinc-700 mb-2">Language</h4>
            <input
              type="text"
              placeholder="Select the Language For Proceedings"
              className="w-full p-2 border rounded bg-gray-100"
            />
            <p className="mt-2 text-gray-500 text-sm">
              Is the Language for the proceedings the one mentioned in the
              arrangement?
            </p>
            <div className="flex gap-4 mt-2">
              {options.map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="language-group"
                    value={option.value}
                    checked={selectedLanguage === option.value}
                    onChange={() => handleSelectionLanguage(option.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div>
            <h4 className="font-bold text-zinc-700 mb-2">Statement</h4>
            <UploadField title="Write your Statement" />
          </div>
          <div>
            <h4 className="font-bold text-zinc-700 mb-2">
              Agreement under Disputes
            </h4>
            <UploadCards />
          </div>
          <div>
            <h4 className="font-bold text-zinc-700 mb-2">
              Additional Documentation
            </h4>
            <AdditionalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
