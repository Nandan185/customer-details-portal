// Toast.tsx
import React from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed top-5 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
      role="alert"
    >
      <div className="flex items-center justify-between w-[400px] text-wrap">
        <span>{message}</span>
        <button
          className="ml-4 text-white hover:text-gray-400"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
