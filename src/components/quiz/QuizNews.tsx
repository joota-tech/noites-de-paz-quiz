import { motion } from "framer-motion";

interface QuizNewsProps {
  onNext: () => void;
}

const QuizNews = ({ onNext }: QuizNewsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center px-2 sm:px-5 py-4 max-w-2xl mx-auto"
    >
      {/* Top bar - portal style */}
      <div className="w-full rounded-t-xl overflow-hidden">
        {/* Navigation bar */}
        <div className="bg-[hsl(0,0%,13%)] text-[hsl(0,0%,80%)] text-[11px] px-4 py-1.5 flex items-center gap-3 font-sans">
          <span className="font-bold text-[hsl(0,0%,95%)]">saúde.com</span>
          <span className="opacity-60">|</span>
          <span>bem-estar</span>
          <span className="opacity-60">|</span>
          <span>família</span>
          <span className="opacity-60">|</span>
          <span>maternidade</span>
        </div>

        {/* Red header bar */}
        <div className="bg-[hsl(0,72%,45%)] text-white flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold opacity-70">≡ MENU</span>
          </div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
            Especial Saúde Infantil
          </span>
        </div>

        {/* Article content */}
        <div className="bg-white px-5 sm:px-10 pt-8 pb-6">
          {/* Tag */}
          <div className="flex justify-center mb-6">
            <span className="bg-[hsl(40,90%,55%)] text-[hsl(0,0%,13%)] text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
              Alerta de Saúde
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.7rem] font-black text-[hsl(0,0%,10%)] leading-[1.15] mb-5 text-center sm:text-left">
            Ansiedade infantil na hora de dormir cresce 40% e especialistas alertam pais
          </h2>

          {/* Subtitle */}
          <p className="text-[hsl(0,0%,35%)] text-base sm:text-lg leading-relaxed mb-6 text-center sm:text-left">
            Estudo da Associação Brasileira de Pediatria revela que 4 em cada 10 crianças
            entre 2 e 8 anos apresentam sinais de insegurança emocional na hora de dormir.
            Especialistas dizem: "As crianças estão pedindo socorro em silêncio."
          </p>

          {/* Author & date row */}
          <div className="flex items-center justify-between border-t border-b border-[hsl(0,0%,88%)] py-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[hsl(0,72%,45%)] flex items-center justify-center text-white text-xs font-bold">
                SP
              </div>
              <div>
                <p className="text-sm font-bold text-[hsl(0,0%,20%)]">Por Saúde & Pediatria</p>
                <p className="text-xs text-[hsl(0,0%,55%)]">08/03/2026 · Atualizado há 2 horas</p>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {["f", "𝕏", "💬", "✈", "in", "⤴"].map((icon, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full bg-[hsl(0,0%,93%)] flex items-center justify-center text-[hsl(0,0%,40%)] text-xs cursor-default"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Article body */}
          <div className="space-y-4 text-[15px] text-[hsl(0,0%,25%)] leading-[1.75]">
            <p>
              Os números são alarmantes: o Brasil registrou um aumento de
              <strong className="text-[hsl(0,0%,10%)]"> 40% nos casos de ansiedade infantil noturna</strong> nos
              últimos três anos, segundo levantamento inédito da Associação Brasileira de Pediatria.
            </p>

            <p>
              Os principais sintomas incluem: medo intenso do escuro, resistência para ir à cama,
              agitação excessiva antes de dormir, pesadelos frequentes e dificuldade de separação
              dos pais na hora de dormir.
            </p>

            <p>
              Segundo especialistas, essa insegurança está diretamente ligada à
              <strong className="text-[hsl(0,0%,10%)]"> falta de rituais emocionais e espirituais</strong> que
              transmitam à criança uma sensação de proteção e pertencimento.
            </p>

            <blockquote className="border-l-4 border-[hsl(0,72%,45%)] pl-4 py-2 my-4 italic text-[hsl(0,0%,15%)]">
              "A criança que não se sente emocionalmente segura à noite carrega essa
              ansiedade para todas as áreas da vida."
              <span className="block text-sm not-italic text-[hsl(0,0%,50%)] mt-1">
                — Dra. Fernanda Costa, psicóloga infantil
              </span>
            </blockquote>

            <p>
              O impacto nas mães também é significativo:
              <strong className="text-[hsl(0,0%,10%)]"> 78% relatam sentir culpa, exaustão
              e impotência</strong> por não conseguir ajudar seus filhos a dormirem em paz.
            </p>
          </div>

          {/* Emotional transition */}
          <div className="mt-8 pt-5 border-t border-[hsl(0,0%,88%)]">
            <p className="text-[15px] text-[hsl(0,0%,25%)] font-medium text-center leading-relaxed">
              💛 Se você se identificou com essa realidade, saiba que você não está sozinha.
              Responda as próximas perguntas e descubra o que pode estar acontecendo
              com seu filho.
            </p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={onNext}
        className="mt-8 w-full max-w-xs py-4 px-8 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        Continuar o Quiz →
      </motion.button>
    </motion.div>
  );
};

export default QuizNews;
