// Shared data + tiny helpers used across all artboards.

// Unsplash photos — keyword-tuned, sized to 800w
const U = (id, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=70`;

const COURSES = [
  { id: "c1", title: "Excel Avançado para Gestão", area: "Tecnologia", level: "Avançado", format: "Presencial", duration: 30, price: 280, hours: 30, rating: 4.8, students: 142, certified: true, schedule: "Seg/Qua · 19h–22h", start: "12 Mai 2026", short: "Domina tabelas dinâmicas, Power Query e dashboards.", img: U("1551288049-bebda4e38f71") },
  { id: "c2", title: "Inglês para Negócios — B2", area: "Línguas", level: "Intermédio", format: "Online", duration: 60, price: 420, hours: 60, rating: 4.9, students: 287, certified: true, schedule: "Ter/Qui · 18h30–20h", start: "06 Mai 2026", short: "Reuniões, e-mails e apresentações com confiança.", img: U("1543269865-cbf427effbad") },
  { id: "c3", title: "Marketing Digital — do zero ao Meta Ads", area: "Marketing", level: "Iniciante", format: "Híbrido", duration: 45, price: 360, hours: 45, rating: 4.7, students: 198, certified: true, schedule: "Sáb · 10h–13h", start: "10 Mai 2026", short: "SEO, redes sociais, conteúdo e campanhas pagas.", img: U("1432888622747-4eb9a8f5a07d") },
  { id: "c4", title: "Contabilidade para não-Contabilistas", area: "Gestão", level: "Iniciante", format: "Presencial", duration: 24, price: 240, hours: 24, rating: 4.6, students: 96, certified: true, schedule: "Seg/Qua · 19h–22h", start: "19 Mai 2026", short: "Lê balanços, demonstrações e fluxos de caixa.", img: U("1554224155-6726b3ff858f") },
  { id: "c5", title: "Programação Web com JavaScript", area: "Tecnologia", level: "Intermédio", format: "Online", duration: 90, price: 590, hours: 90, rating: 4.9, students: 312, certified: true, schedule: "Ter/Qui · 19h–22h", start: "13 Mai 2026", short: "HTML, CSS, JS moderno, frameworks e deploy.", img: U("1517694712202-14dd9538aa97") },
  { id: "c6", title: "Recursos Humanos & Liderança", area: "Gestão", level: "Avançado", format: "Híbrido", duration: 36, price: 340, hours: 36, rating: 4.5, students: 78, certified: true, schedule: "Sex · 18h–21h", start: "08 Mai 2026", short: "Gestão de equipas, feedback e cultura.", img: U("1521737604893-d14cc237f11d") },
  { id: "c7", title: "Apoio Escolar — Matemática 12º", area: "Apoio Escolar", level: "Secundário", format: "Presencial", duration: 60, price: 180, hours: 60, rating: 4.8, students: 412, certified: false, schedule: "Sáb · 9h–12h", start: "Contínuo", short: "Preparação para exame nacional, turmas pequenas.", img: U("1509228627152-72ae9ae6848d") },
  { id: "c8", title: "Photoshop & Illustrator — Design Gráfico", area: "Design", level: "Iniciante", format: "Presencial", duration: 48, price: 380, hours: 48, rating: 4.7, students: 134, certified: true, schedule: "Seg/Qua · 19h–22h", start: "26 Mai 2026", short: "Composição, tipografia e identidade visual.", img: U("1572044162444-ad60f128bdea") },
  { id: "c9", title: "Cibersegurança Essencial", area: "Tecnologia", level: "Intermédio", format: "Online", duration: 40, price: 460, hours: 40, rating: 4.8, students: 88, certified: true, schedule: "Ter/Qui · 19h–21h", start: "20 Mai 2026", short: "Proteção, gestão de risco e boas práticas.", img: U("1550751827-4bd374c3f58b") },
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
