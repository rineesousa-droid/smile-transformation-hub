/**
 * Fonte única de dados da clínica.
 * Tokens `[INFORMAÇÃO A CONFIRMAR]` marcam campos aguardando confirmação da Dra. Yasmin.
 * Substitua pelo dado real antes de publicar.
 */

export const CLINIC = {
  brand: "YL Odontologia",
  professional: {
    fullName: "Dra. Yasmin Lopes",
    cro: "[INFORMAÇÃO A CONFIRMAR: CRO-CE Nº]",
    role: "Cirurgiã-dentista — Estética do sorriso e Harmonização facial",
    yearsOfExperience: "[INFORMAÇÃO A CONFIRMAR]",
    education: [
      "[INFORMAÇÃO A CONFIRMAR: Graduação — Instituição / Ano]",
      "[INFORMAÇÃO A CONFIRMAR: Especialização em Estética / Instituição]",
      "[INFORMAÇÃO A CONFIRMAR: Cursos de aperfeiçoamento em Facetas de Resina]",
    ],
  },
  contact: {
    whatsapp: "5585999999999", // [INFORMAÇÃO A CONFIRMAR — número real de atendimento]
    phoneDisplay: "(85) 99999-9999",
    instagram: "https://instagram.com/dra.yasminlopes",
    instagramHandle: "@dra.yasminlopes",
    googleReviewsUrl: "", // Preencha com o link do Google Maps/Reviews para exibir o botão
  },
  hours: [
    { days: "Segunda a Sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h às 13h" },
  ],
  units: [
    {
      id: "aldeota",
      name: "Unidade Aldeota",
      address: "Av. Santos Dumont, 2122 — Sala 106, Aldeota, Fortaleza-CE",
      mapQuery: "Av.+Santos+Dumont+2122+Aldeota+Fortaleza",
    },
    {
      id: "sao-cristovao",
      name: "Unidade São Cristóvão",
      address: "Av. Castelo de Castro, 428, Fortaleza-CE",
      mapQuery: "Av.+Castelo+de+Castro+428+Fortaleza",
    },
    {
      id: "bezerra",
      name: "Unidade Bezerra de Menezes",
      address: "Av. Bezerra de Menezes, 1250 — Sala 2103, Fortaleza-CE",
      mapQuery: "Av.+Bezerra+de+Menezes+1250+Fortaleza",
    },
  ],
  /**
   * Números de prova social.
   * `confirmed: false` = renderiza como texto qualitativo, sem número inventado.
   * Ao confirmar com a Dra., troque para `confirmed: true` e ajuste o valor.
   */
  stats: [
    { key: "smiles", value: null as number | null, suffix: "+", label: "Sorrisos transformados", confirmed: false, fallback: "Centenas" },
    { key: "followers", value: null as number | null, suffix: "K+", label: "Seguidores no Instagram", confirmed: false, fallback: "Milhares" },
    { key: "years", value: null as number | null, suffix: " anos", label: "De experiência clínica", confirmed: false, fallback: "Anos" },
    { key: "rating", value: null as number | null, suffix: "★", label: "Avaliação dos pacientes", confirmed: false, fallback: "5.0" },
  ],
} as const;

export type UnitId = (typeof CLINIC.units)[number]["id"];
