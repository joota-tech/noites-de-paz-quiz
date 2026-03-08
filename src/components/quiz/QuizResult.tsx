import { motion } from "framer-motion";
import moonStars from "@/assets/moon-stars.png";

interface QuizResultProps {
  profile: "inseguro" | "agitado";
  onNext: () => void;
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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

      <div className="w-full max-w-lg mx-auto px-5 pt-6 pb-8">
        {/* Result badge */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-3" style={{ background: "linear-gradient(135deg, hsl(270 35% 92%), hsl(270 40% 85%))" }}>
            {data.emoji}
          </div>
          <span className="bg-lavender text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Seu Diagnóstico
          </span>
        </motion.div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-6 leading-tight">
          {data.title}
        </h2>

        {/* Profile card */}
        <motion.div
          className="w-full bg-card rounded-2xl p-6 shadow-sm border border-border mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            {data.description.map((text, i) => (
              <p key={i} className="whitespace-pre-line">{text}</p>
            ))}
          </div>

          <p className="text-sm text-foreground font-medium mt-5 mb-2">{data.highlightIntro}</p>
          <div className="space-y-2 mb-4">
            {data.highlights.map((h, i) => (
              <p key={i} className="text-sm text-foreground flex items-center gap-2">
                <span className="text-gold">✨</span> {h}
              </p>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{data.conclusion}</p>
        </motion.div>

        {/* Emotional bridge */}
        <motion.div
          className="w-full bg-lavender-soft rounded-2xl p-6 border border-lavender/30 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-foreground leading-relaxed">
            Independentemente do perfil, seu filho <strong>não precisa continuar sofrendo todas as noites.</strong>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            Existe uma forma gentil, espiritual e comprovada de transformar a hora de dormir no momento mais acolhedor do dia.
          </p>
        </motion.div>

        {/* CTA section */}
        <motion.div
          className="w-full bg-card rounded-2xl p-6 shadow-sm border border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-muted-foreground mb-2">
            Você pode continuar enfrentando noites difíceis…
          </p>
          <p className="font-display text-xl font-bold text-foreground mb-6">
            Ou pode transformar a hora de dormir<br />
            no momento mais especial do dia. 🌙
          </p>

          <motion.a
            href="#"
            className="inline-block w-full py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg transition-all duration-300 text-center"
            style={{ background: "linear-gradient(135deg, hsl(270 45% 40%), hsl(260 55% 55%))" }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            👉 QUERO TRANSFORMAR AS NOITES DO MEU FILHO
          </motion.a>

          <p className="text-xs text-muted-foreground mt-4">
            🔒 Acesso imediato • Garantia de 7 dias • Pagamento seguro
          </p>
        </motion.div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
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

export default QuizResult;
