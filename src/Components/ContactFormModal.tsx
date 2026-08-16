import { useState, type FormEvent } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hola, quisiera hacer una consulta.",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      `Email: ${form.email}`,
      `Descripción: ${form.description}`,
    ].join("\n");
    window.open(
      `https://wa.me/5491138201129?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("sent");
  };

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-2xl md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-wider text-[#b1757c]">Consulta</p>
            <h2 id="contact-form-title" className="font-chocobold text-2xl text-gray-900">Contactanos</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar formulario" className="text-2xl text-gray-500 hover:text-gray-900">×</button>
        </div>

        {status === "sent" ? (
          <div className="space-y-4 text-gray-700">
            <p className="font-chocobold text-xl text-[#b1757c]">WhatsApp preparado</p>
            <p>Se abrió WhatsApp con tu consulta lista para revisar y enviar.</p>
            <button type="button" onClick={onClose} className="w-full rounded bg-[#b1757c] px-4 py-3 font-chocobold text-white hover:bg-[#9d6169]">Cerrar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1 block font-chocobold text-sm text-gray-800">Nombre y apellido</label>
              <input id="contact-name" required minLength={2} value={form.name} onChange={(event) => updateField("name", event.target.value)} className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#b1757c]" placeholder="Tu nombre y apellido" />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1 block font-chocobold text-sm text-gray-800">Teléfono</label>
              <input id="contact-phone" required value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#b1757c]" placeholder="Tu teléfono" />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block font-chocobold text-sm text-gray-800">Email</label>
              <input id="contact-email" required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#b1757c]" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="contact-description" className="mb-1 block font-chocobold text-sm text-gray-800">Descripción</label>
              <textarea id="contact-description" required minLength={10} rows={4} value={form.description} onChange={(event) => updateField("description", event.target.value)} className="w-full resize-y rounded border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#b1757c]" placeholder="Contanos brevemente en qué podemos ayudarte" />
            </div>
            <button type="submit" className="w-full rounded bg-[#b1757c] px-4 py-3 font-chocobold text-white hover:bg-[#9d6169]">Continuar a WhatsApp</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;
