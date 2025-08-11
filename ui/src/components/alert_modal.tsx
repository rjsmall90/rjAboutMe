import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  content?: string;
};

export default function SmallModal({ open, onClose, content = "Alert content"}: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" aria-modal="true" role="dialog" aria-labelledby="alert-modal">
      <div className="bg-[#3A0CA3] w-full max-w-md rounded-2xl p-6 shadow-2xl transform transition-all">
        <div className="relative">
          <button onClick={onClose} aria-label="Close" className="absolute right-3 ml-4 rounded-md p-1 hover:bg-gray-100 dark:hover:bg-slate-700">
            ✕
          </button>
        </div>

        <div className="mt-4 text-xl text-[#F72585] text-center">
          {content}
        </div>
      </div>
    </div>
  );
}
