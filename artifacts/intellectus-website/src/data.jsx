// Shared data + tiny helpers used across all artboards.

// Unsplash photos — keyword-tuned, sized to 800w
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=70`;

const COURSES = [
  { id: "c1", title: "Excel Avançado para Gestão", area: "Tecnologia", level: "Avançado", format: "Presencial", duration: 30, price: 280, hours: 30, rating: 4.8, students: 142, certified: true, schedule: "Seg/Qua · 19h–22h", start: "12 Mai 2026", short: "Domina tabelas dinâmicas, Power Query e dashboards profissionais.", img: U("1551288049-bebda4e38f71"),
    modules: [
      { title: "Funções Avançadas e Fórmulas Matriciais", hours: 6, topics: ["PROCV, ÍNDICE e CORRESP", "Fórmulas matriciais dinâmicas", "Funções de texto, data e hora", "Tratamento de erros com SEERRO"] },
      { title: "Power Query — Importação e Transformação de Dados", hours: 8, topics: ["Ligação a ficheiros Excel, CSV e web", "Transformações e limpeza de dados", "Combinar e acrescentar consultas", "Atualização automática de dados"] },
      { title: "Tabelas Dinâmicas e Power Pivot", hours: 8, topics: ["Criação e configuração de tabelas dinâmicas", "Agrupamentos, filtros e segmentações", "Modelo de dados e relações no Power Pivot", "Medidas DAX básicas e avançadas"] },
      { title: "Dashboards e Visualização de Dados", hours: 5, topics: ["Tipos de gráfico e quando usar cada um", "Formatação condicional avançada", "Dashboards interativos com controlos de formulário", "Boas práticas de design de dados"] },
      { title: "Macros e Automatização com VBA", hours: 3, topics: ["Gravação e edição de macros", "Introdução ao VBA e ao Editor Visual Basic", "Ciclos, condições e variáveis", "Automatização de tarefas repetitivas"] },
    ]
  },
  { id: "c2", title: "Inglês para Negócios — B2", area: "Línguas", level: "Intermédio", format: "Online", duration: 60, price: 420, hours: 60, rating: 4.9, students: 287, certified: true, schedule: "Ter/Qui · 18h30–20h", start: "06 Mai 2026", short: "Reuniões, e-mails e apresentações em inglês com confiança.", img: U("1543269865-cbf427effbad"),
    modules: [
      { title: "Comunicação Oral em Contexto Profissional", hours: 12, topics: ["Apresentações formais e informais", "Teleconferências e videoconferências", "Fluência e pronúncia em contexto de trabalho", "Discussão e tomada de posição"] },
      { title: "Escrita Profissional — E-mails, Relatórios e Propostas", hours: 12, topics: ["Estrutura e tom do e-mail profissional", "Redação de relatórios executivos", "Propostas comerciais e resumos", "Revisão, pontuação e gramática avançada"] },
      { title: "Apresentações e Reuniões em Inglês", hours: 12, topics: ["Estruturar e conduzir reuniões em inglês", "Linguagem de apresentação e storytelling", "Gestão de perguntas e objeções", "Vocabulário para slides e suportes visuais"] },
      { title: "Negociação, Persuasão e Gestão de Conflitos", hours: 12, topics: ["Técnicas de negociação em inglês", "Linguagem assertiva e diplomática", "Resolução de mal-entendidos culturais", "Role-play de cenários reais de negócios"] },
      { title: "Vocabulário Técnico por Setor de Atividade", hours: 12, topics: ["Finanças, contabilidade e direito", "Tecnologia e inovação", "Marketing, vendas e atendimento", "Recursos humanos e gestão de projetos"] },
    ]
  },
  { id: "c3", title: "Marketing Digital — do zero ao Meta Ads", area: "Marketing", level: "Iniciante", format: "Híbrido", duration: 45, price: 360, hours: 45, rating: 4.7, students: 198, certified: true, schedule: "Sáb · 10h–13h", start: "10 Mai 2026", short: "SEO, redes sociais, conteúdo e campanhas pagas.", img: U("1432888622747-4eb9a8f5a07d"),
    modules: [
      { title: "Estratégia de Presença Digital e Branding", hours: 6, topics: ["Definição de público-alvo e personas", "Posicionamento de marca online", "Auditoria de presença digital", "Criação do plano de marketing digital"] },
      { title: "SEO — Otimização para Motores de Pesquisa", hours: 9, topics: ["Pesquisa e seleção de palavras-chave", "SEO on-page: títulos, meta e estrutura", "Link building e autoridade de domínio", "Google Search Console e análise de desempenho"] },
      { title: "Gestão de Redes Sociais — Orgânico e Conteúdo", hours: 9, topics: ["Estratégia de conteúdo para Instagram, LinkedIn e Facebook", "Criação de conteúdo com Canva e ferramentas gratuitas", "Calendário editorial e agendamento", "Métricas orgânicas e crescimento de comunidade"] },
      { title: "Meta Ads — Criação, Segmentação e Otimização", hours: 12, topics: ["Estrutura de conta e campanha no Meta Business", "Tipos de campanha: awareness, tráfego, conversão", "Segmentação avançada de audiências", "Análise de resultados e otimização de ROAS"] },
      { title: "Google Analytics 4 e Medição de Resultados", hours: 9, topics: ["Instalação e configuração do GA4", "Eventos, conversões e funis", "Relatórios de aquisição e comportamento", "Dashboards personalizados e exportação de dados"] },
    ]
  },
  { id: "c4", title: "Gestão Financeira para Gestores", area: "Gestão", level: "Iniciante", format: "Presencial", duration: 24, price: 240, hours: 24, rating: 4.6, students: 96, certified: true, schedule: "Seg/Qua · 19h–22h", start: "19 Mai 2026", short: "Lê balanços, demonstrações de resultados e fluxos de caixa.", img: U("1554224155-6726b3ff858f"),
    modules: [
      { title: "Conceitos Fundamentais de Contabilidade e Finanças", hours: 4, topics: ["Princípios contabilísticos básicos", "Distinção entre contabilidade e finanças", "Documentos financeiros obrigatórios", "O papel do gestor na leitura financeira"] },
      { title: "Leitura e Interpretação do Balanço", hours: 6, topics: ["Estrutura do ativo, passivo e capitais próprios", "Liquidez, solvabilidade e autonomia financeira", "Análise comparativa de balanços", "Casos práticos de empresas reais"] },
      { title: "Demonstração de Resultados e Cash Flow", hours: 6, topics: ["EBITDA, EBIT e resultado líquido", "Mapa de origens e aplicações de fundos", "Demonstração de fluxos de caixa direto e indireto", "Diferença entre lucro e tesouraria"] },
      { title: "Análise de Rácios e Indicadores de Desempenho", hours: 5, topics: ["Rácios de rentabilidade, liquidez e endividamento", "ROI, ROE e ROA", "Comparação setorial de indicadores", "Construção de um dashboard financeiro simples"] },
      { title: "Fiscalidade, IVA e Obrigações Declarativas", hours: 3, topics: ["Regimes de IVA e taxas aplicáveis", "IRC e IRS empresarial — conceitos-chave", "Obrigações declarativas anuais e periódicas", "Planeamento fiscal básico para PME"] },
    ]
  },
  { id: "c5", title: "Programação Web com JavaScript", area: "Tecnologia", level: "Intermédio", format: "Online", duration: 90, price: 590, hours: 90, rating: 4.9, students: 312, certified: true, schedule: "Ter/Qui · 19h–22h", start: "13 Mai 2026", short: "HTML, CSS, JS moderno, React, APIs e deploy em produção.", img: U("1517694712202-14dd9538aa97"),
    modules: [
      { title: "HTML5 e CSS3 — Estrutura, Layouts e Responsividade", hours: 18, topics: ["Semântica HTML5 e acessibilidade", "Flexbox e CSS Grid na prática", "Design responsivo e media queries", "Animações e transições CSS"] },
      { title: "JavaScript Moderno — ES6+, DOM e Assincronismo", hours: 20, topics: ["Arrow functions, destructuring e spread", "Manipulação do DOM e eventos", "Promises, async/await e fetch API", "Módulos ES e gestão de dependências"] },
      { title: "Node.js e Construção de APIs REST", hours: 18, topics: ["Ecossistema Node.js e npm", "Express.js — rotas, middlewares e erros", "Autenticação com JWT e bcrypt", "Documentação de API com Swagger"] },
      { title: "React — Componentes, Hooks e Gestão de Estado", hours: 20, topics: ["Componentes funcionais e JSX", "useState, useEffect e hooks personalizados", "React Router e navegação SPA", "Context API e introdução ao Zustand"] },
      { title: "Base de Dados, Autenticação e Deploy em Produção", hours: 14, topics: ["PostgreSQL — modelação e queries SQL", "ORM com Prisma", "Deploy em Railway, Vercel e Render", "CI/CD básico com GitHub Actions"] },
    ]
  },
  { id: "c6", title: "Recursos Humanos & Liderança", area: "Gestão", level: "Avançado", format: "Híbrido", duration: 36, price: 340, hours: 36, rating: 4.5, students: 78, certified: true, schedule: "Sex · 18h–21h", start: "08 Mai 2026", short: "Gestão de equipas, feedback, cultura e legislação laboral.", img: U("1521737604893-d14cc237f11d"),
    modules: [
      { title: "Estilos de Liderança e Inteligência Emocional", hours: 6, topics: ["Modelos de liderança situacional e transformacional", "Autoconsciência e autorregulação emocional", "Empatia e gestão de relações", "Feedback 360º e desenvolvimento pessoal"] },
      { title: "Recrutamento, Seleção e Integração de Colaboradores", hours: 8, topics: ["Planeamento de necessidades e job design", "Técnicas de entrevista estruturada", "Assessment centers e testes de aptidão", "Onboarding eficaz e redução de turnover"] },
      { title: "Gestão do Desempenho — Avaliação e Feedback", hours: 8, topics: ["Definição de objetivos SMART e OKR", "Ciclos de avaliação de desempenho", "Feedback construtivo e difícil", "Planos de desenvolvimento individual (PDI)"] },
      { title: "Cultura Organizacional, Motivação e Engagement", hours: 8, topics: ["Diagnóstico e transformação cultural", "Teorias de motivação aplicadas", "Programas de reconhecimento e bem-estar", "Medição do engagement com eNPS"] },
      { title: "Legislação Laboral e Gestão de Conflitos", hours: 6, topics: ["Código do Trabalho — pontos-chave para gestores", "Contratos, horários e férias", "Mediação e resolução de conflitos", "Processo disciplinar — boas práticas"] },
    ]
  },
  { id: "c7", title: "Apoio Escolar — Matemática 12º", area: "Apoio Escolar", level: "Secundário", format: "Presencial", duration: 60, price: 180, hours: 60, rating: 4.8, students: 412, certified: false, schedule: "Sáb · 9h–12h", start: "Contínuo", short: "Preparação para exame nacional em turmas reduzidas.", img: U("1509228627152-72ae9ae6848d"),
    modules: [
      { title: "Geometria Analítica e Trigonometria", hours: 10, topics: ["Coordenadas e equações de retas e planos", "Circunferência e cônicas", "Trigonometria no triângulo e na circunferência", "Resolução de problemas de exame"] },
      { title: "Funções, Limites e Continuidade", hours: 12, topics: ["Domínio, contradomínio e gráfico", "Operações sobre funções e composição", "Limite de uma função — definição e cálculo", "Continuidade e teorema de Bolzano"] },
      { title: "Cálculo Diferencial e Integral", hours: 14, topics: ["Derivada — definição e regras de derivação", "Estudo de funções com derivadas", "Primitivas imediatas e por partes", "Integral definido e área entre curvas"] },
      { title: "Álgebra Linear e Matrizes", hours: 12, topics: ["Operações com matrizes", "Determinantes e sistemas de equações", "Regra de Cramer e método de Gauss", "Aplicações em modelação matemática"] },
      { title: "Estatística, Probabilidades e Revisão de Exame", hours: 12, topics: ["Medidas de localização e dispersão", "Distribuição binomial e normal", "Cálculo de probabilidades condicionais", "Resolução de exames nacionais anteriores"] },
    ]
  },
  { id: "c8", title: "Photoshop & Illustrator — Design Gráfico", area: "Design", level: "Iniciante", format: "Presencial", duration: 48, price: 380, hours: 48, rating: 4.7, students: 134, certified: true, schedule: "Seg/Qua · 19h–22h", start: "26 Mai 2026", short: "Composição, tipografia e identidade visual do zero.", img: U("1572044162444-ad60f128bdea"),
    modules: [
      { title: "Interface, Ferramentas Essenciais e Fluxo de Trabalho", hours: 8, topics: ["Espaços de trabalho e painéis do Photoshop e Illustrator", "Atalhos de teclado essenciais", "Gestão de camadas e objetos", "Formatos de ficheiro e resolução"] },
      { title: "Retoque, Composição e Fotomontagem no Photoshop", hours: 12, topics: ["Seleções avançadas — canais e máscaras", "Retoque de pele e correção de cor", "Fotomontagem e composição realista", "Filtros inteligentes e objetos inteligentes"] },
      { title: "Desenho Vetorial e Ilustração no Illustrator", hours: 12, topics: ["Ferramenta Caneta e construção de formas", "Preenchimentos, traçados e gradientes", "Ilustração de personagens e ícones", "Sistemas de símbolos e padrões vetoriais"] },
      { title: "Tipografia, Grelhas e Design Editorial", hours: 8, topics: ["Anatomia da letra e famílias tipográficas", "Hierarquia visual e espaçamento", "Grelhas e layouts editoriais", "Design de cartaz, flyer e brochura"] },
      { title: "Projeto Final — Identidade Visual de Marca", hours: 8, topics: ["Briefing e conceito da marca", "Logótipo — versões e variantes", "Manual de identidade visual", "Apresentação e defesa do projeto"] },
    ]
  },
  { id: "c9", title: "Cibersegurança Essencial", area: "Tecnologia", level: "Intermédio", format: "Online", duration: 40, price: 460, hours: 40, rating: 4.8, students: 88, certified: true, schedule: "Ter/Qui · 19h–21h", start: "20 Mai 2026", short: "Proteção de sistemas, dados e gestão de risco cibernético.", img: U("1550751827-4bd374c3f58b"),
    modules: [
      { title: "Fundamentos de Cibersegurança e Panorama de Ameaças", hours: 8, topics: ["Tipos de ataque: phishing, ransomware, DDoS", "Modelos de segurança — CIA Triad", "Engenharia social e ameaças internas", "Quadro legal e regulatório em Portugal e Europa"] },
      { title: "Proteção de Redes, Sistemas e Endpoints", hours: 10, topics: ["Arquiteturas de rede segura e segmentação", "Firewalls, VPN e sistemas de deteção de intrusão", "Hardening de sistemas operativos", "Gestão de patches e vulnerabilidades"] },
      { title: "Segurança de Dados, Criptografia e Autenticação", hours: 8, topics: ["Criptografia simétrica e assimétrica", "Certificados digitais e PKI", "Autenticação multifator (MFA)", "Gestão segura de passwords e cofres de credenciais"] },
      { title: "Gestão de Incidentes e Resposta a Ataques", hours: 8, topics: ["Plano de resposta a incidentes (IRP)", "Deteção, contenção e erradicação", "Análise forense básica", "Comunicação e notificação de incidentes"] },
      { title: "Conformidade — RGPD, ISO 27001 e Diretiva NIS2", hours: 6, topics: ["Princípios e obrigações do RGPD", "Estrutura da norma ISO 27001", "Diretiva NIS2 — âmbito e impacto para empresas", "Construção de um programa básico de conformidade"] },
    ]
  },
];

const HERO_IMG = U("1523580494863-6f3031224c94", 1600); // students collaborating
const HERO_IMG_ALT = U("1517048676732-d65bc937f952", 1600); // classroom
const TEAM_IMG = U("1522202176988-66273c2fd55f", 1200);
const TESTIMONIAL_IMG = U("1494790108377-be9c29b29330", 400);

const AREAS = ["Tecnologia", "Línguas", "Marketing", "Gestão", "Design", "Apoio Escolar"];
const FORMATS = ["Presencial", "Online", "Híbrido"];

const ENROLLMENTS = [
  { id: "INS-2026-0142", student: "Mariana Costa", email: "mariana.c@gmail.com", course: "Excel Avançado para Gestão", date: "28 Abr 2026", status: "Pendente", payment: "MB WAY", amount: 280 },
  { id: "INS-2026-0141", student: "João Silva", email: "joao.silva@empresa.pt", course: "Programação Web com JavaScript", date: "28 Abr 2026", status: "Pago", payment: "Cartão", amount: 590 },
  { id: "INS-2026-0140", student: "Ana Ribeiro", email: "ana.ribeiro@outlook.pt", course: "Inglês para Negócios — B2", date: "27 Abr 2026", status: "Pago", payment: "Multibanco", amount: 420 },
  { id: "INS-2026-0139", student: "Pedro Marques", email: "pedro.marques@iol.pt", course: "Marketing Digital", date: "27 Abr 2026", status: "Aprovado", payment: "Transferência", amount: 360 },
  { id: "INS-2026-0138", student: "Sofia Almeida", email: "sofia.a@gmail.com", course: "Contabilidade para não-Contabilistas", date: "26 Abr 2026", status: "Pago", payment: "MB WAY", amount: 240 },
  { id: "INS-2026-0137", student: "Ricardo Tavares", email: "rtavares@sapo.pt", course: "Recursos Humanos & Liderança", date: "26 Abr 2026", status: "Pendente", payment: "Multibanco", amount: 340 },
  { id: "INS-2026-0136", student: "Inês Pereira", email: "ines.pereira@gmail.com", course: "Photoshop & Illustrator", date: "25 Abr 2026", status: "Pago", payment: "Cartão", amount: 380 },
  { id: "INS-2026-0135", student: "Tiago Fonseca", email: "tiago.f@gmail.com", course: "Cibersegurança Essencial", date: "24 Abr 2026", status: "Cancelado", payment: "—", amount: 0 },
];

const POSTS = [
  { id: "p1", title: "Como escolher a formação certa em 2026", date: "22 Abr 2026", cat: "Carreira", read: "5 min", excerpt: "Quatro perguntas que se deve colocar antes de se inscrever num curso." },
  { id: "p2", title: "Excel: 7 funções que ninguém te ensinou", date: "15 Abr 2026", cat: "Tecnologia", read: "7 min", excerpt: "INDIRETO, LET, LAMBDA e mais — o que mudou em 2026." },
  { id: "p3", title: "Voltar a estudar depois dos 40", date: "08 Abr 2026", cat: "Histórias", read: "4 min", excerpt: "Três alunos partilham o que aprenderam ao mudar de carreira." },
  { id: "p4", title: "Certificação DGERT explicada", date: "01 Abr 2026", cat: "Formação", read: "6 min", excerpt: "O que significa, porque importa, e como saber se um curso é certificado." },
];

// Tiny inline icons (lucide-style stroke)
const Icon = ({ name, size = 16, color = "currentColor", strokeWidth = 1.6 }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    cart: <><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2.5l2.7 12.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.5-1.2L21.5 8H6.5"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>,
    arrowDown: <><path d="M12 5v14"/><path d="m5 13 7 7 7-7"/></>,
    check: <><path d="M5 12l4 4 10-10"/></>,
    star: <><path d="M12 2.5l3 6.4 7 .9-5.1 4.7 1.4 7-6.3-3.6-6.3 3.6 1.4-7L2 9.8l7-.9z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    pin: <><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></>,
    cal: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>,
    home: <><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 5v15"/></>,
    chart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    edit: <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></>,
    trash: <><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6 18 21H6L5 6"/></>,
    users: <><circle cx="9" cy="8" r="4"/><path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/><path d="M16 4a4 4 0 0 1 0 8"/><path d="M22 21a6 6 0 0 0-3-5.2"/></>,
    file: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></>,
    bell: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    x: <><path d="M18 6 6 18M6 6l12 12"/></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    filter: <><path d="M3 4h18l-7 9v6l-4 2v-8z"/></>,
    upload: <><path d="M12 19V5"/><path d="m7 10 5-5 5 5"/><path d="M5 21h14"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    list: <><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></>,
    eur: <><path d="M19 5a8 8 0 1 0 0 14"/><path d="M3 10h12M3 14h12"/></>,
    play: <><path d="M6 4v16l14-8z"/></>,
    quote: <><path d="M7 7h4v4H7zM3 11c0 4 4 6 4 6M15 7h4v4h-4zM11 11c0 4 4 6 4 6"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {paths[name] || null}
    </svg>
  );
};

const fmtEUR = (n) => new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export { COURSES, AREAS, FORMATS, ENROLLMENTS, POSTS, Icon, fmtEUR, U, HERO_IMG, HERO_IMG_ALT, TEAM_IMG, TESTIMONIAL_IMG };
