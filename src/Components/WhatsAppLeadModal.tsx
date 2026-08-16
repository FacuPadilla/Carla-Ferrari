import { type FormEvent, useState } from "react";

interface WhatsAppLeadModalProps {
  isOpen: boolean;
  title: string;
  context: string;
  onClose: () => void;
}

const WhatsAppLeadModal = ({
  isOpen,
  title,
  context,
  onClose,
}: WhatsAppLeadModalProps) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hola, soy ${name}. Quisiera ${context}.`;
    window.open(
      `https://wa.me/5491138201129?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setName("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-lead-title"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-wider text-[#b1757c]">
              WhatsApp
            </p>
            <h2 id="whatsapp-lead-title" className="font-chocobold text-2xl text-gray-900">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="text-2xl text-gray-500 hover:text-gray-900"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="whatsapp-name" className="mb-2 block font-chocobold text-sm text-gray-700">
            Tu nombre
          </label>
          <input
            id="whatsapp-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength={2}
            autoFocus
            className="mb-5 w-full rounded border border-gray-300 px-4 py-3 font-chocoreg outline-none focus:border-[#b1757c]"
            placeholder="Tu nombre"
          />
          <p className="mb-6 text-sm text-gray-600">
            Se abrira WhatsApp con un mensaje listo para revisar antes de enviarlo.
          </p>
          <button
            type="submit"
            className="w-full rounded bg-[#b1757c] px-4 py-3 font-chocobold text-white transition hover:bg-[#9d6169]"
          >
            Continuar a WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsAppLeadModal;
