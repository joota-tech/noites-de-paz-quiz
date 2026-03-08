import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mother-child.png";
import moonStars from "@/assets/moon-stars.png";

interface QuizIntroProps {
  onNext: () => void;
}

const QuizIntro = ({ onNext }: QuizIntroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center min-h-screen bg-background"
    >
      {/* Logo / Brand */}
      <motion.div
        className="pt-6 pb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={moonStars} alt="Noite de Paz" className="w-16 h-16 mx-auto mb-1" />
        <p className="text-sm font-bold tracking-widest uppercase text-lavender">
          Método Noite de Paz™
        </p>
      </motion.div>

      {/* Hero Banner with Gradient */}
      <motion.div
        className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="relative w-full" style={{ background: "linear-gradient(135deg, hsl(270 45% 40%), hsl(260 55% 55%), hsl(280 40% 50%))" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          <img
            src={heroImage}
            alt="Mãe abraçando filho dormindo"
            className="w-full h-auto object-cover relative z-10"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
            <p className="text-primary-foreground font-bold text-lg md:text-xl drop-shadow-lg">
              Aproveite — vagas limitadas.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-5 max-w-lg mx-auto mt-6">
        <motion.h1
          className="text-3xl md:text-4xl font-display font-bold text-lavender leading-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Método Noite de Paz
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-foreground leading-relaxed mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          Descubra como mães estão transformando as noites do seu filho com o{" "}
          <span className="font-bold text-lavender">Método Noite de Paz</span>
        </motion.p>

        <motion.p
          className="text-sm text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          Criado pela especialista <span className="font-bold text-foreground">Camila Rezende</span> — Educadora do Sono Infantil
        </motion.p>

        {/* Urgency */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 text-sm text-rose-warm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <span>⚠️</span>
          <p>
            Não saia do teste — geramos apenas{" "}
            <span className="font-bold">um diagnóstico por pessoa</span>.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={onNext}
          className="w-full max-w-sm py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, hsl(270 45% 40%), hsl(260 55% 55%))" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Quero saber se funciona para meu filho! 🌙
        </motion.button>

        {/* Social Proof Badges */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-5 mb-8 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span className="flex items-center gap-1">
            <span className="text-lavender">✓</span> 15.000+ mães atendidas
          </span>
          <span className="flex items-center gap-1">
            <span className="text-lavender">✓</span> 100% Natural
          </span>
          <span className="flex items-center gap-1">
            <span className="text-lavender">✓</span> Sem choro
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuizIntro;
