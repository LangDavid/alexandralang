import { m } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24 px-6">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl italic text-white leading-relaxed">
          „Was ist, darf sein, und was sein darf, kann sich verändern."
        </blockquote>
        <cite className="block mt-6 text-white/90 font-body text-sm tracking-wider not-italic">
          — Werner Bock
        </cite>
      </m.div>
    </section>
  );
};

export default QuoteSection;
