import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform">
        <MessageCircle size={28} className="fill-white" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
}
