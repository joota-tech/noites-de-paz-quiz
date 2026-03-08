import { motion } from "framer-motion";
import authorImage from "@/assets/author-daughter.png";

interface QuizStorytellingProps {
  onNext: () => void;
}

const QuizStorytelling = ({ onNext }: QuizStorytellingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center px-4 py-8 max-w-lg mx-auto"
    >
      {/* Author photo */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
          <img
            src={authorImage}
            alt="Autora do Método Noites de Paz com sua filha"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">
          Criadora do Método
        </span>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg font-bold text-foreground"
      >
        Camila Rezende
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs text-muted-foreground -mt-1"
      >
        Mãe, educadora e criadora do método Noite Encantada
      </motion.p>

      <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">
        ✨ A história por trás do método
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-6 leading-tight">
        "Eu já estive exatamente<br />onde você está"
      </h2>

      {/* Story cards */}
      <div className="w-full space-y-4">
        {/* Card 1 — A dor */}
        <motion.div
          className="bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border border-border"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-destructive/70 mb-2">
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
          className="bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border border-border"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
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
          className="bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border border-primary/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
            💛 A noite que mudou tudo
          </p>
          <p className="text-sm text-foreground font-medium leading-relaxed">
            Até que uma noite, sem forças, eu simplesmente me sentei na cama dele,
            segurei suas mãozinhas e comecei a contar uma história. Uma história
            suave, cheia de carinho e fé. Falei de anjos que cuidam dele enquanto
            dorme. De um Deus que nunca desliga a luz.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            E pela primeira vez em semanas… ele dormiu em paz. Com um sorriso.
            Segurando minha mão.
          </p>
          <p className="text-sm text-foreground mt-3">
            Naquela noite, nasceu o
            <strong className="text-primary"> Método Noites de Paz™</strong>.
          </p>
        </motion.div>

        {/* Card 4 — Prova social */}
        <motion.div
          className="bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] border border-border"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75 }}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-gold mb-2">
            ⭐ O que outras mães dizem
          </p>
          <div className="space-y-2">
            <p className="text-sm text-foreground italic bg-muted/50 rounded-lg px-3 py-2">
              "Minha filha pediu pra ouvir de novo!"
            </p>
            <p className="text-sm text-foreground italic bg-muted/50 rounded-lg px-3 py-2">
              "Ele dormiu em 10 minutos!"
            </p>
            <p className="text-sm text-foreground italic bg-muted/50 rounded-lg px-3 py-2">
              "Agora a hora de dormir é nosso momento especial."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Closing message */}
      <motion.p
        className="text-center text-sm text-foreground mt-6 leading-relaxed px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Se você chegou até aqui, é porque seu coração de mãe está buscando
        uma saída. E eu quero te mostrar que ela existe. 💛
      </motion.p>

      <motion.button
        onClick={onNext}
        className="mt-8 w-full max-w-xs py-4 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        Ver Meu Resultado →
      </motion.button>
    </motion.div>
  );
};

export default QuizStorytelling;
