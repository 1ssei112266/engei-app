
// src/components/atoms/StampButton.tsx
import React from "react";

type StampButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const StampButton: React.FC<StampButtonProps> = ({
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-gray-800 text-base font-bold bg-white px-[30px] py-[18px] border-[2px] border-gray-400 rounded-md inline-block transition duration-300 
  hover:border-gray-600 hover:text-gray-900
  active:translate-y-[3px] active:shadow-none ${
    disabled
      ? "cursor-not-allowed bg-gray-200 text-gray-400 border-gray-300"
      : "cursor-pointer"
  }`}
    >
      {children}
    </button>
  );
};

export default StampButton;
