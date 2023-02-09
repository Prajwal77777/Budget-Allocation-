import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <div>
        <span> Budget=£{budget}</span>
      </div>
    </div>
  );
};

export default Budget;
