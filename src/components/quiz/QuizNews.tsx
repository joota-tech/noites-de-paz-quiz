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
      className="flex flex-col items-center px-5 py-8 max-w-lg mx-auto"
    >
      <div className="w-full bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Alerta
          </span>
          <span className="text-xs text-muted-foreground">Saúde Infantil • 2026</span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
          Ansiedade infantil na hora de dormir cresce 40% e especialistas alertam:
          <span className="text-rose-warm"> "As crianças estão pedindo socorro em silêncio"</span>
        </h2>

        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Um estudo recente da Associação Brasileira de Pediatria revelou que
            <strong className="text-foreground"> 4 em cada 10 crianças</strong> entre 2 e 8 anos
            apresentam sinais de ansiedade e insegurança emocional no momento de dormir.
          </p>

          <p>
            Os principais sintomas incluem: medo do escuro, resistência para ir à cama,
            agitação excessiva, pesadelos frequentes e dificuldade de separação dos pais
            na hora de dormir.
          </p>

          <p>
            Segundo especialistas, essa insegurança está diretamente ligada à
            <strong className="text-foreground"> falta de rituais emocionais e espirituais </strong>
            que transmitam à criança uma sensação de proteção e pertencimento.
          </p>

          <p>
            <em className="text-foreground">
              "A criança que não se sente emocionalmente segura à noite carrega essa
              ansiedade para todas as áreas da vida"
            </em>
            , afirma a psicóloga infantil Dra. Fernanda Costa.
          </p>

          <p>
            O impacto nas mães também é significativo:
            <strong className="text-foreground"> 78% relatam sentir culpa, exaustão
            e impotência</strong> por não conseguir ajudar seus filhos a dormirem em paz.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-sm text-foreground font-medium text-center leading-relaxed">
            💛 Se você se identificou com essa realidade, saiba que você não está sozinha.
            Responda as próximas perguntas e descubra o que pode estar acontecendo
            com seu filho.
          </p>
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
