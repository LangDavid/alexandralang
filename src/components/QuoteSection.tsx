import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="bg-primary py-16 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl italic text-primary-foreground leading-relaxed">
          „Das seltsame Paradoxon ist, dass, wenn ich mich so akzeptiere wie ich bin,
          ich die Möglichkeit erlange, mich zu verändern."
        </blockquote>
        <cite className="block mt-6 text-primary-foreground/90 font-body text-sm tracking-wider not-italic">
          — Carl Rogers
        </cite>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
