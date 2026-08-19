import type { Metadata } from "next";

import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${config.company.name}.`,
  alternates: { canonical: `${config.seo.siteUrl}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <section aria-labelledby="datenschutz-heading" className="bg-stein-0">
      {/* Platzhalter – keine Rechtsberatung, keine Gewähr. Vor Live-Gang anwaltlich prüfen lassen. */}
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 id="datenschutz-heading" className="text-[38px]">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 flex flex-col gap-8 text-[17px] font-light leading-relaxed text-schiefer-600">
          <div>
            <h2 className="text-lg text-schiefer-800">1. Verantwortlicher</h2>
            <p className="mt-3">
              {config.company.legalName}
              <br />
              {config.contact.address.street}, {config.contact.address.zip} {config.contact.address.city}
              <br />
              E-Mail: {config.contact.email}
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">2. Hosting</h2>
            <p className="mt-3">
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Seite verarbeitet Vercel
              automatisch technische Server-Logfiles (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seite, verwendeter Browser), soweit dies für den sicheren und stabilen Betrieb der
              Seite erforderlich ist. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              am störungsfreien Betrieb). Die Logfiles werden nach einer kurzen, betriebsnotwendigen Frist
              gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">3. Kontaktformular</h2>
            <p className="mt-3">
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von Ihnen
              angegebenen Daten (Anrede, Name, Telefon, E-Mail, Anliegen, Nachricht) ausschließlich zur
              Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahme) beziehungsweise Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung). Die Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht
              mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-schiefer-800">4. Cookies und Einwilligung</h2>
            <p className="mt-3">
              Diese Website verwendet technisch notwendige Cookies, um Ihre Cookie-Einstellung zu speichern.
              Diese sind für den Betrieb der Seite erforderlich (Art. 6 Abs. 1 lit. f DSGVO) und nicht
              deaktivierbar. Darüber hinausgehende, nicht notwendige Cookies werden nur mit Ihrer Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO) gesetzt. Sie können Ihre Einwilligung jederzeit über den Link
              „Cookie-Einstellungen&ldquo; im Footer widerrufen oder ändern.
            </p>
          </div>

          {config.features.analytics ? (
            <div>
              <h2 className="text-lg text-schiefer-800">5. Statistik / Web-Analyse</h2>
              <p className="mt-3">
                Mit Ihrer Einwilligung möchten wir anonymisierte Web-Analyse-Cookies einsetzen, um zu
                verstehen, wie diese Website genutzt wird. Das zugehörige Analyse-Werkzeug ist zum jetzigen
                Zeitpunkt technisch vorbereitet, aber noch nicht aktiv geschaltet. Sobald ein Dienst aktiv
                geschaltet wird, wird dieser Abschnitt um Anbieter, Zweck, Speicherdauer und
                Widerrufsmöglichkeit ergänzt. Ohne Ihre Einwilligung findet keine Web-Analyse statt und es
                werden keine entsprechenden Cookies gesetzt.
              </p>
            </div>
          ) : null}

          <div>
            <h2 className="text-lg text-schiefer-800">6. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung und das Recht
              auf Datenübertragbarkeit. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
