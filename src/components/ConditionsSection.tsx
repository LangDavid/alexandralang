import { motion } from "framer-motion";
import { ClipboardList, Clock, Euro, CalendarX } from "lucide-react";

const items = [
  {
    icon: ClipboardList,
    title: "Ablauf",
    content: [
      "Terminanfragen können per E-Mail oder telefonisch erfolgen.",
      "In einem anschließenden kurzen Telefongespräch kläre ich ab, ob ich Sie in Ihrem Anliegen unterstützen kann.",
      "Im persönlichen Erstgespräch werden aktuelle Problembereiche definiert und die therapeutischen Ziele festgelegt.",
      "Dauer und Frequenz weiterer Termine werden vereinbart.",
    ],
  },
  {
    icon: Clock,
    title: "Dauer und Frequenz",
    content:
      "Eine Einheit dauert 50 Minuten und findet, je nach Anliegen und Fortschritt der Beratung/Behandlung, wöchentlich oder 14-tägig statt. Die Psychologie bietet ein ressourcen- und lösungsorientiertes Setting. Ich arbeite nach dem Leitsatz „so viel wie nötig, so kurz wie möglich".",
  },
  {
    icon: Euro,
    title: "Kosten",
    content:
      "Eine klinisch-psychologische Beratung/Behandlung kostet 110 Euro / 50 Minuten. Entspannungstraining kostet 80 Euro / 45 Minuten pro Termin. Die Bezahlung erfolgt über Online-Überweisung. Da die klinisch-psychologische Behandlung seit 01.01.2024 als Kassenleistung zählt, ist nach ärztlicher Untersuchung (Haus- oder FachärztIn) eine Kostenrückerstattung von mind. 33,70 Euro über Ihre Sozialversicherung möglich.",
  },
  {
    icon: CalendarX,
    title: "Absageregelung",
    content:
      "Termine werden für Sie reserviert. Absagen oder Verschiebungen sind bis zu 24 Stunden vorher möglich. Bei späteren Absagen wird der volle Stundensatz in Rechnung gestellt.",
  },
];

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
          {items.map((item, i) => (
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
                <h3 className="font-heading text-xl text-foreground">
                  {item.title}
                </h3>
              </div>

              {Array.isArray(item.content) ? (
                <ol className="space-y-3 text-muted-foreground font-light text-sm leading-relaxed list-decimal list-inside">
                  {item.content.map((step, j) => (
                    <li key={j}>{step}</li>
                  ))}
                </ol>
              ) : (
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {item.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
