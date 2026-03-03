import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, CNPJ } from '../constants';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Vamos conversar?</h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Estamos prontos para entender seus desafios e desenhar a melhor estratégia financeira para você ou sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                <Phone size={24} className="text-zinc-900 mb-4" />
                <h4 className="font-bold text-zinc-900 mb-2">Telefone</h4>
                <p className="text-zinc-500">(68) 9 9958-9567</p>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                <Mail size={24} className="text-zinc-900 mb-4" />
                <h4 className="font-bold text-zinc-900 mb-2">E-mail</h4>
                <p className="text-zinc-500">contato@estrategiaepatrimonio.com.br</p>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white">
              <h3 className="text-2xl font-bold mb-6">Atendimento Direto</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Prefere um contato mais rápido? Clique no botão abaixo para falar diretamente com um de nossos especialistas via WhatsApp.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all"
              >
                <MessageCircle size={20} />
                Iniciar conversa no WhatsApp
              </a>
            </div>

            <div className="pt-8 border-t border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-4">Informações Legais</h4>
              <p className="text-zinc-500 text-sm">
                Razão Social: Estratégia & Patrimônio Soluções Financeiras<br />
                CNPJ: {CNPJ}<br />
                Franqueado Credenciado CotaFácil
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-zinc-100 rounded-[2.5rem] p-12 shadow-2xl shadow-zinc-100"
          >
            <h2 className="text-3xl font-bold text-zinc-900 mb-8">Envie uma mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Nome</label>
                <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">E-mail</label>
                <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Assunto</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all">
                  <option>Consórcio Imobiliário</option>
                  <option>Crédito Empresarial</option>
                  <option>Planejamento Patrimonial</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Mensagem</label>
                <textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all h-32" placeholder="Como podemos te ajudar?"></textarea>
              </div>
              <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">
                Enviar Mensagem
                <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
