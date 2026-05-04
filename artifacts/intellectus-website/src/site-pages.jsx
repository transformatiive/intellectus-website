// Catalog (with filters), course detail, checkout, about, blog, contact
import React from 'react';
import { COURSES, AREAS, FORMATS, POSTS, Icon, fmtEUR, U, TEAM_IMG, TESTIMONIAL_IMG } from './data.jsx';
import { SiteNav, SiteFooter, CourseCard } from './site-shared.jsx';

const Catalog = ({ onNav, onAdd }) => {
  const [area, setArea] = React.useState("Todas");
  const [format, setFormat] = React.useState("Todos");
  const [duration, setDuration] = React.useState("Todas");
  const [price, setPrice] = React.useState(800);
  const [q, setQ] = React.useState("");
  const [view, setView] = React.useState("grid");

  const filtered = COURSES.filter(c => {
    if (area !== "Todas" && c.area !== area) return false;
    if (format !== "Todos" && c.format !== format) return false;
    if (duration === "<30h" && c.hours >= 30) return false;
    if (duration === "30-60h" && (c.hours < 30 || c.hours > 60)) return false;
    if (duration === ">60h" && c.hours <= 60) return false;
    if (c.price > price) return false;
    if (q && !c.title.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="itx-page">
      <div className="scroll">
        <SiteNav active="catalog" onNav={onNav} />
        <div style={{ padding: "32px 40px 16px", borderBottom: "1px solid var(--line)" }}>
          <div className="itx-pill itx-pill-primary">Catálogo</div>
          <h1 style={{ fontFamily: "var(--display)", fontSize: 44, margin: "10px 0 6px", fontWeight: 600 }}>Todos os cursos</h1>
          <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 14 }}>{filtered.length} cursos encontrados</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24, padding: 24 }}>
          {/* Filters */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 80, alignSelf: "start" }}>
            <div>
              <label className="itx-label">Pesquisar</label>
              <input className="itx-input" placeholder="Nome do curso…" value={q} onChange={e => setQ(e.target.value)} />
            </div>
            <div>
              <label className="itx-label">Área</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {["Todas", ...AREAS].map(a => (
                  <label key={a} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, padding: "4px 0", cursor: "pointer" }}>
                    <input type="radio" checked={area === a} onChange={() => setArea(a)} />
                    {a} <span style={{ marginLeft: "auto", color: "var(--ink-3)", fontSize: 11 }}>{a === "Todas" ? COURSES.length : COURSES.filter(c => c.area === a).length}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="itx-label">Formato</label>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Todos", ...FORMATS].map(f => (
                  <button key={f} className="itx-pill" onClick={() => setFormat(f)} style={{ cursor: "pointer", border: "1px solid", borderColor: format === f ? "var(--primary)" : "var(--line-2)", background: format === f ? "var(--primary-soft)" : "white", color: format === f ? "var(--primary-ink)" : "var(--ink-2)" }}>{f}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="itx-label">Duração</label>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Todas", "<30h", "30-60h", ">60h"].map(d => (
                  <button key={d} className="itx-pill" onClick={() => setDuration(d)} style={{ cursor: "pointer", border: "1px solid", borderColor: duration === d ? "var(--primary)" : "var(--line-2)", background: duration === d ? "var(--primary-soft)" : "white", color: duration === d ? "var(--primary-ink)" : "var(--ink-2)" }}>{d}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="itx-label">Preço máximo: <b style={{ color: "var(--ink)" }}>{fmtEUR(price)}</b></label>
              <input type="range" min={100} max={800} step={20} value={price} onChange={e => setPrice(+e.target.value)} style={{ width: "100%", accentColor: "var(--primary)" }} />
            </div>
          </div>
          {/* Results */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, paddingTop: 21 }}>
              <select className="itx-select" style={{ width: 200 }}><option>Mais relevantes</option><option>Menor preço</option><option>Maior preço</option><option>Avaliação</option></select>
              <div style={{ display: "flex", gap: 4, padding: 3, background: "white", border: "1px solid var(--line-2)", borderRadius: 8 }}>
                <button onClick={() => setView("grid")} className="itx-btn itx-btn-sm" style={{ background: view === "grid" ? "var(--paper-3)" : "transparent", border: "none" }}><Icon name="grid" size={14}/></button>
                <button onClick={() => setView("list")} className="itx-btn itx-btn-sm" style={{ background: view === "list" ? "var(--paper-3)" : "transparent", border: "none" }}><Icon name="list" size={14}/></button>
              </div>
            </div>
            <div style={{ display: view === "grid" ? "grid" : "flex", gridTemplateColumns: "repeat(2, 1fr)", flexDirection: "column", gap: 16 }}>
              {filtered.map(c => <CourseCard key={c.id} course={c} variant={view === "grid" ? "v1" : "v2"} onAdd={onAdd} onOpen={() => onNav?.("course", c.id)} />)}
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
};

