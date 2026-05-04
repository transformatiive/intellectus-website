// Public site — shared chrome (nav, footer) + course card variants
import React from 'react';
import { Icon, fmtEUR } from './data.jsx';
import logoUrl from './logo.svg';

const SiteNav = ({ active = "home", onNav }) => {
  const [open, setOpen] = React.useState(false);
  const go = (screen) => { onNav?.(screen); setOpen(false); };
  return (
    <div className="itx-nav">
      <div className="itx-nav-logo" style={{ cursor: "pointer" }} onClick={() => go("home")}>
        <img src={logoUrl} alt="Intellectus" style={{ height: 28 }} />
      </div>
      <div className={`itx-nav-links${open ? " open" : ""}`}>
        <a onClick={() => go("home")} style={{ color: active === "home" ? "var(--ink)" : undefined, fontWeight: active === "home" ? 500 : 400 }}>Início</a>
        <a onClick={() => go("catalog")} style={{ color: active === "catalog" ? "var(--ink)" : undefined, fontWeight: active === "catalog" ? 500 : 400 }}>Cursos</a>
        <a onClick={() => go("about")} style={{ color: active === "about" ? "var(--ink)" : undefined, fontWeight: active === "about" ? 500 : 400 }}>Sobre</a>
        <a onClick={() => go("blog")} style={{ color: active === "blog" ? "var(--ink)" : undefined, fontWeight: active === "blog" ? 500 : 400 }}>Blog</a>
        <a onClick={() => go("contact")} style={{ color: active === "contact" ? "var(--ink)" : undefined, fontWeight: active === "contact" ? 500 : 400 }}>Contactos</a>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button className="itx-btn itx-btn-ghost itx-btn-sm" title="Pesquisar"><Icon name="search" size={16} /></button>
        <button className="itx-btn itx-btn-ghost itx-btn-sm" title="Carrinho" onClick={() => go("bo-login")}><Icon name="cart" size={16} /></button>
        <button className="itx-btn itx-btn-primary itx-btn-sm itx-nav-cta" onClick={() => go("contact")}>Fale Connosco</button>
        <button className="itx-nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="3" y1="3" x2="15" y2="15"/><line x1="15" y1="3" x2="3" y2="15"/></>
              : <><line x1="2" y1="5" x2="16" y2="5"/><line x1="2" y1="9" x2="16" y2="9"/><line x1="2" y1="13" x2="16" y2="13"/></>
            }
          </svg>
        </button>
      </div>
    </div>
  );
};

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

