import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import moonStars from "@/assets/moon-stars.png";

const questions = [
  {
    id: 1,
    emoji: "🌙",
    question: "Como geralmente são as noites aí na sua casa?",
    options: [
      { label: "A", text: "Meu filho demora muito para dormir e fica agitado", profile: "agitado" },
      { label: "B", text: "Ele inventa desculpas para sair da cama toda hora", profile: "agitado" },
      { label: "C", text: "Ele tem medo do escuro e pede para eu ficar por perto", profile: "inseguro" },
      { label: "D", text: "Cada noite é uma batalha diferente", profile: "agitado" },
    ],
  },
  {
    id: 2,
    emoji: "💔",
    question: "O que você sente nesses momentos?",
    options: [
      { label: "A", text: "Cansaço extremo", profile: "agitado" },
      { label: "B", text: "Impotência por não saber como acalmar", profile: "inseguro" },
      { label: "C", text: "Culpa por perder a paciência", profile: "inseguro" },
      { label: "D", text: "Tristeza por não conseguir transformar esse momento", profile: "inseguro" },
    ],
  },
  {
    id: 3,
    emoji: "😟",
    question: "Seu filho demonstra medo ou insegurança à noite?",
    options: [
      { label: "A", text: "Sim, quase todos os dias", profile: "inseguro" },
      { label: "B", text: "Às vezes, mas quando acontece é intenso", profile: "inseguro" },
      { label: "C", text: "Ele fica muito sensível e agitado", profile: "agitado" },
      { label: "D", text: "Percebo que ele quer segurança, mas não sabe pedir", profile: "inseguro" },
    ],
  },
  {
    id: 4,
    emoji: "✨",
    question: "Como você gostaria que fosse a hora de dormir?",
    options: [
      { label: "A", text: "Um momento calmo e sem estresse", profile: "agitado" },
      { label: "B", text: "Um momento de carinho e conexão", profile: "inseguro" },
      { label: "C", text: "Um momento de fé e proteção espiritual", profile: "inseguro" },
      { label: "D", text: "Um momento leve que meu filho aguardasse com alegria", profile: "agitado" },
    ],
  },
  {
    id: 5,
    emoji: "🙏",
    question: "Se existisse um método simples que ajudasse seu filho a dormir com mais paz em apenas 15 minutos por noite, você testaria?",
    options: [
      { label: "A", text: "Sim, eu preciso disso", profile: "inseguro" },
      { label: "B", text: "Com certeza, faria hoje mesmo", profile: "inseguro" },
      { label: "C", text: "Sim, quero muito noites mais tranquilas", profile: "agitado" },
      { label: "D", text: "Eu daria uma chance", profile: "agitado" },
    ],
  },
];

interface QuizQuestionsProps {
  onComplete: (profile: "inseguro" | "agitado") => void;
}

const QuizQuestions = ({ onComplete }: QuizQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (profile: string) => {
    const newAnswers = [...answers, profile];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 400);
    } else {
      const inseguroCount = newAnswers.filter((a) => a === "inseguro").length;
      const agitadoCount = newAnswers.filter((a) => a === "agitado").length;
      const result = inseguroCount >= agitadoCount ? "inseguro" : "agitado";
      setTimeout(() => onComplete(result), 400);
    }
  };

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-background">
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
        {/* Progress bar */}
        <div className="w-full mb-2">
          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
            <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(135deg, hsl(270 45% 40%), hsl(260 55% 55%))" }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Urgency note */}
        <div className="flex items-center justify-center gap-2 mt-3 mb-4 text-xs text-rose-warm">
          <span>⚠️</span>
          <p>Não saia do teste — geramos apenas <span className="font-bold">um diagnóstico por pessoa</span>.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <p className="text-4xl text-center mb-3">{q.emoji}</p>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-6 leading-tight">
              {q.question}
            </h2>

            <div className="space-y-3">
              {q.options.map((option) => (
                <motion.button
                  key={option.label}
                  onClick={() => handleAnswer(option.profile)}
                  className="w-full text-left p-4 rounded-2xl bg-card border-2 border-border hover:border-lavender hover:bg-lavender-soft transition-all duration-200 group shadow-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {option.label}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed pt-1">{option.text}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 mt-8 text-xs text-muted-foreground">
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
    </div>
  );
};

export default QuizQuestions;
