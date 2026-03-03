import { motion } from 'motion/react';
import { Users, Briefcase, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function WhoItIsFor() {
  const profiles = [
    {
      icon: Users,
      title: "Pessoa Física",
      description: "Para quem busca realizar o sonho da casa própria, trocar de veículo ou planejar o futuro da família sem pagar os juros abusivos do financiamento bancário.",
      benefits: ["Aquisição de imóveis", "Troca programada de carro", "Planejamento sucessório", "Proteção de bens"]
    },
    {
      icon: Briefcase,
      title: "Empresário",
      description: "Soluções estratégicas para expansão de sede, renovação de frotas, aquisição de maquinário e capital de giro para manter a operação saudável.",
      benefits: ["Expansão física", "Capital de giro estratégico", "Renovação de frota", "Crédito estruturado"]
    },
    {
      icon: TrendingUp,
      title: "Investidor",
      description: "Estratégias de alavancagem inteligente para multiplicar patrimônio. Use o crédito como ferramenta de aceleração de riqueza com baixo custo.",
      benefits: ["Alavancagem patrimonial", "Investimento imobiliário", "Diversificação de ativos", "Eficiência tributária"]
    },
    {
      icon: GraduationCap,
      title: "Profissional Liberal",
      description: "Planejamento financeiro para médicos, advogados e outros profissionais que buscam construir uma reserva sólida e adquirir ativos estratégicos.",
      benefits: ["Consultório próprio", "Previdência privada estratégica", "Aquisição de equipamentos", "Segurança futura"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Para Quem é</h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Nossas soluções são desenhadas para perfis que buscam inteligência financeira e crescimento sustentável, independente do momento de vida ou negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 rounded-[2.5rem] p-12 border border-zinc-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                <profile.icon size={32} className="text-zinc-900" />
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-6">{profile.title}</h3>
              <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                {profile.description}
              </p>
              
              <div className="space-y-4 mb-10">
                {profile.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3 text-zinc-900 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    {benefit}
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all"
              >
                Falar com consultor
                <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
