import { motion } from 'motion/react';
import { ShieldCheck, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest block mb-6">Nossa História</span>
            <h1 className="text-5xl font-bold text-zinc-900 mb-8 tracking-tight">Especialistas em Estratégia Financeira.</h1>
            <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
              Nascemos com o propósito de transformar a relação das pessoas e empresas com o crédito. Acreditamos que o crédito, quando usado com inteligência, é a ferramenta mais poderosa para a construção de patrimônio.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Como franqueados credenciados da CotaFácil, unimos a solidez de uma das maiores redes do país com um atendimento consultivo, técnico e focado em resultados reais para nossos clientes.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] bg-zinc-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-zinc-900 text-white p-12 rounded-[2.5rem] hidden md:block">
              <div className="text-5xl font-bold mb-2">CotaFácil</div>
              <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Franqueado Credenciado</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Segurança", desc: "Processos transparentes e garantidos." },
            { icon: Target, title: "Estratégia", desc: "Foco no seu objetivo final, não no produto." },
            { icon: Users, title: "Relacionamento", desc: "Atendimento humano e personalizado." },
            { icon: Award, title: "Excelência", desc: "Busca constante pelas melhores soluções." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
              <item.icon size={32} className="text-zinc-900 mb-6" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
