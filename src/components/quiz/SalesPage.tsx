import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import moonStars from "@/assets/moon-stars.png";
import heroImage from "@/assets/hero-mother-child.png";
import authorImage from "@/assets/author-daughter.png";

interface SalesPageProps {
  profile: "inseguro" | "agitado";
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    name: "Juliana M.",
    city: "São Paulo, SP",
    text: "Meu filho dormia só no colo e com muito choro. Em 5 dias usando o método, ele começou a pegar no sono sozinho. Eu chorei de alegria.",
    stars: 5,
  },
  {
    name: "Fernanda R.",
    city: "Belo Horizonte, MG",
    text: "Eu já tinha comprado 3 cursos e nada funcionava. O Noite de Paz foi diferente porque é gentil. Sem deixar chorar. Minha filha agora dorme a noite toda.",
    stars: 5,
  },
  {
    name: "Patrícia S.",
    city: "Curitiba, PR",
    text: "Achei que era frescura, mas resolvi testar. Na primeira semana meu filho parou de acordar 4x por noite. Hoje ele dorme 10h seguidas.",
    stars: 5,
  },
  {
    name: "Camila L.",
    city: "Rio de Janeiro, RJ",
    text: "O ritual antes de dormir mudou tudo. Minha filha pede pra dormir agora! Nunca imaginei que isso fosse possível.",
    stars: 5,
  },
];

const faqItems = [
  {
    q: "Para qual faixa etária funciona?",
    a: "O Método Noite de Paz foi desenvolvido para crianças de 0 a 6 anos, com adaptações específicas para cada fase do desenvolvimento.",
  },
  {
    q: "Preciso deixar meu filho chorar?",
    a: "Jamais. O método é 100% gentil e respeitoso. Trabalhamos com conexão emocional, rituais e estímulos naturais. Zero choro controlado.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "A maioria das mães relata melhoras significativas entre 3 a 7 dias. Algumas percebem mudanças já na primeira noite.",
  },
  {
    q: "E se não funcionar para meu filho?",
    a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu investimento, sem perguntas.",
  },
  {
    q: "O acesso é imediato?",
    a: "Sim! Assim que o pagamento for confirmado, você recebe acesso completo ao método, bônus e comunidade exclusiva.",
  },
];

