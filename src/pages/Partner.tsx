import { motion } from 'motion/react';
import { Handshake, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Partner() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Ganhos Recorrentes",
      description: "Modelo de comissionamento atrativo e possibilidade de ganhos escaláveis com nossa estrutura."
    },
    {
      icon: ShieldCheck,
      title: "Suporte Especializado",
      description: "Treinamentos constantes e apoio técnico para fechamento de operações complexas."
    },
    {
      icon: Handshake,
      title: "Credibilidade CotaFácil",
      description: "Trabalhe com a força de uma marca consolidada e acesso às melhores administradoras."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-5xl font-bold text-zinc-900 mb-8 tracking-tight">Seja um Parceiro Estratégico</h1>
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed">
              Expanda seu portfólio de serviços e ofereça soluções financeiras de alto nível para seus clientes. Buscamos parceiros comprometidos com a excelência e resultados.
            </p>

            <div className="space-y-10">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <benefit.icon size={28} className="text-zinc-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-zinc-100 rounded-[2.5rem] p-12 shadow-2xl shadow-zinc-100"
          >
            <h2 className="text-3xl font-bold text-zinc-900 mb-8">Cadastre-se para ser parceiro</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Nome Completo</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">E-mail</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">WhatsApp</label>
                <input type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Área de Atuação</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all">
                  <option>Corretor de Imóveis</option>
                  <option>Contador</option>
                  <option>Advogado</option>
                  <option>Consultor Financeiro</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Mensagem (Opcional)</label>
                <textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all h-32" placeholder="Conte um pouco sobre sua experiência..."></textarea>
              </div>
              <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">
                Enviar Cadastro
                <ArrowRight size={20} />
              </button>
              <p className="text-center text-xs text-zinc-400">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
