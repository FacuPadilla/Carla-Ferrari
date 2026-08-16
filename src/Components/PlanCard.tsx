import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WhatsAppLeadModal from "./WhatsAppLeadModal";

interface PlanCardProps {
  planNumber: string;
  title: string;
  subtitle: string;
  description: string;
  forWho: string[];
  includes: string[];
  topics?: string[];
  modality: string;
  extra: string;
}

const PlanCard = ({
  planNumber,
  title,
  subtitle,
  forWho,
  includes,
  topics,
  modality,
  extra,
}: PlanCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [t] = useTranslation("global");

  const closePlanModal = () => {
    setIsModalOpen(false);
    setIsWhatsAppOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePlanModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Obtener características de manera segura
  const getFeatures = () => {
    try {
      const features = t(`plans.cards.plan${planNumber}.features`, {
        returnObjects: true,
      });
      return Array.isArray(features) ? features : [];
    } catch {
      return [];
    }
  };

  return (
    <>
      {/* Tarjeta principal */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm h-[500px] border border-gray-100 flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl">
              {planNumber === "1" ? "🙌" : planNumber === "2" ? "🤎" : "👩‍🏫"}
            </span>
          </div>
          <h2 className="text-xl font-chocobold text-[#b1757c] mb-2 text-center">
            PLAN {planNumber}
          </h2>

          <p className="text-gray-600 font-chocoreg text-md mb-4 text-center">
            {t(`plans.cards.plan${planNumber}.shortDescription`)}
          </p>

          {/* Características principales */}
          <div className="mb-6">
            <h4 className="font-chocobold text-md mb-3 text-gray-700">
              {t("plans.cards.includesLabel")}
            </h4>
            <ul className="space-y-1">
              {getFeatures().map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#b1757c] mr-2 text-sm">•</span>
                  <span className="font-chocoreg text-sm text-gray-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#b1757c] hover:bg-[#9d6169] transition-all text-white font-chocobold py-3 px-4 rounded text-sm"
          >
            {t("plans.cards.knowMoreButton")}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[80] p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`plan-title-${planNumber}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePlanModal();
          }}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="sticky top-0 z-10 bg-white border-b p-6 flex justify-between items-center">
              <h2 id={`plan-title-${planNumber}`} className="text-2xl font-chocobold text-[#b1757c]">
                PLAN {planNumber} — "{title}"
              </h2>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  closePlanModal();
                }}
                aria-label="Cerrar detalles del plan"
                className="relative z-20 pointer-events-auto cursor-pointer px-2 text-3xl leading-none text-gray-500 hover:text-gray-700"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <p className="text-gray-600 font-chocoreg italic text-sm mb-4">
                {subtitle}
              </p>

              {/* Para quién es */}
              <div className="mb-6">
                <h3 className="font-chocobold text-lg mb-3">
                  {t("plans.modal.forWhoTitle")}
                </h3>
                <ul className="space-y-2">
                  {forWho.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#b1757c] mr-2">•</span>
                      <span className="font-chocoreg text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qué incluye */}
              <div className="mb-6">
                <h3 className="font-chocobold text-lg mb-3">
                  {t("plans.modal.includesTitle")}
                </h3>
                <ul className="space-y-2">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#b1757c] mr-2">•</span>
                      <span className="font-chocoreg text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nota de implementación (solo Plan 1) */}
              {planNumber === "1" && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="font-chocoreg text-sm text-gray-600 italic">
                    {t("plans.modal.implementationNote")}
                  </p>
                </div>
              )}

              {/* Extras (solo Plan 1) */}
              {planNumber === "1" && (
                <div className="mb-6">
                  <h3 className="font-chocobold text-lg mb-3">
                    {t("plans.modal.extrasTitle")}
                  </h3>
                  <ul className="space-y-2">
                    {Object.values(
                      t("plans.plan1.extras", { returnObjects: true }) || {}
                    ).map((extra: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#b1757c] mr-2">•</span>
                        <span className="font-chocoreg text-sm">{extra}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Temas (solo para plan 3) */}
              {topics && (
                <div className="mb-6">
                  <h3 className="font-chocobold text-lg mb-3">
                    {t("plans.modal.topicsTitle")}
                  </h3>
                  <ul className="space-y-2">
                    {topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#b1757c] mr-2">•</span>
                        <span className="font-chocoreg text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modalidad */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">
                    {planNumber === "1"
                      ? "🙌"
                      : planNumber === "2"
                      ? "🤎"
                      : "👩‍🏫"}
                  </span>
                  <h3 className="font-chocobold text-lg">
                    {t("plans.modal.modalityTitle")}:
                  </h3>
                </div>
                <p className="font-chocoreg text-sm">{modality}</p>
              </div>

              {/* Extra */}
              <div className="border-t pt-4 mb-6">
                <p className="font-chocoreg text-sm italic text-gray-600">
                  <span className="mr-2">✨</span>
                  {extra}
                </p>
              </div>

              {/* Botón de contacto */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsWhatsAppOpen(true);
                  }}
                  className="bg-[#b1757c] hover:bg-[#9d6169] transition-all text-white font-chocobold py-3 px-8 rounded"
                >
                  Empezar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <WhatsAppLeadModal
        isOpen={isWhatsAppOpen}
        title={`Consultar Plan ${planNumber}`}
        context={`consultar la compra del Plan ${planNumber}`}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </>
  );
};

export default PlanCard;
