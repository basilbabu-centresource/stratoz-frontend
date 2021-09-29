import React from "react";

const Loading: React.FC = ({ children }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default Loading;
