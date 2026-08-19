import { z } from "zod";
import { services } from "@/lib/services-data";
import { zusatzleistungen } from "@/lib/pricing";

export const betreffOptionen = [
  "Allgemeine Anfrage",
  ...services.map((s) => s.titel),
  ...zusatzleistungen.map((z) => z.titel),
];

export const contactFormSchema = z.object({
  anrede: z.enum(["Herr", "Frau", "Divers"], { message: "Bitte wählen Sie eine Anrede." }),
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein."),
  telefon: z.string().trim().min(4, "Bitte geben Sie eine Telefonnummer ein."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  betreff: z.string().min(1, "Bitte wählen Sie ein Anliegen."),
  nachricht: z.string().trim().max(2000, "Die Nachricht ist zu lang.").optional().default(""),
  datenschutz: z.literal(true, { message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
  // Honeypot: muss leer bleiben, sonst gilt die Anfrage als Spam.
  website: z.string().max(0).optional().default(""),
  // Zeit-Token: Zeitstempel, zu dem das Formular gerendert wurde.
  formRenderedAt: z.number(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