const CourseDetail = ({ courseId, onNav, onAdd }) => {
  const c = COURSES.find(x => x.id === courseId) || COURSES[0];
  const [openModule, setOpenModule] = React.useState(null);
  return (
    <div className="itx-page">
      <div className="scroll">
        <SiteNav active="catalog" onNav={onNav} />
        <div style={{ padding: "20px 40px 0", fontSize: 13, color: "var(--ink-3)" }}>
          <a onClick={() => onNav?.("home")} style={{ color: "inherit", cursor: "pointer" }}>Início</a> ›{" "}
          <a onClick={() => onNav?.("catalog")} style={{ color: "inherit", cursor: "pointer" }}>Cursos</a> ›{" "}
          <span style={{ color: "var(--ink)" }}>{c.title}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 32, padding: "20px 40px 40px" }}>
          <div>
            <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
              <span className="itx-pill itx-pill-primary">{c.area}</span>
              <span className="itx-pill">{c.level}</span>
              <span className="itx-pill">{c.format}</span>
              {c.certified && <span className="itx-pill itx-pill-success"><Icon name="check" size={11}/>Certificado DGERT</span>}
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: 48, lineHeight: 1.05, margin: "0 0 16px", fontWeight: 700, letterSpacing: "-.02em" }}>{c.title}</h1>
            <p style={{ fontSize: 17, color: "var(--ink-2)", margin: "0 0 24px", lineHeight: 1.5 }}>{c.short}</p>
            <div className="itx-img" style={{ backgroundImage: `url(${c.img})`, height: 280, borderRadius: 14, marginBottom: 28 }}/>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 600, margin: "24px 0 12px" }}>O que vais aprender</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["Fundamentos sólidos com casos reais", "Exercícios práticos guiados", "Projeto final avaliado", "Acesso a mentoria 1-on-1", "Networking com colegas de turma", "Certificado de conclusão"].map(t => (
                <div key={t} style={{ display: "flex", gap: 8, fontSize: 14 }}><Icon name="check" size={16} color="var(--primary)"/>{t}</div>
              ))}
            </div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 600, margin: "32px 0 12px" }}>Programa</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {(c.modules || []).map((m, i) => {
                const isOpen = openModule === i;
                return (
                  <div key={i} className="itx-card" style={{ overflow: "hidden", cursor: "pointer" }} onClick={() => setOpenModule(isOpen ? null : i)}>
                    <div style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: isOpen ? "var(--primary)" : "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
                          <span style={{ fontFamily: "var(--display)", fontSize: 12, fontWeight: 700, color: isOpen ? "white" : "var(--primary)" }}>{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <div>
                          <b style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>Módulo {i + 1} · {m.title}</b>
                          <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{m.hours}h de formação</div>
                        </div>
                      </div>
                      <div style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0 }}>
                        <Icon name="arrowDown" size={14} color={isOpen ? "var(--primary)" : "var(--ink-3)"}/>
                      </div>
                    </div>
                    {isOpen && (
                      <div style={{ padding: "0 18px 16px 60px", borderTop: "1px solid var(--line-2)" }}>
                        <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                          {(m.topics || []).map((t, j) => (
                            <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--ink-2)", alignItems: "flex-start" }}>
                              <Icon name="check" size={14} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }}/>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Sticky enroll card */}
          <div style={{ position: "sticky", top: 80, alignSelf: "start" }}>
            <div className="itx-card" style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--display)", fontSize: 40, lineHeight: 1, marginBottom: 4 }}>{fmtEUR(c.price)}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 18 }}>ou 3× {fmtEUR(c.price / 3)} sem juros</div>
              <button className="itx-btn itx-btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => { onAdd?.(c); onNav?.("checkout"); }}>Inscrever agora</button>
              <button className="itx-btn itx-btn-secondary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }} onClick={() => onAdd?.(c)}>Adicionar ao carrinho</button>
              <hr className="divider" style={{ margin: "20px 0" }}/>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}><Icon name="cal" size={13} /> Início</span><b>{c.start}</b></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}><Icon name="clock" size={13}/> Horário</span><span>{c.schedule}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}><Icon name="pin" size={13}/> Local</span><span>{c.format === "Online" ? "Zoom" : "Lisboa, Saldanha"}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "var(--ink-3)" }}><Icon name="users" size={13}/> Vagas</span><span>{20 - (c.students % 12)} disponíveis</span></div>
              </div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
};

