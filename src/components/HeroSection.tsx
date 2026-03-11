import { m } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <m.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
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
            Klinisch-psychologische Beratung und Behandlung im Einzelsetting in St. Georgen an der Gusen.
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
        </m.div>

        <m.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-sage-light" />
            <picture>
              <source
                srcSet="/portrait-320.webp 320w, /portrait-420.webp 420w, /portrait-640.webp 640w"
                sizes="(max-width: 768px) 320px, 420px"
                type="image/webp"
              />
              <img
                src="/portrait-640.webp"
                alt="Alexandra Lang - Klinische Psychologin"
                width={420}
                height={423}
                fetchPriority="high"
                decoding="sync"
                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
              />
            </picture>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;
