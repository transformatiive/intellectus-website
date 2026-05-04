// Public site — shared chrome (nav, footer) + course card variants
import { Icon, fmtEUR } from './data.jsx';
import logoUrl from './logo.svg';

const SiteNav = ({ active = "home", onNav }) => (
  <div className="itx-nav">
    <div className="itx-nav-logo"><img src={logoUrl} alt="Intellectus" style={{ height: 28 }} /></div>
    <div className="itx-nav-links">
      <a onClick={() => onNav?.("home")} style={{ color: active === "home" ? "var(--ink)" : undefined, fontWeight: active === "home" ? 500 : 400 }}>Início</a>
      <a onClick={() => onNav?.("catalog")} style={{ color: active === "catalog" ? "var(--ink)" : undefined, fontWeight: active === "catalog" ? 500 : 400 }}>Cursos</a>
      <a onClick={() => onNav?.("about")} style={{ color: active === "about" ? "var(--ink)" : undefined, fontWeight: active === "about" ? 500 : 400 }}>Sobre</a>
      <a onClick={() => onNav?.("blog")} style={{ color: active === "blog" ? "var(--ink)" : undefined, fontWeight: active === "blog" ? 500 : 400 }}>Blog</a>
      <a onClick={() => onNav?.("contact")} style={{ color: active === "contact" ? "var(--ink)" : undefined, fontWeight: active === "contact" ? 500 : 400 }}>Contactos</a>
    </div>
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <button className="itx-btn itx-btn-ghost itx-btn-sm" title="Pesquisar"><Icon name="search" size={16} /></button>
      <button className="itx-btn itx-btn-ghost itx-btn-sm" title="Carrinho"><Icon name="cart" size={16} /></button>
      <button className="itx-btn itx-btn-secondary itx-btn-sm" onClick={() => onNav?.("bo-login")}>Entrar</button>
      <button className="itx-btn itx-btn-primary itx-btn-sm">Inscrever</button>
    </div>
  </div>
);

const SiteFooter = () => (
  <div className="itx-foot">
    <div>
      <div style={{ marginBottom: 10 }}><img src={logoUrl} alt="Intellectus" style={{ height: 28, filter: "brightness(0) invert(1)" }} /></div>
      <div style={{ fontSize: 13, lineHeight: 1.6, opacity: .8, maxWidth: 280 }}>Centro de formação certificado. Cursos para profissionais, empresas e estudantes.</div>
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <span className="itx-pill" style={{ background: "rgba(255,255,255,.08)", color: "oklch(0.85 0.005 90)" }}>Certificado DGERT</span>
      </div>
    </div>
    <div>
      <h5>Cursos</h5>
      <a>Tecnologia</a><a>Línguas</a><a>Marketing</a><a>Gestão</a><a>Apoio Escolar</a>
    </div>
    <div>
      <h5>Empresa</h5>
      <a>Sobre nós</a><a>Equipa</a><a>Carreiras</a><a>Blog</a>
    </div>
    <div>
      <h5>Contactos</h5>
      <div style={{ fontSize: 13, lineHeight: 1.7, opacity: .85 }}>
        Rua das Escolas, 142<br/>1200-100 Lisboa<br/>+351 210 000 000<br/>geral@intellectus.pt
      </div>
    </div>
  </div>
);

// Course card — three variants
const CourseCard = ({ course, variant = "v1", onAdd, onOpen }) => {
  if (variant === "v2") {
    // Compact horizontal
    return (
      <div className="itx-card" style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, padding: 14, cursor: "pointer" }} onClick={() => onOpen?.(course)}>
        <div className="itx-img" style={{ height: 120, borderRadius: 8, backgroundImage: `url(${course.img})` }}/>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 0 }}>
          <div>
            <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
              <span className="itx-pill itx-pill-primary">{course.area}</span>
              <span className="itx-pill">{course.format}</span>
            </div>
            <div style={{ fontFamily: "var(--display)", fontSize: 19, lineHeight: 1.2, marginBottom: 6 }}>{course.title}</div>
            <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{course.short}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <span style={{ fontFamily: "var(--display)", fontSize: 22 }}>{fmtEUR(course.price)}</span>
            <button className="itx-btn itx-btn-primary itx-btn-sm" onClick={(e) => { e.stopPropagation(); onAdd?.(course); }}>Inscrever</button>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "v3") {
    // Editorial — image dominant, text overlaid below
    return (
      <div style={{ cursor: "pointer", borderRadius: 14, overflow: "hidden", background: "white", border: "1px solid var(--line)" }} onClick={() => onOpen?.(course)}>
        <div className="itx-img" style={{ height: 160, backgroundImage: `url(${course.img})` }}/>
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--primary)" }}>{course.area} · {course.level}</div>
          <div style={{ fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.15, margin: "6px 0 8px" }}>{course.title}</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid var(--line)", paddingTop: 10, marginTop: 10 }}>
            <span style={{ fontSize: 13, color: "var(--ink-3)" }}>{course.hours}h · {course.format}</span>
            <span style={{ fontFamily: "var(--display)", fontSize: 22 }}>{fmtEUR(course.price)}</span>
          </div>
        </div>
      </div>
    );
  }
  // v1 default: clean card with image top
  return (
    <div className="itx-card" style={{ padding: 0, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column" }} onClick={() => onOpen?.(course)}>
      <div className="itx-img" style={{ height: 140, backgroundImage: `url(${course.img})` }}/>
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span className="itx-pill itx-pill-primary">{course.area}</span>
          {course.certified && <span className="itx-pill itx-pill-success"><Icon name="check" size={11}/>Certificado</span>}
        </div>
        <div style={{ fontFamily: "var(--display)", fontSize: 21, lineHeight: 1.2 }}>{course.title}</div>
        <div style={{ fontSize: 13, color: "var(--ink-3)", lineHeight: 1.5, flex: 1 }}>{course.short}</div>
        <div style={{ display: "flex", gap: 12, fontSize: 12, color: "var(--ink-3)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="clock" size={12}/>{course.hours}h</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="star" size={12} color="oklch(0.72 0.16 55)"/>{course.rating}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="users" size={12}/>{course.students}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4, borderTop: "1px solid var(--line)", paddingTop: 12 }}>
          <span style={{ fontFamily: "var(--display)", fontSize: 22 }}>{fmtEUR(course.price)}</span>
          <button className="itx-btn itx-btn-primary itx-btn-sm" onClick={(e) => { e.stopPropagation(); onAdd?.(course); }}>
            <Icon name="plus" size={13}/>Inscrever
          </button>
        </div>
      </div>
    </div>
  );
};

export { SiteNav, SiteFooter, CourseCard };
