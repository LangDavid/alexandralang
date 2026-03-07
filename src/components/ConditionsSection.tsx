import { motion } from "framer-motion";
import { ClipboardList, Clock, Euro, CalendarX, BadgeEuro } from "lucide-react";

const items = [
  {
    icon: ClipboardList,
    title: "Ablauf",
    content: [
      "Terminanfragen können per E-Mail oder telefonisch erfolgen.",
      "Im Anschluss kläre ich ab, ob ich Sie in Ihrem Anliegen unterstützen kann.",
      "Beim persönlichen Erstgespräch werden aktuelle Problembereiche definiert und die therapeutischen Ziele festgelegt.",
      "Dauer und Frequenz weiterer Termine werden vereinbart.",
    ],
  },
  {
    icon: Clock,
    title: "Dauer und Frequenz",
    content:
      'Eine Einheit dauert 50 Minuten und findet, je nach Anliegen und Fortschritt der Beratung/Behandlung, wöchentlich oder 14-tägig statt. Die Psychologie bietet ein ressourcen- und lösungsorientiertes Setting. Ich arbeite nach dem Leitsatz \u201Eso viel wie nötig, so kurz wie möglich\u201C.',
  },
  {
    icon: CalendarX,
    title: "Absageregelung",
    content:
      "Termine werden für Sie reserviert. Absagen oder Verschiebungen sind bis zu 24 Stunden vorher möglich. Bei späteren Absagen wird der volle Stundensatz in Rechnung gestellt.",
  },
];

const KostenCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="bg-background rounded-2xl p-8"
  >
    <div className="flex items-center gap-4 mb-5">
      <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
        <Euro className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-heading text-xl text-foreground">Kosten</h3>
    </div>

    <div className="space-y-3 text-muted-foreground font-light text-sm leading-relaxed mb-5">
      <div className="flex items-baseline justify-between gap-4">
        <span>Klinisch-psychologische Beratung/Behandlung</span>
        <span className="font-heading text-foreground whitespace-nowrap">110 € <span className="text-xs text-muted-foreground font-body">/ 50 Min.</span></span>
      </div>
      <p className="pt-1">Die Bezahlung erfolgt über Online-Überweisung.</p>
    </div>

    <div className="bg-primary/10 rounded-xl p-4 flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
        <BadgeEuro className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          Seit 01.01.2024 zählt die klinisch-psychologische Behandlung als Kassenleistung. Nach ärztlicher Untersuchung erhalten Sie eine Rückerstattung von mind.
        </p>
        <p className="font-heading text-2xl text-primary mt-1">33,70 €</p>
      </div>
    </div>
  </motion.div>
);

const ConditionsSection = () => {
  return (
    <section id="rahmenbedingungen" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Informationen
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Rahmenbedingungen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ablauf */}
          {[items[0]].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
              </div>
              <ol className="space-y-3 text-muted-foreground font-light text-sm leading-relaxed list-decimal list-inside">
                {(item.content as string[]).map((step, j) => (
                  <li key={j}>{step}</li>
                ))}
              </ol>
            </motion.div>
          ))}

          {/* Kosten */}
          <KostenCard />

          {/* Dauer und Frequenz, Absageregelung */}
          {[items[1], items[2]].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {item.content as string}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
