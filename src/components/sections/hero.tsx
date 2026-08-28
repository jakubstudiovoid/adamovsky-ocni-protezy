import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-dvh items-end overflow-hidden">
      <img
        src="/images/hero-atelier.webp"
        alt="Ruce skláře nad kahanem foukají skleněnou oční protézu"
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
      <div className="absolute inset-0 bg-bg/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <motion.p
          className="text-xs tracking-[0.28em] text-fg/80 uppercase"
          initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          Jablonec nad Nisou · od 1992
        </motion.p>
        <motion.h1
          className="mt-6 max-w-4xl text-[2.75rem] text-display sm:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease, delay: 0.2 }}
        >
          Sklo, které
          <br />
          vrací pohled.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-fg/75 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease, delay: 0.38 }}
        >
          Petr Adamovský vyrábí skleněné oční protézy ručně, nad kahanem, na
          počkání — jako jeden z posledních v Česku.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.52 }}
        >
          <Button asChild size="lg" variant="iris">
            <Link to="/navsteva">Objednat návštěvu</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/remeslo">O řemesle</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
