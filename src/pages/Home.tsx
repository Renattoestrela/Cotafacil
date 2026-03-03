import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Building2,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold tracking-wider uppercase mb-6">
              Franqueado Credenciado CotaFácil
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
              Inteligência Financeira para <span className="text-zinc-500">Construir seu Futuro.</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl">
              Mais do que crédito, entregamos estratégia. Especialistas em consórcios, crédito estruturado e planejamento patrimonial para quem busca crescimento sólido.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
              >
                Falar com um especialista
                <ArrowRight size={20} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all"
              >
                Solicitar simulação
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "Segurança e Credibilidade",
      description: "Operações garantidas pelas maiores administradoras do país e credenciamento CotaFácil."
    },
    {
      icon: TrendingUp,
      title: "Visão Estratégica",
      description: "Não vendemos produtos, desenhamos soluções que fazem sentido para o seu fluxo de caixa."
    },
    {
      icon: Users,
      title: "Atendimento Consultivo",
      description: "Acompanhamento personalizado em todas as etapas, da simulação à contemplação."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <item.icon className="text-zinc-900" size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemsSolved = () => {
  const problems = [
    {
      title: "Sair do Aluguel",
      description: "Planejamento imobiliário com parcelas que cabem no seu bolso, sem os juros do financiamento."
    },
    {
      title: "Expandir sua Empresa",
      description: "Crédito estruturado e capital de giro para tirar seus projetos de expansão do papel."
    },
    {
      title: "Trocar de Veículo",
      description: "Renovação de frota ou troca programada com a melhor taxa de administração do mercado."
    },
    {
      title: "Investir com Estratégia",
      description: "Alavancagem patrimonial inteligente para multiplicar seu capital com segurança."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Soluções para os seus maiores desafios.</h2>
            <p className="text-zinc-500 text-lg">Identificamos o melhor caminho financeiro para cada momento da sua vida ou do seu negócio.</p>
          </div>
          <a href={WHATSAPP_LINK} className="text-zinc-900 font-bold flex items-center gap-2 group">
            Ver todas as soluções
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-bold text-zinc-900 mb-4">{problem.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Authority = () => {
  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Autoridade que gera resultados reais.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-zinc-500">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Franqueado CotaFácil</h4>
                  <p className="text-zinc-400">Parte de uma das maiores redes de soluções financeiras do Brasil, com acesso às melhores taxas.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-zinc-500">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Expertise Técnica</h4>
                  <p className="text-zinc-400">Equipe altamente qualificada em análise de crédito e planejamento sucessório.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-zinc-500">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Foco no Cliente</h4>
                  <p className="text-zinc-400">Nosso sucesso é medido pela saúde financeira e crescimento do patrimônio dos nossos clientes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-zinc-800 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800" 
                alt="Financial Strategy" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl text-zinc-900 shadow-2xl hidden md:block">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Foco em Estratégia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
          Pronto para elevar o nível da sua <span className="text-zinc-400 italic">estratégia financeira?</span>
        </h2>
        <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto">
          Agende uma consultoria gratuita e descubra como nossas soluções podem acelerar seus objetivos.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-zinc-900 text-white px-10 py-5 rounded-full font-bold text-lg items-center gap-3 hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200"
        >
          Falar com um especialista agora
          <ArrowRight size={24} />
        </a>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Differentials />
      <ProblemsSolved />
      <Authority />
      <CTAFinal />
    </>
  );
}
