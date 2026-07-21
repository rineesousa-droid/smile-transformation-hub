/**
 * Gancho leve de analytics. No-op por padrão.
 *
 * Para ativar Google Analytics ou Meta Pixel:
 * 1. Adicione as tags no `src/routes/__root.tsx` (head/scripts).
 * 2. Substitua as chamadas abaixo por `window.gtag(...)` / `window.fbq(...)`.
 *
 * Variáveis futuras (ainda não usadas):
 *   VITE_GA_ID, VITE_META_PIXEL_ID
 */

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Debug leve — visível em dev, silencioso em prod se console for filtrado.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, params);
  }
  // Exemplo futuro:
  // window.gtag?.("event", event, params);
  // window.fbq?.("trackCustom", event, params);
}
