import { motion } from "framer-motion";
import authorImage from "@/assets/author-daughter.png";
import moonStars from "@/assets/moon-stars.png";

interface QuizStorytellingProps {
  onNext: () => void;
}

const QuizStorytelling = ({ onNext }: QuizStorytellingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center min-h-screen bg-background"
    >
      {/* Brand Header */}
      <div className="w-full py-4 flex justify-center border-b border-border">
        <div className="flex items-center gap-2">
          <img src={moonStars} alt="Noite de Paz" className="w-8 h-8" />
          <span className="text-sm font-bold tracking-wider uppercase text-lavender">
            Noite de Paz™
          </span>
        </div>
      </div>

      <div className="w-full max-w-lg mx-auto px-4 pt-6 pb-8">
        {/* Author section */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-lavender/40 shadow-lg">
              <img
                src={authorImage}
                alt="Camila Rezende - Criadora do Método Noite de Paz"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
              Criadora do Método
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground">Camila Rezende</h3>
          <p className="text-xs text-muted-foreground">
            Mãe, educadora e criadora do método Noite de Paz
          </p>
        </motion.div>

        <p className="text-xs font-semibold tracking-widest uppercase text-gold text-center mb-2">
          ✨ A história por trás do método
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-6 leading-tight">
          "Eu já estive exatamente<br />onde você está"
        </h2>

        {/* Story cards */}
        <div className="w-full space-y-4">
          {/* Card 1 — A dor */}
          <motion.div
            className="bg-card rounded-2xl p-5 shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-rose-warm mb-2">
              😔 O que eu vivia
            </p>
            <p className="text-sm text-foreground italic leading-relaxed mb-3">
              "Durante meses, a hora de dormir era o momento mais difícil do meu dia."
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Meu filho chorava, pedia para eu ficar, tinha medo do escuro. E eu? Eu me
              sentia a pior mãe do mundo. Perdia a paciência, gritava… e depois chorava
              de culpa no banheiro.
            </p>
          </motion.div>

          {/* Card 2 — Tentativas */}
          <motion.div
            className="bg-card rounded-2xl p-5 shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              🔄 O que eu tentei
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tentei de tudo: músicas, luz noturna, rotinas rígidas. Nada funcionava
              de verdade. Ele continuava ansioso. E eu, exausta.
            </p>
          </motion.div>

          {/* Card 3 — A virada */}
          <motion.div
            className="bg-card rounded-2xl p-5 shadow-sm border-2 border-lavender/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-lavender mb-2">
              💛 A noite que mudou tudo
            </p>
            <p className="text-sm text-foreground font-medium leading-relaxed">
              Até que uma noite, sem forças, eu simplesmente me sentei na cama dele,
              segurei suas mãozinhas e comecei a contar uma história. Uma história
              suave, cheia de carinho e fé.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              E pela primeira vez em semanas… ele dormiu em paz. Com um sorriso.
              Segurando minha mão.
            </p>
            <p className="text-sm text-foreground mt-3">
              Naquela noite, nasceu o
              <strong className="text-lavender"> Método Noite de Paz™</strong>.
            </p>
          </motion.div>

          {/* Card 4 — Prova social */}
          <motion.div
            className="bg-card rounded-2xl p-5 shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-gold mb-3">
              ⭐ O que outras mães dizem
            </p>
            <div className="space-y-2">
              {[
                "Minha filha pediu pra ouvir de novo!",
                "Ele dormiu em 10 minutos!",
                "Agora a hora de dormir é nosso momento especial.",
              ].map((text, i) => (
                <p key={i} className="text-sm text-foreground italic bg-lavender-soft rounded-xl px-4 py-2.5">
                  "{text}"
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.p
          className="text-center text-sm text-foreground mt-6 leading-relaxed px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Se você chegou até aqui, é porque seu coração de mãe está buscando
          uma saída. E eu quero te mostrar que ela existe. 💛
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={onNext}
          className="mt-6 w-full max-w-sm mx-auto block py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg transition-all duration-300"
          style={{ background: "linear-gradient(135deg, hsl(270 45% 40%), hsl(260 55% 55%))" }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver Meu Resultado →
        </motion.button>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 mt-4 mb-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="text-lavender">✓</span> 15.000+ mães
          </span>
          <span className="flex items-center gap-1">
            <span className="text-lavender">✓</span> 100% Natural
          </span>
          <span className="flex items-center gap-1">
            <span className="text-lavender">✓</span> Sem choro
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizStorytelling;
