import { 
  Building2, 
  Car, 
  Briefcase, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Wallet, 
  BarChart3,
  Scale,
  HandCoins,
  LineChart,
  Target
} from 'lucide-react';
import { Solution } from './types';

export const WHATSAPP_NUMBER = '5568999589567';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CNPJ = '63.659.414/0001-47';

export const SOLUTIONS: Solution[] = [
  {
    id: 'consorcio-imobiliario',
    title: 'Consórcio Imobiliário',
    category: 'patrimony',
    icon: Building2,
    painPoint: 'Dificuldade em poupar para a casa própria ou pagar juros abusivos de financiamento.',
    description: 'A forma mais inteligente de construir patrimônio imobiliário sem as taxas elevadas do sistema bancário tradicional.',
    whenItMakesSense: 'Para quem busca sair do aluguel, investir em imóveis para renda ou planejar a compra da sede própria com custo reduzido.'
  },
  {
    id: 'consorcio-veiculos',
    title: 'Consórcio de Veículos',
    category: 'patrimony',
    icon: Car,
    painPoint: 'Perda de capital em financiamentos de longo prazo com juros altos.',
    description: 'Planejamento para troca ou aquisição de frotas e veículos pessoais com taxas administrativas competitivas.',
    whenItMakesSense: 'Ideal para renovação de frota empresarial ou planejamento de troca de veículo sem pressa imediata.'
  },
  {
    id: 'consorcio-empresarial',
    title: 'Consórcio Empresarial',
    category: 'patrimony',
    icon: Briefcase,
    painPoint: 'Descapitalização do caixa da empresa para compra de equipamentos ou expansão.',
    description: 'Solução estratégica para aquisição de máquinas, equipamentos e expansão física do negócio.',
    whenItMakesSense: 'Empresas que planejam expansão a médio prazo e querem preservar o capital de giro.'
  },
  {
    id: 'credito-empresarial',
    title: 'Crédito Empresarial',
    category: 'credit',
    icon: TrendingUp,
    painPoint: 'Falta de fôlego financeiro para aproveitar oportunidades de mercado.',
    description: 'Linhas de crédito estruturadas para impulsionar o crescimento do seu negócio.',
    whenItMakesSense: 'Quando a empresa precisa de investimento para crescer, modernizar ou aproveitar sazonalidades.'
  },
  {
    id: 'capital-giro',
    title: 'Capital de Giro',
    category: 'credit',
    icon: Wallet,
    painPoint: 'Desequilíbrio no fluxo de caixa e dificuldade em honrar compromissos de curto prazo.',
    description: 'Recursos rápidos e estratégicos para manter a operação da sua empresa saudável.',
    whenItMakesSense: 'Momentos de descasamento de fluxo de caixa ou necessidade de estoque estratégico.'
  },
  {
    id: 'credito-estruturado',
    title: 'Crédito Estruturado',
    category: 'credit',
    icon: Scale,
    painPoint: 'Necessidade de grandes volumes de capital com garantias reais e taxas diferenciadas.',
    description: 'Soluções customizadas para operações financeiras complexas e de alto valor.',
    whenItMakesSense: 'Projetos de infraestrutura, fusões, aquisições ou reestruturação de dívidas onerosas.'
  },
  {
    id: 'planejamento-patrimonial',
    title: 'Planejamento Patrimonial',
    category: 'strategy',
    icon: ShieldCheck,
    painPoint: 'Insegurança sobre o futuro da família e falta de estratégia na sucessão e proteção de bens.',
    description: 'Consultoria para organizar, proteger e perpetuar o patrimônio familiar e empresarial.',
    whenItMakesSense: 'Para famílias e empresários que desejam eficiência tributária e segurança jurídica.'
  },
  {
    id: 'alavancagem-inteligente',
    title: 'Alavancagem Inteligente',
    category: 'strategy',
    icon: BarChart3,
    painPoint: 'Capital parado com baixo rendimento ou medo de usar crédito para investir.',
    description: 'Uso estratégico do crédito para potencializar investimentos e acelerar a construção de riqueza.',
    whenItMakesSense: 'Investidores que buscam maximizar o retorno sobre o capital próprio utilizando recursos de terceiros a baixo custo.'
  },
  {
    id: 'estrategias-personalizadas',
    title: 'Estratégias Personalizadas',
    category: 'strategy',
    icon: Target,
    painPoint: 'Soluções genéricas de bancos que não atendem às particularidades do seu momento financeiro.',
    description: 'Diagnóstico completo e desenho de soluções sob medida para seus objetivos específicos.',
    whenItMakesSense: 'Sempre que houver um objetivo financeiro claro que exija uma abordagem técnica e imparcial.'
  }
];
