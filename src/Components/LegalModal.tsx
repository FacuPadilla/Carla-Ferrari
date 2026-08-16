import { useEffect } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal = ({ isOpen, onClose }: LegalModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 text-gray-700 shadow-2xl md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 id="legal-title" className="font-chocobold text-3xl text-[#b1757c]">
            Información legal
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar información legal"
            className="text-2xl text-gray-500 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 font-chocoreg text-sm leading-6">
          <section>
            <h3 className="mb-2 font-chocobold text-lg text-gray-900">Alcance del sitio</h3>
            <p>
              Este sitio presenta los servicios de Communication Co. y permite realizar consultas por WhatsApp. La información publicada tiene carácter informativo y comercial; una consulta no constituye una contratación ni una reserva hasta que las partes la confirmen expresamente.
            </p>
          </section>
          <section>
            <h3 className="mb-2 font-chocobold text-lg text-gray-900">Derechos de autor</h3>
            <p>
              Los textos, identidad visual, logotipos, fotografías, piezas gráficas, casos de estudio y demás contenidos del sitio pertenecen a sus respectivos titulares o se utilizan con autorización. Se encuentran protegidos por la Ley N.º 11.723 de Propiedad Intelectual y demás normas aplicables.
            </p>
            <p className="mt-2">
              Queda prohibida su reproducción, transformación, distribución, comunicación pública o uso comercial, total o parcial, sin autorización previa y por escrito del titular de los derechos, excepto en los casos permitidos por la legislación vigente.
            </p>
          </section>
          <section>
            <h3 className="mb-2 font-chocobold text-lg text-gray-900">Protección de datos personales</h3>
            <p>
              El tratamiento de los datos personales se rige por la Ley N.º 25.326 de Protección de los Datos Personales y sus normas complementarias. Los datos que la persona ingrese en el formulario, como nombre, teléfono, correo electrónico y detalle de la consulta, se utilizan exclusivamente para preparar el mensaje de WhatsApp y coordinar la respuesta solicitada.
            </p>
            <p className="mt-2">
              El mensaje se muestra para su revisión antes de ser enviado. Al continuar la conversación en WhatsApp, el tratamiento de la información también queda sujeto a las políticas de privacidad y condiciones de esa plataforma. No se solicitan contraseñas, datos bancarios ni datos sensibles innecesarios.
            </p>
            <p className="mt-2">
              La persona titular de los datos puede ejercer los derechos de acceso, rectificación, actualización, supresión y confidencialidad previstos en los artículos 14 y 16 de la Ley N.º 25.326 mediante el canal oficial de WhatsApp del sitio. La Agencia de Acceso a la Información Pública, órgano de control de la Ley N.º 25.326, tiene la atribución de atender denuncias y reclamos vinculados al incumplimiento de las normas sobre protección de datos personales.
            </p>
          </section>
          <section>
            <h3 className="mb-2 font-chocobold text-lg text-gray-900">Cookies y servicios de terceros</h3>
            <p>
              Este sitio puede incluir enlaces a WhatsApp, Instagram, Behance, LinkedIn u otros servicios de terceros. Al acceder a esos enlaces, la persona visitante queda sujeta a las políticas, prácticas y condiciones de cada plataforma. Communication Co. no controla ni responde por los contenidos, la disponibilidad ni el tratamiento de datos que realicen esos terceros.
            </p>
            <p className="mt-2">
              El sitio utiliza únicamente los recursos técnicos necesarios para su funcionamiento. En caso de incorporar herramientas de analítica, publicidad, medición o cookies no esenciales, se informará su finalidad y, cuando corresponda, se solicitará el consentimiento previo de la persona visitante.
            </p>
          </section>
          <section>
            <h3 className="mb-2 font-chocobold text-lg text-gray-900">Contrataciones y defensa del consumidor</h3>
            <p>
              Las condiciones, alcance, plazos y valores de cada servicio se informarán y acordarán de manera particular antes de su contratación. Cuando resulte aplicable, las relaciones de consumo se regirán por la Ley N.º 24.240 de Defensa del Consumidor y el Código Civil y Comercial de la Nación.
            </p>
          </section>
          <p className="border-t border-gray-200 pt-4 text-xs text-gray-500">
            Copyright {new Date().getFullYear()} Communication Co. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
