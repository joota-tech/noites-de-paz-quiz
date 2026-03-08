import { motion } from "framer-motion";
import moonImage from "@/assets/moon-stars.png";

interface QuizStorytellingProps {
  onNext: () => void;
}

const QuizStorytelling = ({ onNext }: QuizStorytellingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center px-5 py-8 max-w-lg mx-auto"
    >
      <motion.img
        src={moonImage}
        alt="Lua e estrelas"
        className="w-24 h-24 object-contain mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      />

      <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
        ✨ A história por trás do método
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-6 leading-tight">
        "Eu já estive exatamente<br />onde você está"
      </h2>

      <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          <em className="text-foreground">
            "Durante meses, a hora de dormir era o momento mais difícil do meu dia."
          </em>
        </p>

        <p>
          Meu filho chorava, pedia para eu ficar, tinha medo do escuro. E eu? Eu me
          sentia a pior mãe do mundo. Perdia a paciência, gritava… e depois chorava
          de culpa no banheiro.
        </p>

        <p>
          Tentei de tudo: músicas, luz noturna, rotinas rígidas. Nada funcionava
          de verdade. Ele continuava ansioso. E eu, exausta.
        </p>

        <p className="text-foreground font-medium">
          Até que uma noite, sem forças, eu simplesmente me sentei na cama dele,
          segurei suas mãozinhas e comecei a contar uma história. Uma história
          suave, cheia de carinho e fé. Falei de anjos que cuidam dele enquanto
          dorme. De um Deus que nunca desliga a luz.
        </p>

        <p>
          E pela primeira vez em semanas… ele dormiu em paz. Com um sorriso.
          Segurando minha mão.
        </p>

        <p>
          Naquela noite, nasceu o
          <strong className="text-primary"> Método Noites de Paz™</strong>.
        </p>

        <p>
          Eu pesquisei, estudei, orei… e criei um método simples que combina
          histórias suaves, segurança emocional e fé cristã para ajudar crianças
          a dormirem com mais calma.
        </p>

        <p className="text-foreground font-medium">
          E o mais lindo? Outras mães começaram a usar e me escrever:
          <em> "Minha filha pediu pra ouvir de novo!"</em>,
          <em> "Ele dormiu em 10 minutos!"</em>,
          <em> "Agora a hora de dormir é nosso momento especial."</em>
        </p>

        <p className="text-foreground">
          Se você chegou até aqui, é porque seu coração de mãe está buscando
          uma saída. E eu quero te mostrar que ela existe. 💛
        </p>
      </div>

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