const Checkout = ({ cart, onNav, setCart }) => {
  const [step, setStep] = React.useState(1);
  const [payment, setPayment] = React.useState("MB WAY");
  const [data, setData] = React.useState({ nome: "", email: "", telefone: "", nif: "", morada: "" });
  const total = cart.reduce((s, c) => s + c.price, 0);
  const valid = data.nome && data.email.includes("@") && data.telefone.length >= 9;

  return (
    <div className="itx-page">
      <div className="scroll">
        <SiteNav onNav={onNav} />
        <div style={{ padding: "32px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <div className="itx-pill itx-pill-primary">Inscrição</div>
          <h1 style={{ fontFamily: "var(--display)", fontSize: 40, margin: "10px 0 4px", fontWeight: 600 }}>Finalizar inscrição</h1>
          {/* Steps */}
          <div style={{ display: "flex", gap: 8, margin: "24px 0" }}>
            {["Dados", "Pagamento", "Revisão", "Confirmação"].map((s, i) => (
              <div key={s} style={{ flex: 1, padding: "10px 14px", borderRadius: 8, background: step > i ? "var(--primary-soft)" : step === i + 1 ? "white" : "var(--paper-3)", border: "1px solid", borderColor: step === i + 1 ? "var(--primary)" : "var(--line)", color: step >= i + 1 ? "var(--primary-ink)" : "var(--ink-3)", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 22, height: 22, borderRadius: 999, background: step > i ? "var(--primary)" : step === i + 1 ? "var(--primary)" : "var(--line-2)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{step > i ? "✓" : i + 1}</span>{s}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24 }}>
            <div className="itx-card">
              {step === 1 && (
                <>
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 600, margin: "0 0 16px" }}>Os teus dados</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ gridColumn: "span 2" }}><label className="itx-label">Nome completo *</label><input className="itx-input" value={data.nome} onChange={e => setData({ ...data, nome: e.target.value })} /></div>
                    <div><label className="itx-label">Email *</label><input className="itx-input" type="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />{data.email && !data.email.includes("@") && <div style={{ color: "var(--danger)", fontSize: 12, marginTop: 4 }}>Email inválido</div>}</div>
                    <div><label className="itx-label">Telefone *</label><input className="itx-input" value={data.telefone} onChange={e => setData({ ...data, telefone: e.target.value })} placeholder="+351 ..." /></div>
                    <div><label className="itx-label">NIF</label><input className="itx-input" value={data.nif} onChange={e => setData({ ...data, nif: e.target.value })} /></div>
                    <div><label className="itx-label">Morada</label><input className="itx-input" value={data.morada} onChange={e => setData({ ...data, morada: e.target.value })} /></div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                    <button className="itx-btn itx-btn-primary" disabled={!valid} style={{ opacity: valid ? 1 : .5 }} onClick={() => setStep(2)}>Continuar para pagamento<Icon name="arrow" size={14}/></button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 600, margin: "0 0 16px" }}>Método de pagamento</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {["Cartão de crédito", "MB WAY", "Multibanco (referência)", "Transferência bancária"].map(p => (
                      <label key={p} className="itx-card" style={{ padding: 14, display: "flex", alignItems: "center", gap: 12, cursor: "pointer", border: "1px solid", borderColor: payment === p ? "var(--primary)" : "var(--line)", background: payment === p ? "var(--primary-soft)" : "white" }}>
                        <input type="radio" checked={payment === p} onChange={() => setPayment(p)} style={{ accentColor: "var(--primary)" }} />
                        <div style={{ flex: 1 }}><b style={{ fontSize: 14 }}>{p}</b><div style={{ fontSize: 12, color: "var(--ink-3)" }}>{p === "MB WAY" ? "Aprovação no telemóvel em segundos" : p === "Multibanco (referência)" ? "Pagar até 48h em qualquer ATM" : p === "Transferência bancária" ? "IBAN enviado por email, validação em 1-2 dias" : "Visa, Mastercard, American Express"}</div></div>
                      </label>
                    ))}
                  </div>
                  {payment === "MB WAY" && (
                    <div style={{ marginTop: 14 }}>
                      <label className="itx-label">Número MB WAY</label>
                      <input className="itx-input" placeholder="9XX XXX XXX" defaultValue={data.telefone} />
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                    <button className="itx-btn itx-btn-ghost" onClick={() => setStep(1)}>Voltar</button>
                    <button className="itx-btn itx-btn-primary" onClick={() => setStep(3)}>Rever inscrição<Icon name="arrow" size={14}/></button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 600, margin: "0 0 16px" }}>Revisão</h3>
                  <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                    <div><b>Nome:</b> {data.nome}</div>
                    <div><b>Email:</b> {data.email}</div>
                    <div><b>Telefone:</b> {data.telefone}</div>
                    {data.nif && <div><b>NIF:</b> {data.nif}</div>}
                    <div><b>Pagamento:</b> {payment}</div>
                  </div>
                  <hr className="divider" style={{ margin: "16px 0" }}/>
                  <label style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13 }}>
                    <input type="checkbox" defaultChecked style={{ marginTop: 3, accentColor: "var(--primary)" }} />
                    <span>Aceito os <a style={{ color: "var(--primary)" }}>termos e condições</a> e a <a style={{ color: "var(--primary)" }}>política de privacidade</a>.</span>
                  </label>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                    <button className="itx-btn itx-btn-ghost" onClick={() => setStep(2)}>Voltar</button>
                    <button className="itx-btn itx-btn-primary" onClick={() => setStep(4)}>Confirmar inscrição<Icon name="check" size={14}/></button>
                  </div>
                </>
              )}
              {step === 4 && (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: 60, height: 60, borderRadius: 999, background: "var(--primary-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon name="check" size={28} color="var(--primary)" strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 30, fontWeight: 600, margin: 0 }}>Inscrição confirmada!</h3>
                  <p style={{ color: "var(--ink-2)", marginTop: 10 }}>Enviámos os detalhes para <b>{data.email}</b>.<br/>Referência <span className="kbd">INS-2026-0143</span></p>
                  <button className="itx-btn itx-btn-primary" style={{ marginTop: 18 }} onClick={() => { setCart([]); onNav?.("home"); }}>Voltar ao início</button>
                </div>
              )}
            </div>
            {/* Order summary */}
            <div className="itx-card" style={{ padding: 20, alignSelf: "start", position: "sticky", top: 80 }}>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 600, margin: "0 0 12px" }}>Resumo</h4>
              {cart.length === 0 && <div style={{ fontSize: 13, color: "var(--ink-3)" }}>Nenhum curso no carrinho.</div>}
              {cart.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                  <div className="itx-img" style={{ backgroundImage: `url(${c.img})`, width: 48, height: 48, borderRadius: 6 }}/>
                  <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{c.title}</div><div style={{ fontSize: 12, color: "var(--ink-3)" }}>{c.start}</div></div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{fmtEUR(c.price)}</div>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, fontSize: 13, color: "var(--ink-3)" }}><span>Subtotal</span><span>{fmtEUR(total)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 6, fontSize: 13, color: "var(--ink-3)" }}><span>IVA (incluído)</span><span>{fmtEUR(total * 0.23)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, marginTop: 8, borderTop: "1px solid var(--line)", fontFamily: "var(--display)", fontSize: 22 }}><span>Total</span><span>{fmtEUR(total)}</span></div>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
};

