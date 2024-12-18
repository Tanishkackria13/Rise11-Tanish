import { steps } from "@/data";
import React from "react";

interface ProgressBarProps {
  currentStep?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep = 2 }) => {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-gray-100 rounded-lg">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="text-center">
            {/* Step Number and Name */}
            <p
              className={`text-sm mb-1 ${
                index < currentStep
                  ? "font-bold text-black"
                  : index === currentStep
                  ? "font-bold text-blue-500"
                  : "text-gray-400"
              }`}
            >
              <span
                className={`mr-1 ${
                  index < currentStep || index === currentStep
                    ? "font-bold"
                    : "text-gray-400"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </p>

            {/* Circle Indicator */}
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center border-2 ${
                index < currentStep
                  ? "bg-blue-500 text-white border-blue-500"
                  : index === currentStep
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {index < currentStep ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                index + 1
              )}
            </div>

            {/* Approx Time */}
            {index >= currentStep && (
              <p className="text-xs text-gray-500 mt-1">Approx 5 Min</p>
            )}
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 ${
                index < currentStep - 1
                  ? "bg-blue-500"
                  : index === currentStep - 1
                  ? "border-t border-dotted border-blue-500"
                  : "bg-gray-300"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
