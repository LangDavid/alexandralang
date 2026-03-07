import { motion } from "framer-motion";
import { Heart, Brain, Flame, ShieldAlert } from "lucide-react";

const services = [
  { icon: Heart, title: "Lebenskrise", desc: "Begleitung in schwierigen Lebensphasen und bei persönlichen Umbrüchen." },
  { icon: Brain, title: "Depressive Episode", desc: "Unterstützung bei depressiven Verstimmungen und Antriebslosigkeit." },
  { icon: Flame, title: "Stress & Burnout", desc: "Strategien zur Stressbewältigung und Prävention von Erschöpfung." },
  { icon: ShieldAlert, title: "Angststörung", desc: "Professionelle Hilfe bei Ängsten, Panikattacken und innerer Unruhe." },
];

const ServicesSection = () => {
  return (
    <section id="angebot" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">Angebot</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Schwerpunkte
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-light text-lg">
            Ich arbeite mit <strong className="font-medium text-foreground">jungen Erwachsenen ab 18 Jahren</strong>,{" "}
            <strong className="font-medium text-foreground">Erwachsenen</strong> und{" "}
            <strong className="font-medium text-foreground">älteren Menschen</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
