"use client";

import { useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { betreffOptionen, contactFormSchema } from "@/lib/contact-schema";

const formSchema = contactFormSchema.omit({ formRenderedAt: true });
type FormInput = z.input<typeof formSchema>;
type FormOutput = z.output<typeof formSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  // Zeit-Token: einmalig beim ersten Rendern erfasst (Spam-Schutz, siehe API-Route).
  const [renderedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      anrede: undefined,
      name: "",
      telefon: "",
      email: "",
      betreff: "",
      nachricht: "",
      datenschutz: undefined,
      website: "",
    },
  });

  async function onSubmit(values: FormOutput) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formRenderedAt: renderedAt }),
      });
      if (!response.ok) throw new Error("request-failed");
      toast.success("Vielen Dank! Wir melden uns innerhalb von 24 Stunden.");
      reset();
    } catch {
      toast.error("Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot: für Menschen unsichtbar, für Bots ausfüllbar */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Nicht ausfüllen</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="anrede">Anrede (Pflichtfeld)</Label>
          <Controller
            control={control}
            name="anrede"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger
                  id="anrede"
                  className="w-full"
                  aria-invalid={!!errors.anrede}
                  aria-describedby={errors.anrede ? "anrede-error" : undefined}
                >
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Frau">Frau</SelectItem>
                  <SelectItem value="Herr">Herr</SelectItem>
                  <SelectItem value="Divers">Divers</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.anrede ? (
            <p id="anrede-error" className="text-sm text-[color:var(--danger)]">
              {errors.anrede.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name (Pflichtfeld)</Label>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
          {errors.name ? (
            <p id="name-error" className="text-sm text-[color:var(--danger)]">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="telefon">Telefon (Pflichtfeld)</Label>
          <Input
            id="telefon"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.telefon}
            aria-describedby={errors.telefon ? "telefon-error" : undefined}
            {...register("telefon")}
          />
          {errors.telefon ? (
            <p id="telefon-error" className="text-sm text-[color:var(--danger)]">
              {errors.telefon.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail (Pflichtfeld)</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-[color:var(--danger)]">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="betreff">Anliegen (Pflichtfeld)</Label>
        <Controller
          control={control}
          name="betreff"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger
                id="betreff"
                className="w-full"
                aria-invalid={!!errors.betreff}
                aria-describedby={errors.betreff ? "betreff-error" : undefined}
              >
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                {betreffOptionen.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.betreff ? (
          <p id="betreff-error" className="text-sm text-[color:var(--danger)]">
            {errors.betreff.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="nachricht">Nachricht</Label>
        <Textarea id="nachricht" rows={5} {...register("nachricht")} />
      </div>

      <div className="flex items-start gap-3">
        <Controller
          control={control}
          name="datenschutz"
          render={({ field }) => (
            <Checkbox
              id="datenschutz"
              checked={field.value === true}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              aria-invalid={!!errors.datenschutz}
              aria-describedby={errors.datenschutz ? "datenschutz-error" : undefined}
            />
          )}
        />
        <Label htmlFor="datenschutz" className="text-sm font-normal text-schiefer-600">
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-moos-700">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung dieser Anfrage einverstanden.
          (Pflichtfeld)
        </Label>
      </div>
      {errors.datenschutz ? (
        <p id="datenschutz-error" className="text-sm text-[color:var(--danger)]">
          {errors.datenschutz.message}
        </p>
      ) : null}

      <Button type="submit" disabled={submitting} className="self-start">
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        Anfrage senden
      </Button>
    </form>
  );
}
