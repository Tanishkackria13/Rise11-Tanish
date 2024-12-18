interface UploadFieldProps {
    title: string;
  }

  
  
  const UploadField: React.FC<UploadFieldProps> = ({ title }) => {
    return (
      <div className="upload-container flex flex-col items-center bg-gray-100 p-4 justify-center h-52">
      <p className="text-center">Write your Statement Here</p>
      <p className="text-center">or</p>
      <label htmlFor="file-upload" className="upload-label flex items-center">
        <img
          src="/upload.svg"
          alt="Upload Icon"
          className="upload-icon mx-2"
        />
        Upload a Pdf
      </label>
      <input
        type="file"
        id="file-upload"
        accept="application/pdf"
        className="file-input"
      />
    </div>
    );
  };

 export  const UploadCards = () => {
    return (
      <div className="flex justify-center gap-2">
        <div className="w-60 h-52 border-2 border-dashed border-indigo-300 rounded-lg shadow-md hover:border-indigo-500 hover:shadow-lg flex flex-col items-center justify-center text-center p-4 transition-all">
          <label htmlFor="file-upload-1" className="cursor-pointer">
            <img
              src="/upload.svg" 
              alt="Upload Icon"
              className="w-10 h-10 mx-auto mb-4"
            />
            <p className="text-gray-700 font-semibold mb-2">Upload the Contract</p>
            <span className="text-indigo-500 text-sm">Max 2MB, PDF</span>
          </label>
          <input
            type="file"
            id="file-upload-1"
            accept="application/pdf"
            className="hidden"
          />
        </div>
  
        <div className="w-60 h-52 border-2 border-dashed border-indigo-300 rounded-lg shadow-md hover:border-indigo-500 hover:shadow-lg flex flex-col items-center justify-center text-center p-4 transition-all">
          <label htmlFor="file-upload-2" className="cursor-pointer">
            <img
              src="/upload.svg" 
              alt="Upload Icon"
              className="w-10 h-10 mx-auto mb-4"
            />
            <p className="text-gray-700 font-semibold mb-2">Arbitration Agreement</p>
            <span className="text-indigo-500 text-sm">Max 2MB, PDF</span>
          </label>
          <input
            type="file"
            id="file-upload-2"
            accept="application/pdf"
            className="hidden"
          />
        </div>
      </div>
    );
  };

  export const AdditionalCard = () => {
    return (
      <div className="flex justify-center gap-2">
      <div className="w-60 h-52 border-2 border-dashed border-indigo-300 rounded-lg shadow-md hover:border-indigo-500 hover:shadow-lg flex flex-col items-center justify-center text-center p-4 transition-all">
        <label htmlFor="file-upload-1" className="cursor-pointer">
          <img
            src="/upload.svg" 
            alt="Upload Icon"
            className="w-10 h-10 mx-auto mb-4"
          />
          <p className="text-gray-700 font-semibold mb-2">Upload the Contract</p>
          <span className="text-indigo-500 text-sm">Max 2MB, PDF</span>
        </label>
        <input
          type="file"
          id="file-upload-1"
          accept="application/pdf"
          className="hidden"
        />
      </div>
      </div>
    )
  }
  
  export default UploadField;
  