import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mother-child.png";

interface QuizIntroProps {
  onNext: () => void;
}

const QuizIntro = ({ onNext }: QuizIntroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center px-5 py-8 max-w-lg mx-auto"
    >
      <motion.img
        src={heroImage}
        alt="Mãe abraçando filho dormindo"
        className="w-56 h-56 object-contain mb-6 animate-float"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <motion.p
        className="text-sm font-semibold tracking-widest uppercase text-lavender mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        ✨ Método Noites de Paz™
      </motion.p>

      <motion.h1
        className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Mamãe, as noites aí em casa<br />
        <span className="text-lavender">estão sendo difíceis?</span>
      </motion.h1>

      <motion.p
        className="text-base text-muted-foreground leading-relaxed mb-6 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Eu sei como é sentir o coração apertado vendo seu filho lutando para dormir.
        O medo, a agitação, o choro… e a culpa que vem junto.
      </motion.p>

      <motion.p
        className="text-base text-foreground font-medium leading-relaxed mb-8 max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        Responda este quiz de 2 minutos e descubra o que está
        acontecendo com seu filho na hora de dormir — e como você pode
        transformar esse momento. 🌙
      </motion.p>

      <motion.button
        onClick={onNext}
        className="w-full max-w-xs py-4 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        Quero Descobrir →
      </motion.button>

      <motion.p
        className="text-xs text-muted-foreground mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        🔒 100% gratuito e confidencial
      </motion.p>
    </motion.div>
  );
};

export default QuizIntro;
