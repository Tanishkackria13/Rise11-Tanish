interface UploadFieldProps {
  title: string;
}

const UploadField: React.FC<UploadFieldProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 border-dashed border-2 rounded-lg h-52">
      <p className="text-gray-600 text-center mb-2">{title}</p>
      <p className="text-gray-500 text-sm mb-4">or</p>
      <label
        htmlFor="file-upload"
        className="cursor-pointer text-indigo-500 font-semibold flex items-center"
      >
        <img src="/upload.svg" alt="Upload Icon" className="w-5 h-5 mr-2" />
        Upload a PDF
      </label>
      <input type="file" id="file-upload" accept="application/pdf" className="hidden" />
    </div>
  );
};

export const UploadCards = () => (
  <div className="flex gap-4 justify-center">
    {["Upload the Contract", "Arbitration Agreement"].map((title, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center w-60 h-52 border-dashed border-2 rounded-lg hover:border-indigo-500 hover:shadow-lg transition-all p-4"
      >
        <label htmlFor={`file-upload-${index}`} className="cursor-pointer text-center">
          <img
            src="/upload.svg"
            alt="Upload Icon"
            className="w-10 h-10 mx-auto mb-2"
          />
          <p className="text-gray-700 font-semibold mb-1">{title}</p>
          <span className="text-indigo-500 text-sm">Max 2MB, PDF</span>
        </label>
        <input
          type="file"
          id={`file-upload-${index}`}
          accept="application/pdf"
          className="hidden"
        />
      </div>
    ))}
  </div>
);

export const AdditionalCard = () => (
  <div className="flex flex-col items-center justify-center w-60 h-52 border-dashed border-2 rounded-lg hover:border-indigo-500 hover:shadow-lg transition-all p-4">
    <label htmlFor="file-upload-additional" className="cursor-pointer text-center">
      <img src="/upload.svg" alt="Upload Icon" className="w-10 h-10 mx-auto mb-2" />
      <p className="text-gray-700 font-semibold mb-1">Upload the Contract</p>
      <span className="text-indigo-500 text-sm">Max 2MB, PDF</span>
    </label>
    <input
      type="file"
      id="file-upload-additional"
      accept="application/pdf"
      className="hidden"
    />
  </div>
);

export default UploadField;
