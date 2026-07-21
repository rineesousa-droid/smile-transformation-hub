import { CLINIC } from "./clinic-data";
import { track } from "./analytics";

export const WHATSAPP_NUMBER = CLINIC.contact.whatsapp;
export const INSTAGRAM_URL = CLINIC.contact.instagram;

/**
 * Gera o link do WhatsApp. O parâmetro `origin` é usado para instrumentação
 * (analytics) — não vai na mensagem.
 */
export function waLink(
  message = "Olá! Gostaria de agendar uma avaliação na YL Odontologia.",
  _origin?: string,
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Handler pronto para plugar em onClick de qualquer CTA de WhatsApp. */
export function onWhatsAppClick(origin: string, extras?: Record<string, unknown>) {
  track("whatsapp_click", { origin, ...extras });
}