const SalesPage = ({ profile }: SalesPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(6).fill(false));

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const checkedCount = checkedItems.filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center min-h-screen bg-background"
    >
      {/* Brand Header */}
      <div className="w-full py-4 flex justify-center border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <img src={moonStars} alt="Noite de Paz" className="w-8 h-8" />
          <span className="text-sm font-bold tracking-wider uppercase text-lavender">
            Noite de Paz™
          </span>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="w-full" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-lg mx-auto px-5 py-10 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block bg-rose-warm text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              ⏰ Oferta Especial — Vagas Limitadas
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Transforme as noites do seu filho com o{" "}
              <span className="text-lavender">Método Noite de Paz™</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              O método gentil e comprovado que já ajudou{" "}
              <strong className="text-foreground">mais de 15.000 mães</strong> a terem noites tranquilas — sem deixar o filho chorar.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg mb-6"
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src={heroImage}
              alt="Mãe e filho dormindo em paz"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(transparent, hsl(var(--night) / 0.7))" }}>
              <p className="text-primary-foreground text-sm font-medium">
                Aprovado pela especialista <strong>Camila Rezende</strong>
              </p>
            </div>
          </motion.div>

          <motion.a
            href="#oferta"
            className="inline-block w-full py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg text-center"
            style={{ background: "var(--gradient-cta)" }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            👉 QUERO NOITES TRANQUILAS AGORA
          </motion.a>

          <p className="text-xs text-muted-foreground mt-3">
            🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* ===== PROBLEMA ===== */}
      <section className="w-full py-12 bg-card">
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">
              Você se identifica com alguma dessas situações?
            </h2>
            <div className="space-y-3">
              {[
                "Seu filho só dorme no colo, no peito ou com você do lado",
                "Ele acorda várias vezes durante a noite chorando",
                "A hora de dormir virou uma batalha diária",
                "Você está exausta e sem paciência",
                "Já tentou de tudo e nada funcionou",
                "Sente culpa por não conseguir resolver isso",
              ].map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => toggleCheck(i)}
                  className={`flex items-center gap-3 w-full bg-background rounded-xl p-4 border text-left transition-all duration-200 ${
                    checkedItems[i]
                      ? "border-lavender bg-lavender-soft"
                      : "border-border hover:border-lavender/40"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                      checkedItems[i]
                        ? "bg-lavender border-lavender"
                        : "border-border"
                    }`}
                  >
                    {checkedItems[i] && <Check className="w-4 h-4 text-primary-foreground" />}
                  </div>
                  <p className="text-sm text-foreground">{item}</p>
                </motion.button>
              ))}
            </div>
            <motion.p
              className="text-center text-sm mt-6"
              animate={{ scale: checkedCount >= 2 ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {checkedCount >= 2 ? (
                <span className="text-lavender font-bold">
                  ✨ Você marcou {checkedCount} itens — o Método Noite de Paz foi feito para você!
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Se você marcar pelo menos <strong className="text-foreground">2 itens</strong>, o Método Noite de Paz foi feito para você.
                </span>
              )}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== SOLUÇÃO ===== */}
      <section className="w-full py-12">
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-8">
            <span className="inline-block bg-lavender-soft text-lavender text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              A Solução
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Conheça o Método Noite de Paz™
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Um sistema completo, passo a passo, para ensinar seu filho a dormir com segurança emocional — de forma gentil, natural e sem choro.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                icon: "🌙",
                title: "Ritual de Sono Personalizado",
                desc: "Atividades sensoriais e emocionais adaptadas ao perfil do seu filho para criar uma rotina que funciona.",
              },
              {
                icon: "🧠",
                title: "Técnicas de Regulação Emocional",
                desc: "Ferramentas gentis para acalmar a mente agitada e trazer segurança antes de dormir.",
              },
              {
                icon: "📖",
                title: "Histórias Terapêuticas",
                desc: "Narrativas especialmente criadas para ativar o sistema de relaxamento natural da criança.",
              },
              {
                icon: "🎵",
                title: "Áudios de Sono Guiado",
                desc: "Sons e meditações infantis que ajudam seu filho a pegar no sono mais rápido.",
              },
              {
                icon: "📱",
                title: "Plano de 21 Dias",
                desc: "Roteiro dia a dia para implementar o método de forma gradual e sem estresse.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 bg-card rounded-2xl p-5 border border-border shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "hsl(var(--lavender-soft))" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTADOS / BEFORE-AFTER ===== */}
      <section className="w-full py-12 bg-card">
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Antes e Depois do Método
            </h2>
          </motion.div>

          <div className="grid gap-4">
            <motion.div {...fadeUp} className="bg-rose-soft rounded-2xl p-5 border border-rose-warm/20">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-rose-warm">✗</span> Antes do Noite de Paz
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Noites longas e exaustivas</li>
                <li>• Choro na hora de dormir</li>
                <li>• Acordar 3-5x por noite</li>
                <li>• Mãe esgotada e sem paciência</li>
                <li>• Relacionamento afetado pelo cansaço</li>
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="bg-lavender-soft rounded-2xl p-5 border border-lavender/20">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="text-lavender">✓</span> Depois do Noite de Paz
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Criança dormindo em 15-20 minutos</li>
                <li>• Noites inteiras sem acordar</li>
                <li>• Hora de dormir virou momento especial</li>
                <li>• Mãe descansada e presente</li>
                <li>• Mais tempo para você e seu parceiro</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== AUTORIDADE ===== */}
      <section className="w-full py-12">
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={authorImage}
                alt="Camila Rezende"
                className="w-20 h-20 rounded-full object-cover border-2 border-lavender/30"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Camila Rezende</h3>
                <p className="text-xs text-muted-foreground">Especialista em Sono Infantil</p>
                <p className="text-xs text-lavender font-medium">CRP 06/123456</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Mãe da Helena, psicóloga infantil e pesquisadora do sono há mais de 8 anos. Criou o Método Noite de Paz após vivenciar na pele as dificuldades de uma mãe exausta.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Já ajudou mais de <strong className="text-foreground">15.000 famílias</strong> em todo o Brasil a transformarem a hora de dormir no momento mais acolhedor do dia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="w-full py-12 bg-card">
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-8">
            <span className="inline-block bg-gold-soft text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Depoimentos Reais
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground">
              O que as mães estão dizendo
            </h2>
          </motion.div>

          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-background rounded-2xl p-5 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-gold text-sm">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-3 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-lavender-soft flex items-center justify-center text-xs font-bold text-lavender">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFERTA ===== */}
      <section id="oferta" className="w-full py-12" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-8">
            <span className="inline-block bg-lavender text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Oferta Exclusiva
            </span>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Tudo isso por um valor especial
            </h2>
            <p className="text-muted-foreground text-sm">
              Somente para quem completou o diagnóstico
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-card rounded-2xl p-6 border-2 border-lavender/40 shadow-lg">
            <h3 className="font-display text-lg font-bold text-foreground text-center mb-4">
              Método Noite de Paz™ Completo
            </h3>

            <div className="space-y-3 mb-6">
              {[
                { item: "Método Noite de Paz (21 dias)", value: "R$ 197" },
                { item: "Histórias Terapêuticas do Sono", value: "R$ 97" },
                { item: "Áudios de Relaxamento Guiado", value: "R$ 67" },
                { item: "Comunidade Exclusiva de Mães", value: "R$ 47" },
                { item: "Bônus: Guia do Ritual Noturno", value: "R$ 37" },
                { item: "Bônus: Meditações Infantis", value: "R$ 47" },
              ].map((b, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-foreground">
                    <span className="text-lavender">✓</span> {b.item}
                  </span>
                  <span className="text-muted-foreground line-through text-xs">{b.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 mb-6 text-center">
              <p className="text-xs text-muted-foreground mb-1">De <span className="line-through">R$ 492,00</span> por apenas</p>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-sm text-muted-foreground">12x de</span>
                <span className="font-display text-4xl font-bold text-lavender">R$ 9,70</span>
              </div>
              <p className="text-xs text-muted-foreground">ou R$ 97,00 à vista</p>
            </div>

            <motion.a
              href="#"
              className="inline-block w-full py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg text-center mb-3"
              style={{ background: "var(--gradient-cta)" }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              👉 QUERO GARANTIR MINHA VAGA
            </motion.a>

            <p className="text-xs text-muted-foreground text-center">
              🔒 Pagamento seguro via cartão, Pix ou boleto
            </p>
          </motion.div>

          {/* Garantia */}
          <motion.div
            {...fadeUp}
            className="bg-card rounded-2xl p-6 border border-border mt-6 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-soft flex items-center justify-center text-3xl">
              🛡️
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se dentro de 7 dias você não sentir que o método está transformando as noites do seu filho, devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="w-full py-12 bg-card">
        <div className="max-w-lg mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-background rounded-2xl border border-border overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className="w-full text-left p-4 flex items-center justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-bold text-foreground">{faq.q}</span>
                  <span className="text-lavender text-lg shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-4 pb-4"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="w-full py-12">
        <div className="max-w-lg mx-auto px-5 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Você pode continuar tendo noites difíceis…
            </h2>
            <p className="font-display text-xl font-bold text-lavender mb-6">
              Ou pode transformar hoje a hora de dormir no momento mais especial do dia. 🌙
            </p>

            <motion.a
              href="#"
              className="inline-block w-full py-5 px-8 rounded-2xl font-bold text-lg text-primary-foreground shadow-lg text-center"
              style={{ background: "var(--gradient-cta)" }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              👉 SIM, QUERO NOITES TRANQUILAS!
            </motion.a>

            <p className="text-xs text-muted-foreground mt-4">
              🔒 Acesso imediato • Garantia de 7 dias • Pagamento seguro
            </p>

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
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-border">
        <div className="max-w-lg mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src={moonStars} alt="Noite de Paz" className="w-5 h-5" />
            <span className="text-xs font-bold tracking-wider uppercase text-lavender">
              Noite de Paz™
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Noite de Paz. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Este produto não substitui acompanhamento médico profissional.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default SalesPage;