// Shared image header with date + format badge overlays
const CardImageHeader = ({ course, height = 168 }) => {
  const parts = course.start && course.start !== "Contínuo" ? course.start.split(" ") : null;
  const day = parts?.[0];
  const month = parts?.[1]?.toUpperCase();
  const isOnline = course.format === "Online";
  const isHybrid = course.format === "Híbrido";
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className="itx-img" style={{ height, backgroundImage: `url(${course.img})` }} />
      {day && (
        <div style={{
          position: "absolute", top: 12, left: 12,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
          borderRadius: 10, padding: "8px 13px", textAlign: "center", minWidth: 52,
          boxShadow: "0 2px 8px rgba(0,0,0,.12)"
        }}>
          <div style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 700, lineHeight: 1, color: "var(--ink)" }}>{day}</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "var(--ink-3)", marginTop: 2 }}>{month}</div>
        </div>
      )}
      <div style={{
        position: "absolute", top: 12, right: 12,
        background: isOnline ? "rgba(15,58,34,0.88)" : "rgba(255,255,255,0.88)",
        backdropFilter: "blur(8px)", borderRadius: 999,
        padding: "5px 11px", display: "flex", alignItems: "center", gap: 5,
        boxShadow: "0 2px 8px rgba(0,0,0,.12)"
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: isOnline ? "#6ecf9b" : isHybrid ? "var(--primary)" : "var(--ink-3)", flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: isOnline ? "white" : "var(--ink-2)" }}>
          {isOnline ? "LIVE" : course.format.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

// Course card — three variants
const CourseCard = ({ course, variant = "v1", onAdd, onOpen }) => {
  if (variant === "v2") {
    return (
      <div className="itx-card" style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 0, padding: 0, cursor: "pointer", overflow: "hidden" }} onClick={() => onOpen?.(course)}>
        <div style={{ position: "relative" }}>
          <div className="itx-img" style={{ height: "100%", minHeight: 110, backgroundImage: `url(${course.img})` }} />
          <div style={{
            position: "absolute", bottom: 8, left: 8,
            background: "rgba(15,58,34,0.88)", backdropFilter: "blur(6px)",
            borderRadius: 999, padding: "3px 9px", display: "flex", alignItems: "center", gap: 4
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: course.format === "Online" ? "#6ecf9b" : "rgba(255,255,255,.6)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "white", letterSpacing: "0.05em" }}>{course.format === "Online" ? "LIVE" : course.format.toUpperCase()}</span>
          </div>
        </div>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", gap: 6, marginBottom: 8, alignItems: "center" }}>
              <span className="itx-pill itx-pill-primary" style={{ fontSize: 11 }}>{course.area}</span>
              <span style={{ fontSize: 12, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 3 }}>
                <Icon name="clock" size={11}/>{course.hours}h
              </span>
            </div>
            <div style={{ fontFamily: "var(--display)", fontSize: 17, lineHeight: 1.2, fontWeight: 700, marginBottom: 5 }}>{course.title}</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", lineHeight: 1.5 }}>{course.short}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line)" }}>
            <span style={{ fontSize: 12, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Icon name="cal" size={12}/>{course.start}
            </span>
            <span style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 700, color: "var(--primary)" }}>{fmtEUR(course.price)}</span>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "v3") {
    return (
      <div style={{ cursor: "pointer", borderRadius: "var(--r-xl)", overflow: "hidden", background: "white", border: "1px solid rgba(200,230,215,.7)", boxShadow: "var(--sh-1)", transition: "transform .18s ease, box-shadow .18s ease" }}
        onClick={() => onOpen?.(course)}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--sh-2)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--sh-1)"; }}>
        <CardImageHeader course={course} height={155} />
        <div style={{ padding: "14px 16px 16px" }}>
          <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 9 }}>
            <span className="itx-pill itx-pill-primary" style={{ fontSize: 11 }}>{course.area}</span>
            <span style={{ fontSize: 12, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 3 }}>
              <Icon name="clock" size={11}/>{course.hours}h
            </span>
          </div>
          <div style={{ fontFamily: "var(--display)", fontSize: 18, lineHeight: 1.2, fontWeight: 700, marginBottom: 6 }}>{course.title}</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 10, marginTop: 10 }}>
            <span style={{ fontSize: 12, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Icon name="cal" size={12}/>{course.start}
            </span>
            <span style={{ fontFamily: "var(--display)", fontSize: 19, fontWeight: 700, color: "var(--primary)" }}>{fmtEUR(course.price)}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="itx-card" style={{ padding: 0, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column" }} onClick={() => onOpen?.(course)}>
      <CardImageHeader course={course} height={168} />
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
          <span className="itx-pill itx-pill-primary" style={{ fontSize: 11 }}>{course.area}</span>
          <span style={{ fontSize: 12, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 3 }}>
            <Icon name="clock" size={11}/>{course.hours}h
          </span>
          {course.certified && (
            <span style={{ fontSize: 12, color: "var(--success)", display: "inline-flex", alignItems: "center", gap: 3, marginLeft: "auto" }}>
              <Icon name="check" size={11} color="var(--success)"/>Certificado
            </span>
          )}
        </div>
        <div style={{ fontFamily: "var(--display)", fontSize: 19, lineHeight: 1.2, fontWeight: 700, marginBottom: 7, color: "var(--ink)" }}>{course.title}</div>
        <div style={{ fontSize: 13, color: "var(--ink-3)", lineHeight: 1.55, flex: 1, marginBottom: 14 }}>{course.short}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: 12 }}>
          <span style={{ fontSize: 12, color: "var(--ink-3)", display: "inline-flex", alignItems: "center", gap: 5 }}>
            <Icon name="cal" size={13}/>{course.start}
          </span>
          <span style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 700, color: "var(--primary)" }}>{fmtEUR(course.price)}</span>
        </div>
      </div>
    </div>
  );
};

export { SiteNav, SiteFooter, CourseCard };
