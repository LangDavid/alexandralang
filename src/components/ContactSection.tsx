import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Kontakt
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nehmen Sie Kontakt auf
          </h2>
          <p className="text-muted-foreground font-light max-w-lg mx-auto mb-12">
            Ich freue mich auf Ihre Anfrage. Vereinbaren Sie ein unverbindliches Erstgespräch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-8"
        >
          <a href="tel:+4367761034431" className="group flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-card transition-colors">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <span className="text-foreground font-medium">+43 677 61034431</span>
          </a>

          <a href="mailto:praxis@alexandralang.at" className="group flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-card transition-colors">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <span className="text-foreground font-medium">praxis@alexandralang.at</span>
          </a>

          <a href="https://maps.app.goo.gl/QVTSmKmdKUm3jCuv6" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl hover:bg-card transition-colors">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <span className="text-foreground font-medium text-center">
              Gusentalstraße 13<br />4222 St. Georgen/Gusen
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
