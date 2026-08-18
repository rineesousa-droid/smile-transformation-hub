/**
 * Fonte única de dados da clínica.
 * Tokens `[INFORMAÇÃO A CONFIRMAR]` marcam campos aguardando confirmação da Dra. Yasmin.
 */

export const CLINIC = {
  brand: "YL Odontologia",
  professional: {
    fullName: "Dra. Yasmin Lopes",
    cro: "CRO-CE 9237",
    role: "Cirurgiã-dentista — Facetas em resina e Harmonização facial",
    yearsOfExperience: "10 anos",
    education: ["Graduação em Odontologia — Universidade de Fortaleza (UNIFOR)"],
  },
  contact: {
    whatsapp: "5585999999999", // [INFORMAÇÃO A CONFIRMAR — número real de atendimento]
    phoneDisplay: "(85) 99999-9999",
    instagram: "https://instagram.com/dra.yasminlopes",
    instagramHandle: "@dra.yasminlopes",
    googleReviewsUrl: "",
  },
  hours: [
    { days: "Segunda a Sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h às 13h" },
  ],
  units: [
    {
      id: "aldeota",
      name: "Unidade Aldeota",
      address: "Av. Santos Dumont, 2122 — Sala 106, Fortaleza-CE",
      mapQuery: "Av.+Santos+Dumont+2122+Aldeota+Fortaleza",
      /** Preencha com o link oficial do Google Maps quando disponível. */
      mapUrl: "",
    },
    {
      id: "sao-cristovao",
      name: "Unidade São Cristóvão",
      address: "Av. Castelo de Castro, 428, Fortaleza-CE",
      mapQuery: "Av.+Castelo+de+Castro+428+Fortaleza",
      mapUrl: "",
    },
    {
      id: "bezerra",
      name: "Unidade Bezerra de Menezes",
      address: "Av. Bezerra de Menezes, 1250 — Sala 2103, Fortaleza-CE",
      mapQuery: "Av.+Bezerra+de+Menezes+1250+Fortaleza",
      mapUrl: "",
    },
  ],
  /** Credenciais de autoridade — dados confirmados pela profissional. */
  credentials: [
    { key: "years", value: "10 anos", label: "De atuação clínica" },
    { key: "education", value: "UNIFOR", label: "Universidade de Fortaleza" },
    { key: "cro", value: "CRO-CE 9237", label: "Registro profissional" },
    { key: "city", value: "Fortaleza", label: "Três unidades no Ceará" },
  ],
} as const;

/** Retorna o link de mapa da unidade (oficial, se cadastrado). */
export function unitMapUrl(u: { mapUrl?: string; mapQuery: string }) {
  return u.mapUrl || `https://www.google.com/maps?q=${u.mapQuery}`;
}

export type UnitId = (typeof CLINIC.units)[number]["id"];