const MVV = [
  { icon: "book",  title: "Missão",      text: "Formar profissionais com competências reais, validadas pelo mercado de trabalho e adaptadas à evolução das exigências setoriais." },
  { icon: "eye",   title: "Visão",       text: "Ser a referência de formação técnica e profissional em Lisboa, reconhecida pela qualidade pedagógica e pelo impacto nas carreiras." },
  { icon: "check", title: "Valores",     text: "Rigor técnico, ética profissional e proximidade com cada aluno — desde a primeira sessão até ao certificado final." },
];

const About = ({ onNav }) => (
  <div className="itx-page"><div className="scroll">
    <SiteNav active="about" onNav={onNav} />

    {/* ── Hero block ── */}
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 40px 0" }}>

      {/* Split header: large title left / description right */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 40 }}>
        <div>
          <span className="itx-pill itx-pill-primary" style={{ marginBottom: 16, display: "inline-flex" }}>Quem somos</span>
          <h1 style={{ fontFamily: "var(--display)", fontSize: 52, lineHeight: 1.06, fontWeight: 700, margin: "12px 0 0", textWrap: "balance", color: "var(--ink)" }}>
            Apresentação<br/>Institucional da<br/>Intellectus
          </h1>
        </div>
        <div style={{ paddingBottom: 6 }}>
          <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 20px", textWrap: "pretty" }}>
            A Intellectus é um centro de formação técnica e profissional dedicado ao desenvolvimento de competências aplicadas, orientadas para a prática e alinhadas com as exigências legais e técnicas dos diferentes setores de atividade.
          </p>
          <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7, margin: 0, textWrap: "pretty" }}>
            Desenvolvemos soluções formativas flexíveis para profissionais e entidades — presenciais, online e híbridas — desde 2008.
          </p>
        </div>
      </div>

      {/* Wide image with stat overlay */}
      <div style={{ position: "relative", borderRadius: 24, overflow: "hidden" }}>
        <div className="itx-img" style={{
          backgroundImage: `url(${U("1552664730-d307ca884978", 1400)})`,
          height: 420,
        }}/>

        {/* Dark green stat card — top right, overlaid on image */}
        <div style={{
          position: "absolute", top: 24, right: 24,
          background: "var(--primary)",
          borderRadius: 18, padding: "20px 28px",
          display: "flex", gap: 0, alignItems: "stretch",
          boxShadow: "var(--sh-3)"
        }}>
          {[
            { num: "+2.400", label: "Alunos\nformados" },
            { num: "+60",    label: "Cursos\nno catálogo" },
          ].map(({ num, label }, i) => (
            <div key={num} style={{
              display: "flex", flexDirection: "column", alignItems: "flex-start",
              paddingRight: i === 0 ? 28 : 0,
              paddingLeft:  i === 1 ? 28 : 0,
              borderLeft: i === 1 ? "1px solid rgba(255,255,255,.25)" : "none"
            }}>
              <span style={{ fontFamily: "var(--display)", fontSize: 34, fontWeight: 800, color: "white", lineHeight: 1 }}>{num}</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,.72)", marginTop: 5, lineHeight: 1.4, whiteSpace: "pre-line" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── Missão / Visão / Valores ── */}
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {MVV.map(({ icon, title, text }) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Icon circle */}
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "var(--primary-soft)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0
            }}>
              <Icon name={icon} size={20} color="var(--primary)" strokeWidth={1.8}/>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 700, margin: "0 0 8px", color: "var(--ink)" }}>{title}</h4>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, margin: 0 }}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ── Equipa ── */}
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 72px" }}>
      <h2 style={{ fontFamily: "var(--display)", fontSize: 34, margin: "0 0 24px", fontWeight: 700 }}>Equipa</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {[["Sérgio Marques", "Diretor pedagógico"], ["Rui Andrade", "Coord. Tecnologia"], ["Cláudia Sousa", "Coord. Línguas"], ["André Dias", "Coord. Gestão"]].map(([n, r]) => (
          <div key={n}>
            <div className="itx-img" style={{ backgroundImage: `url(${TESTIMONIAL_IMG})`, aspectRatio: "1", borderRadius: 14 }}/>
            <div style={{ marginTop: 10, fontFamily: "var(--display)", fontSize: 17, fontWeight: 600 }}>{n}</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{r}</div>
          </div>
        ))}
      </div>
    </div>

    <SiteFooter />
  </div></div>
);

