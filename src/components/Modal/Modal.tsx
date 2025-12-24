import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-xl p-16 w-full max-w-141.5">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
