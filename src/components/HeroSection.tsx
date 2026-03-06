import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Klinische Psychologin
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6">
            Alexandra
            <br />
            <span className="text-primary italic">Lang</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg mb-8">
            Klinisch-psychologische Beratung und Behandlung im Einzelsetting.
            Ein sicherer Raum für Veränderung und persönliches Wachstum.
          </p>
          <a
            href="#angebot"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("angebot")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-medium text-sm tracking-wide hover:bg-sage-dark transition-colors duration-300"
          >
            Zum Angebot
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-sage-light" />
            <img
              src={portraitImg}
              alt="Alexandra Lang - Klinische Psychologin"
              className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