const Blog = ({ onNav }) => (
  <div className="itx-page"><div className="scroll">
    <SiteNav active="blog" onNav={onNav} />
    <div style={{ padding: "40px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="itx-pill itx-pill-primary">Blog</div>
      <h1 style={{ fontFamily: "var(--display)", fontSize: 48, margin: "10px 0 28px", fontWeight: 600 }}>Notícias e ideias</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20, marginBottom: 28 }}>
        <div className="itx-card" style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}>
          <div className="itx-img" style={{ backgroundImage: `url(${U("1456513080510-7bf3a84b82f8", 1200)})`, height: 320 }}/>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 10 }}><span className="itx-pill itx-pill-primary">{POSTS[0].cat}</span><span className="itx-pill">{POSTS[0].date}</span></div>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 600, margin: "0 0 8px" }}>{POSTS[0].title}</h3>
            <p style={{ color: "var(--ink-2)", fontSize: 14, margin: 0 }}>{POSTS[0].excerpt}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {POSTS.slice(1).map(p => (
            <div key={p.id} className="itx-card" style={{ padding: 16, cursor: "pointer", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", gap: 6 }}><span className="itx-pill itx-pill-primary">{p.cat}</span><span style={{ fontSize: 11, color: "var(--ink-3)", alignSelf: "center" }}>{p.date} · {p.read}</span></div>
              <div style={{ fontFamily: "var(--display)", fontSize: 19, lineHeight: 1.25 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{p.excerpt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <SiteFooter />
  </div></div>
);

const Contact = ({ onNav }) => (
  <div className="itx-page"><div className="scroll">
    <SiteNav active="contact" onNav={onNav} />
    <div style={{ padding: "60px 40px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
      <div>
        <div className="itx-pill itx-pill-primary">Contactos</div>
        <h1 style={{ fontFamily: "var(--display)", fontSize: 48, margin: "12px 0 16px", fontWeight: 600, textWrap: "balance" }}>Falar com a equipa Intellectus.</h1>
        <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6 }}>Respondemos em menos de 24h. Para empresas, marca uma reunião connosco.</p>
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", gap: 14 }}><div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="pin" size={18} color="var(--primary)"/></div><div><b>Sede</b><div style={{ fontSize: 13, color: "var(--ink-2)" }}>Rua das Escolas, 142, 1200-100 Lisboa</div></div></div>
          <div style={{ display: "flex", gap: 14 }}><div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="phone" size={18} color="var(--primary)"/></div><div><b>Telefone</b><div style={{ fontSize: 13, color: "var(--ink-2)" }}>+351 210 000 000 · 9h–19h dias úteis</div></div></div>
          <div style={{ display: "flex", gap: 14 }}><div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="mail" size={18} color="var(--primary)"/></div><div><b>Email</b><div style={{ fontSize: 13, color: "var(--ink-2)" }}>geral@intellectus.pt</div></div></div>
        </div>
      </div>
      <div className="itx-card" style={{ padding: 28 }}>
        <h3 style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 600, margin: "0 0 16px" }}>Envia uma mensagem</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div><label className="itx-label">Nome</label><input className="itx-input" /></div>
          <div><label className="itx-label">Email</label><input className="itx-input" type="email" /></div>
          <div style={{ gridColumn: "span 2" }}><label className="itx-label">Assunto</label><select className="itx-select"><option>Quero saber mais sobre um curso</option><option>Formação para empresas</option><option>Outro</option></select></div>
          <div style={{ gridColumn: "span 2" }}><label className="itx-label">Mensagem</label><textarea className="itx-textarea" rows={5}></textarea></div>
        </div>
        <button className="itx-btn itx-btn-primary" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>Enviar mensagem<Icon name="arrow" size={14}/></button>
      </div>
    </div>
    <SiteFooter />
  </div></div>
);

export { Catalog, CourseDetail, Checkout, About, Blog, Contact };
