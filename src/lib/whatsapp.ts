import { CLINIC, type Unit, type UnitId } from "./clinic-data";
import { track } from "./analytics";

export const INSTAGRAM_URL = CLINIC.contact.instagram;

export const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da YL Odontologia e gostaria de agendar uma avaliação.";

/** Link de WhatsApp de uma unidade específica. */
export function unitWaLink(unit: Unit | UnitId, message = DEFAULT_MESSAGE) {
  const u =
    typeof unit === "string"
      ? CLINIC.units.find((x) => x.id === unit) ?? CLINIC.units[0]
      : unit;
  return `https://wa.me/${u.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Handler pronto para plugar em onClick de qualquer CTA de WhatsApp. */
export function onWhatsAppClick(origin: string, extras?: Record<string, unknown>) {
  track("whatsapp_click", { origin, ...extras });
}
