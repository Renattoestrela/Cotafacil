import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Facebook,
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';
import { WHATSAPP_LINK, CNPJ } from './constants';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import WhoItIsFor from './pages/WhoItIsFor';
import Partner from './pages/Partner';
import About from './pages/About';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Para Quem', path: '/para-quem' },
    { name: 'Seja Parceiro', path: '/parceiro' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/80 backdrop-blur-md border-zinc-200 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-zinc-900 font-bold text-lg tracking-tight">ESTRATÉGIA</span>
            <span className="text-zinc-500 font-medium text-xs tracking-widest">& PATRIMÔNIO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-zinc-900",
                location.pathname === link.path ? "text-zinc-900" : "text-zinc-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-zinc-800 transition-all"
          >
            Falar com Especialista
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path ? "text-zinc-900" : "text-zinc-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 text-white p-4 rounded-xl text-center font-medium flex items-center justify-center gap-2"
              >
                Falar com Especialista
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-zinc-900 font-bold text-lg tracking-tight">ESTRATÉGIA</span>
                <span className="text-zinc-500 font-medium text-xs tracking-widest">& PATRIMÔNIO</span>
              </div>
            </Link>
            <p className="text-zinc-500 max-w-md mb-8">
              Especialistas em inteligência financeira e construção patrimonial estratégica. 
              Franqueado credenciado CotaFácil, entregando as melhores soluções do mercado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li><Link to="/solucoes" className="text-zinc-500 hover:text-zinc-900 transition-colors">Consórcio Imobiliário</Link></li>
              <li><Link to="/solucoes" className="text-zinc-500 hover:text-zinc-900 transition-colors">Crédito Empresarial</Link></li>
              <li><Link to="/solucoes" className="text-zinc-500 hover:text-zinc-900 transition-colors">Planejamento Patrimonial</Link></li>
              <li><Link to="/solucoes" className="text-zinc-500 hover:text-zinc-900 transition-colors">Alavancagem Inteligente</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500">
                <Phone size={16} className="text-zinc-900" />
                (68) 9 9958-9567
              </li>
              <li className="flex items-center gap-3 text-zinc-500">
                <MessageCircle size={16} className="text-zinc-900" />
                WhatsApp Direto
              </li>
              <li className="text-zinc-500">
                CNPJ: {CNPJ}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Estratégia & Patrimônio. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 text-sm hover:text-zinc-900">Privacidade</a>
            <a href="#" className="text-zinc-400 text-sm hover:text-zinc-900">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/para-quem" element={<WhoItIsFor />} />
            <Route path="/parceiro" element={<Partner />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </Router>
  );
}
