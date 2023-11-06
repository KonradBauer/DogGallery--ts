import React from "react";
import GetData from "./API/tanstack";

const App: React.FC = () => {
  return (
    <div className="py-3 px-3 flex justify-center bg-teal-300 text-indigo-800 font-open-sans font-semibold border-spacing-0 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600">
      <GetData />
    </div>
  );
};

export default App;
