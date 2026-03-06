import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Erklärung zur Informationspflicht
            </h2>
            <p>
              Der Schutz Ihrer Daten ist uns ein besonderes Anliegen. Wir
              verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TKG). In diesen
              Datenschutzinformationen informieren wir Sie über die wichtigsten
              Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Zugriffsdaten
            </h2>
            <p>
              Beim Besuch unserer Website wird Ihre IP-Adresse, Beginn und Ende
              der Sitzung für die Dauer dieser Sitzung erfasst. Dies ist
              technisch bedingt und stellt damit ein berechtigtes Interesse
              i.S.v. Art 6 Abs 1 lit f DSGVO dar. Soweit im Folgenden nichts
              Anderes geregelt wird, werden diese Daten von uns nicht
              weiterverarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Kontakt mit uns
            </h2>
            <p>
              Wenn Sie per E-Mail Kontakt mit mir aufnehmen, werden Ihre
              angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen bei uns gespeichert. Dies ist ein berechtigtes
              Interesse i.S.d. DSGVO. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Cookies
            </h2>
            <p>
              Unsere Website verwendet so genannte Cookies. Dabei handelt es
              sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem
              Endgerät abgelegt werden. Sie richten keinen Schaden an.
            </p>
            <p className="mt-3">
              Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu
              gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert,
              bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim
              nächsten Besuch wiederzuerkennen.
            </p>
            <p className="mt-3">
              Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so
              einrichten, dass er Sie über das Setzen von Cookies informiert und
              Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von
              Cookies kann die Funktionalität unserer Website eingeschränkt sein.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Ihre Rechte
            </h2>
            <p>
              Ihnen stehen bezüglich Ihrer von uns verarbeiteten Daten
              grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
              Ansprüche sonst in einer Weise verletzt worden sind, können Sie
              sich bei uns unter{" "}
              <a
                href="mailto:praxis@alexandralang.at"
                className="text-primary hover:underline"
              >
                praxis@alexandralang.at
              </a>{" "}
              oder der Datenschutzbehörde beschweren.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-foreground mb-3">
              Kontaktdaten
            </h2>
            <p>
              Alexandra Lang, MSc
              <br />
              Gusentalstraße 13
              <br />
              4222 St. Georgen an der Gusen
            </p>
            <p className="mt-3">
              Telefon:{" "}
              <a
                href="tel:+4367761034431"
                className="text-primary hover:underline"
              >
                +43 677 61034431
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:praxis@alexandralang.at"
                className="text-primary hover:underline"
              >
                praxis@alexandralang.at
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
