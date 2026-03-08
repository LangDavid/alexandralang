import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.jpg";
import boepLogo from "@/assets/boep-logo.jpeg";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

const qualifications = [
  "Bachelorstudium Psychologie an der Universität Salzburg",
  "Masterstudium Psychologie an der Universität Salzburg",
  "Ausbildung zur Klinischen Psychologin bei der AAP Linz",
  "Fortbildung Ernährungspsychologie (Achtsam-Essen-Akademie)",
  "Mitglied im Berufsverband Österreichischer PsychologInnen",
  "Ausbildung zur diplomierten Yogalehrerin an der Vitalakademie in Linz",
];

const experience = [
  "Klinische Psychologin in eigener Praxis (seit 03/2023)",
  "Freiberufliche Tätigkeit als diplomierte Yogalehrerin (seit 03/2022)",
  "Klinische Psychologin im Gesundheitszentrum Enns (03/2023–09/2025)",
  "Berufs- und Bildungsberatung der WKO OÖ (10/2022–02/2023)",
  "Klinische Psychologin der Familiären Krisenbetreuung planB (10/2022–02/2023)",
  "Psychologin in der psychiatrischen Rehabilitation des Vortuna Gesundheitsresort Bad Leonfelden (09/2021–07/2022)",
  "Schulpsychologin der Bildungsdirektion NÖ (02/2020–08/2021)",
  "Psychologin bei der Telefonseelsorge in Linz (01/2020)",
];


const AboutSection = () => {
  return (
    <section id="ueber-mich" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Persönlich
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Über mich
          </h2>
        </motion.div>

        {/* Intro with portrait */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={portraitImg}
              alt="Alexandra Lang – Klinische Psychologin"
              className="w-full h-80 md:h-[450px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-muted-foreground font-light leading-relaxed mb-5">
              Mein Name ist Alexandra Lang (ehem. Peitl). Ich bin klinische Psychologin und
              diplomierte Yogalehrerin aus Langenstein. Stets auf der Suche, führten mich mein
              beruflicher sowie mein privater Weg auf spannende Reisen.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-5">
              Nach Abschluss meiner Schulausbildung absolvierte ich mein Psychologie-Studium in
              Salzburg. Ausbildungs- und Arbeitsstellen in verschiedenen psychosozialen und
              psychiatrischen Bereichen lehrten mich viel über den Menschen und den Umgang mit
              Problemen sowie eine professionelle therapeutische Behandlungsweise.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-5">
              Zudem lernte ich im Laufe der Jahre die Wirkung achtsamkeitsorientierter Zugänge
              mittels Yoga kennen und lieben, welche ich in meine Arbeitsweise miteinfließen lasse.
            </p>
            <div className="flex items-start gap-3 bg-card rounded-xl p-4">
              <Heart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground font-medium text-sm leading-relaxed">
                Das Herzstück meiner Arbeit liegt in den Konzepten der Achtsamkeit, Annahme und
                Wertschätzung.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Qualifikation & Erfahrung */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Qualifikation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Berufliche Qualifikation</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-light text-sm leading-relaxed">
              {qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">–</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Berufliche Tätigkeit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Berufliche Tätigkeit</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground font-light text-sm leading-relaxed">
              {experience.map((e, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">–</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
