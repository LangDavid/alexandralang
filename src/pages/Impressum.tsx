import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-10">
          Impressum
        </h1>

        <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Angaben gemäß § 5 ECG
            </h2>
            <p>
              Mag.<sup>a</sup> Alexandra Lang
              <br />
              Klinische Psychologin &amp; Gesundheitspsychologin
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Adresse
            </h2>
            <p>
              Gusentalstraße 13
              <br />
              4222 St. Georgen an der Gusen
              <br />
              Österreich
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a href="tel:+4367761034431" className="text-primary hover:underline">
                +43 677 61034431
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:praxis@alexandralang.at" className="text-primary hover:underline">
                praxis@alexandralang.at
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.alexandralang.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.alexandralang.at
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Berufsbezeichnung
            </h2>
            <p>
              Klinische Psychologin und Gesundheitspsychologin
              <br />
              Verliehen in Österreich
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Berufsrechtliche Regelungen
            </h2>
            <p>
              Psychologengesetz 2013 (PG 2013)
              <br />
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.ris.bka.gv.at
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Aufsichtsbehörde
            </h2>
            <p>
              Bundesministerium für Soziales, Gesundheit, Pflege und
              Konsumentenschutz
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte kann jedoch keine Gewähr übernommen werden. Als
              Diensteanbieter bin ich gemäß § 7 Abs. 1 ECG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
