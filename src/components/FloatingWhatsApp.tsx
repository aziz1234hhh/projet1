const message = encodeURIComponent(
  "Bonjour, je veux plus d'informations sur vos tableaux et les formats disponibles.",
);

const whatsappHref = `https://wa.me/?text=${message}`;

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="interactive-sheen fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#6f8b5d] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_46px_-18px_rgba(68,98,56,0.55)] transition hover:-translate-y-1 hover:bg-[#617a52]"
      aria-label="Ouvrir WhatsApp"
      title="Contacter via WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2a9.94 9.94 0 0 0-8.64 14.84L2 22l5.3-1.38a9.94 9.94 0 0 0 4.72 1.2h.01c5.5 0 9.97-4.47 9.97-9.97a9.88 9.88 0 0 0-2.95-6.91Zm-7.03 15.2h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.15.83.84-3.06-.2-.31a8.26 8.26 0 0 1-1.29-4.41c0-4.58 3.73-8.31 8.32-8.31a8.23 8.23 0 0 1 5.88 2.45 8.25 8.25 0 0 1 2.43 5.87c0 4.59-3.73 8.32-8.3 8.32Zm4.56-6.18c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.13-.55.12-.17.24-.64.8-.79.96-.15.17-.3.18-.55.06-.25-.13-1.06-.39-2.01-1.25-.74-.66-1.24-1.48-1.38-1.73-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.82-.19-.46-.39-.4-.55-.4h-.47c-.16 0-.43.06-.66.31-.23.24-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.72 2.63 4.18 3.7.58.25 1.03.4 1.38.52.58.18 1.1.15 1.51.09.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.05-.09-.21-.15-.46-.27Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
