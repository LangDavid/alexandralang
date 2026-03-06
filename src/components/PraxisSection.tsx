import { motion } from "framer-motion";
import praxisImg from "@/assets/praxis.jpg";
import { MapPin } from "lucide-react";

const PraxisSection = () => {
  return (
    <section id="praxis" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={praxisImg}
            alt="Praxisraum von Alexandra Lang"
            className="w-full h-80 md:h-[450px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Die Praxis
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Praxisraum
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-8">
            Die Räumlichkeiten befinden sich in der Gusentalstraße 13 in 4222
            St. Georgen an der Gusen. Ein ruhiger, einladender Ort, der eine
            vertrauensvolle Atmosphäre für unsere gemeinsame Arbeit bietet.
          </p>
          <div className="flex items-start gap-3 text-foreground">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="font-body">
              Gusentalstraße 13
              <br />
              4222 St. Georgen an der Gusen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PraxisSection;
