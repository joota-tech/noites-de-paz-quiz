import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuizIntro from "@/components/quiz/QuizIntro";
import QuizNews from "@/components/quiz/QuizNews";
import QuizQuestions from "@/components/quiz/QuizQuestions";
import QuizStorytelling from "@/components/quiz/QuizStorytelling";
import QuizResult from "@/components/quiz/QuizResult";

type Step = "intro" | "news" | "questions" | "storytelling" | "result";

const Index = () => {
  const [step, setStep] = useState<Step>("intro");
  const [profile, setProfile] = useState<"inseguro" | "agitado">("inseguro");

  const handleQuestionsComplete = (result: "inseguro" | "agitado") => {
    setProfile(result);
    setStep("storytelling");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goTo = (next: Step) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {step === "intro" && <QuizIntro key="intro" onNext={() => goTo("news")} />}
        {step === "news" && <QuizNews key="news" onNext={() => goTo("questions")} />}
        {step === "questions" && <QuizQuestions key="questions" onComplete={handleQuestionsComplete} />}
        {step === "storytelling" && <QuizStorytelling key="storytelling" onNext={() => goTo("result")} />}
        {step === "result" && <QuizResult key="result" profile={profile} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
