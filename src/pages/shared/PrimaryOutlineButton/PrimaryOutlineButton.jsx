import React from "react";

const PrimaryOutlineButton = ({ text }) => {
    return (
        <button
            className="
        btn 
        rounded-full 
        bg-transparent 
        border-[#CAEB66] 
        text-[#CAEB66] 
        hover:bg-[#CAEB66] 
        hover:text-black 
        transition
      "
        >
            {text}
        </button>
    );
};

export default PrimaryOutlineButton;
