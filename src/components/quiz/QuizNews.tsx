import { motion } from "framer-motion";
import moonStars from "@/assets/moon-stars.png";

interface QuizNewsProps {
  onNext: () => void;
}

const QuizNews = ({ onNext }: QuizNewsProps) => {
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

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
        {/* News Portal Style */}
        <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-border">
          {/* Portal top bar */}
          <div className="bg-night text-primary-foreground/70 text-[11px] px-4 py-1.5 flex items-center gap-3 font-body">
            <span className="font-bold text-primary-foreground/90">saúde.com</span>
            <span className="opacity-40">|</span>
            <span>bem-estar</span>
            <span className="opacity-40">|</span>
            <span>família</span>
            <span className="opacity-40">|</span>
            <span>maternidade</span>
          </div>

          {/* Red banner */}
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{ background: "linear-gradient(135deg, hsl(0 72% 42%), hsl(350 65% 50%))" }}
          >
            <span className="text-primary-foreground text-xs font-bold opacity-70">≡ MENU</span>
            <span className="text-primary-foreground text-xs sm:text-sm font-bold uppercase tracking-wider">
              Especial Saúde Infantil
            </span>
          </div>

          {/* Article */}
          <div className="bg-primary-foreground px-5 sm:px-8 pt-8 pb-6">
            {/* Tag */}
            <div className="flex justify-center mb-5">
              <span className="bg-gold text-night text-[11px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                Alerta de Saúde
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-night leading-[1.15] mb-5 text-center">
              Ansiedade infantil na hora de dormir cresce 40% e especialistas alertam pais
            </h2>

            {/* Subtitle */}
            <p className="text-night-soft text-sm sm:text-base leading-relaxed mb-6 text-center">
              Estudo da Associação Brasileira de Pediatria revela que 4 em cada 10 crianças
              entre 2 e 8 anos apresentam sinais de insegurança emocional na hora de dormir.
            </p>

            {/* Author row */}
            <div className="flex items-center justify-between border-t border-b border-border py-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-warm flex items-center justify-center text-primary-foreground text-xs font-bold">
                  SP
                </div>
                <div>
                  <p className="text-xs font-bold text-night">Por Saúde & Pediatria</p>
                  <p className="text-[11px] text-muted-foreground">08/03/2026 · Atualizado há 2 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {["f", "𝕏", "💬", "✈"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-[10px]"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4 text-sm text-night-soft leading-[1.8]">
              <p>
                Os números são alarmantes: o Brasil registrou um aumento de
                <strong className="text-night"> 40% nos casos de ansiedade infantil noturna</strong> nos
                últimos três anos.
              </p>
              <p>
                Os principais sintomas incluem: medo intenso do escuro, resistência para ir à cama,
                agitação excessiva antes de dormir e pesadelos frequentes.
              </p>
              <p>
                Segundo especialistas, essa insegurança está diretamente ligada à
                <strong className="text-night"> falta de rituais emocionais e espirituais</strong> que
                transmitam à criança uma sensação de proteção.
              </p>

              <blockquote className="border-l-4 border-rose-warm pl-4 py-2 my-4 italic text-night">
                "A criança que não se sente emocionalmente segura à noite carrega essa
                ansiedade para todas as áreas da vida."
                <span className="block text-xs not-italic text-muted-foreground mt-1">
                  — Dra. Fernanda Costa, psicóloga infantil
                </span>
              </blockquote>

              <p>
                O impacto nas mães também é significativo:
                <strong className="text-night"> 78% relatam sentir culpa, exaustão
                e impotência</strong> por não conseguir ajudar seus filhos a dormirem em paz.
              </p>
            </div>

            {/* Emotional transition */}
            <div className="mt-8 pt-5 border-t border-border">
              <p className="text-sm text-foreground font-medium text-center leading-relaxed">
                💛 Se você se identificou, saiba que você não está sozinha.
                Responda as próximas perguntas e descubra o que está acontecendo
                com seu filho.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.button
          onClick={onNext}
          className="mt-8 w-full max-w-sm mx-auto block py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg transition-all duration-300"
          style={{ background: "linear-gradient(135deg, hsl(270 45% 40%), hsl(260 55% 55%))" }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Continuar o Quiz →
        </motion.button>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 mt-4 mb-8 text-xs text-muted-foreground">
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

export default QuizNews;
