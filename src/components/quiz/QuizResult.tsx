import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mother-child.png";

interface QuizResultProps {
  profile: "inseguro" | "agitado";
}

const profiles = {
  inseguro: {
    emoji: "🌙",
    title: "Seu filho precisa se sentir emocionalmente seguro para conseguir dormir em paz",
    description: [
      "Seu filho não faz birra por mal.\nEle sente medo. Insegurança. Necessidade de proteção.",
      "Crianças emocionalmente sensíveis precisam sentir que estão seguras — por dentro e por fora — antes de relaxar.",
    ],
    highlights: [
      "o medo diminui",
      "o corpo relaxa",
      "o sono chega com mais facilidade",
    ],
    highlightIntro: "Quando elas se sentem protegidas:",
    conclusion: "A boa notícia é que isso pode ser desenvolvido com estímulos certos antes de dormir.",
  },
  agitado: {
    emoji: "🔥",
    title: "Seu filho tem a mente acelerada e precisa aprender a desacelerar antes de dormir",
    description: [
      "Seu filho não resiste ao sono por teimosia.",
      "A mente dele continua em alerta, como se o dia ainda não tivesse terminado.",
      "Crianças mentalmente agitadas precisam de transições suaves para reduzir o ritmo mental.",
    ],
    highlights: [
      "o corpo entende que é hora de descansar",
      "a ansiedade diminui",
      "o sono acontece naturalmente",
    ],
    highlightIntro: "Quando o cérebro desacelera:",
    conclusion: "Com estímulos adequados, é possível ensinar o cérebro da criança a relaxar.",
  },
};

const QuizResult = ({ profile }: QuizResultProps) => {
  const data = profiles[profile];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center px-5 py-8 max-w-lg mx-auto"
    >
      <motion.div
        className="text-5xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {data.emoji}
      </motion.div>

      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2 leading-tight">
        {data.title}
      </h2>

      <p className="text-sm text-muted-foreground text-center mb-6 max-w-sm">
        {data.subtitle}
      </p>

      <div className="w-full bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border mb-6">
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {data.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>

      <div className="w-full bg-lavender-soft rounded-2xl p-6 border border-border mb-8">
        <h3 className="font-display text-lg font-bold text-foreground mb-4">
          ✨ O que seu filho precisa:
        </h3>
        <ul className="space-y-3">
          {data.needs.map((need, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-gold mt-0.5">✓</span>
              <span>{need}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Transition to solution */}
      <div className="text-center mb-8">
        <img src={heroImage} alt="Mãe e filho" className="w-32 h-32 object-contain mx-auto mb-4" />
        <p className="font-display text-xl font-bold text-foreground mb-3">
          Mamãe, você não precisa enfrentar isso sozinha.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto mb-4">
          Existe um caminho gentil, espiritual e comprovado por outras mães
          para transformar a hora de dormir no momento mais especial do dia
          do seu filho.
        </p>
        <p className="text-sm text-foreground font-medium">
          O <strong className="text-primary">Método Noites de Paz™</strong> foi criado
          especialmente para crianças como o seu filho. Em apenas 15 minutos por noite,
          com histórias suaves e cheias de fé, seu filho vai aprender a dormir
          com calma, segurança e a presença de Deus.
        </p>
      </div>

      {/* CTA */}
      <div className="w-full bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border text-center">
        <p className="text-sm text-muted-foreground mb-2">
          Você pode continuar enfrentando noites difíceis…
        </p>
        <p className="font-display text-lg font-bold text-foreground mb-6">
          Ou pode transformar a hora de dormir<br />
          no momento mais especial do dia. 🌙
        </p>

        <motion.a
          href="#"
          className="inline-block w-full py-4 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 text-center"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          👉 QUERO TRANSFORMAR AS NOITES DO MEU FILHO
        </motion.a>

        <p className="text-xs text-muted-foreground mt-4">
          🔒 Acesso imediato • Garantia de 7 dias • Pagamento seguro
        </p>
      </div>
    </motion.div>
  );
};

export default QuizResult;
