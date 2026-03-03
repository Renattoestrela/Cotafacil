import { motion } from 'motion/react';
import { SOLUTIONS, WHATSAPP_LINK } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Solutions() {
  const categories = [
    { id: 'patrimony', name: 'Planejamento e Aquisição Patrimonial' },
    { id: 'credit', name: 'Crédito e Capital' },
    { id: 'strategy', name: 'Estratégia e Investimento' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Nossas Soluções</h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Desenvolvemos estratégias financeiras sob medida, utilizando as melhores ferramentas do mercado para proteger e expandir seu patrimônio.
          </p>
        </div>

        <div className="space-y-32">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-zinc-200" />
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">{category.name}</h2>
                <div className="h-px flex-1 bg-zinc-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SOLUTIONS.filter(s => s.category === category.id).map((solution) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white border border-zinc-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-zinc-100 transition-all duration-500 flex flex-col"
                  >
                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      <solution.icon size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{solution.title}</h3>
                    
                    <div className="mb-6">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">O Desafio</span>
                      <p className="text-zinc-500 text-sm italic">"{solution.painPoint}"</p>
                    </div>

                    <p className="text-zinc-600 mb-8 flex-1">
                      {solution.description}
                    </p>

                    <div className="bg-zinc-50 rounded-2xl p-6 mb-8">
                      <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider block mb-3">Quando faz sentido?</span>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {solution.whenItMakesSense}
                      </p>
                    </div>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-900 font-bold group/btn"
                    >
                      Consultoria gratuita
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
