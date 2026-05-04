// Backoffice — login, dashboard, courses, enrollments, payments, reports, CMS
import React from 'react';
import { COURSES, ENROLLMENTS, AREAS, Icon, fmtEUR, HERO_IMG_ALT } from './data.jsx';
import logoUrl from './logo.svg';

const BoSidebar = ({ active, onNav }) => (
  <div className="bo-side">
    <div className="logo"><img src={logoUrl} alt="Intellectus" style={{ height: 26 }} /></div>
    <a className={active === "dash" ? "active" : ""} onClick={() => onNav("dash")}><Icon name="home" size={15}/>Dashboard</a>
    <div className="group-title">Conteúdo</div>
    <a className={active === "courses" ? "active" : ""} onClick={() => onNav("courses")}><Icon name="book" size={15}/>Cursos</a>
    <a className={active === "cms" ? "active" : ""} onClick={() => onNav("cms")}><Icon name="file" size={15}/>Páginas (CMS)</a>
    <div className="group-title">Operação</div>
    <a className={active === "enroll" ? "active" : ""} onClick={() => onNav("enroll")}><Icon name="users" size={15}/>Inscrições</a>
    <a className={active === "pay" ? "active" : ""} onClick={() => onNav("pay")}><Icon name="eur" size={15}/>Pagamentos</a>
    <a className={active === "reports" ? "active" : ""} onClick={() => onNav("reports")}><Icon name="chart" size={15}/>Relatórios</a>
    <div className="group-title">Sistema</div>
    <a><Icon name="settings" size={15}/>Definições</a>
  </div>
);

const BoTopbar = ({ title, action }) => (
  <div className="bo-topbar">
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <h2 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: 0 }}>{title}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", background: "var(--paper-2)", borderRadius: 8, width: 280 }}>
        <Icon name="search" size={14} color="var(--ink-3)"/>
        <input style={{ border: "none", outline: "none", background: "transparent", fontSize: 13, width: "100%" }} placeholder="Pesquisar cursos, alunos, inscrições…" />
        <span className="kbd">⌘K</span>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {action}
      <button className="itx-btn itx-btn-ghost itx-btn-sm" style={{ position: "relative" }}>
        <Icon name="bell" size={16}/>
        <span style={{ position: "absolute", top: 4, right: 4, width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }}/>
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
        <div style={{ width: 30, height: 30, borderRadius: 999, background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500 }}>HM</div>
        <div><div style={{ fontWeight: 500 }}>Helena M.</div><div style={{ fontSize: 11, color: "var(--ink-3)" }}>Diretora</div></div>
      </div>
    </div>
  </div>
);

const BoLogin = ({ onLogin }) => {
  const [email, setEmail] = React.useState("helena@intellectus.pt");
  const [pwd, setPwd] = React.useState("••••••••••");
  return (
    <div className="itx-page" style={{ background: "var(--paper-2)" }}>
      <div style={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 880, width: "100%", borderRadius: 16, overflow: "hidden", boxShadow: "var(--sh-3)" }}>
          <div style={{ padding: 40, background: "white" }}>
            <div style={{ fontFamily: "var(--display)", fontSize: 26, marginBottom: 4 }}>intellectus<b style={{ color: "var(--primary)", fontWeight: 600 }}>.</b></div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 28 }}>Backoffice</div>
            <h2 style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 600, margin: "0 0 6px" }}>Bem-vinda de volta.</h2>
            <p style={{ color: "var(--ink-3)", fontSize: 14, margin: "0 0 24px" }}>Entra com a tua conta de equipa.</p>
            <label className="itx-label">Email</label>
            <input className="itx-input" value={email} onChange={e => setEmail(e.target.value)} style={{ marginBottom: 14 }}/>
            <label className="itx-label">Palavra-passe</label>
            <input className="itx-input" type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, fontSize: 13 }}>
              <label style={{ display: "flex", gap: 6, alignItems: "center" }}><input type="checkbox" defaultChecked style={{ accentColor: "var(--primary)" }}/>Manter sessão</label>
              <a style={{ color: "var(--primary)", cursor: "pointer" }}>Recuperar palavra-passe</a>
            </div>
            <button className="itx-btn itx-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 22 }} onClick={onLogin}>Entrar<Icon name="arrow" size={14}/></button>
          </div>
          <div className="itx-img" style={{ backgroundImage: `url(${HERO_IMG_ALT})`, minHeight: 480 }}/>
        </div>
      </div>
    </div>
  );
};

const BoDash = ({ onNav }) => (
  <div className="itx-page"><div className="bo-shell">
    <BoSidebar active="dash" onNav={onNav}/>
    <div className="bo-main">
      <BoTopbar title="Dashboard" action={<button className="itx-btn itx-btn-secondary itx-btn-sm"><Icon name="download" size={13}/>Exportar</button>}/>
      <div className="bo-content">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
          {[["Inscrições (mês)", "142", "+18% vs. Mar", false], ["Receita (mês)", fmtEUR(38420), "+22%", false], ["Cursos ativos", "23", "+2 novos", false], ["Taxa conclusão", "87%", "−3%", true]].map(([l, v, d, down]) => (
            <div key={l} className="bo-stat"><div className="lbl">{l}</div><div className="val">{v}</div><div className={`delta ${down ? "down" : ""}`}>{d}</div></div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 14 }}>
          <div className="itx-card" style={{ padding: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 600, margin: 0 }}>Inscrições — últimos 30 dias</h3>
              <select className="itx-select" style={{ width: 140 }}><option>30 dias</option><option>90 dias</option><option>Ano</option></select>
            </div>
            {/* Inline SVG bar chart */}
            <svg viewBox="0 0 600 200" style={{ width: "100%", height: 200 }}>
              {[12, 18, 14, 22, 19, 24, 20, 28, 26, 32, 30, 35, 38, 34, 40, 42, 38, 45, 42, 48, 50, 44, 52, 56, 54, 58, 62, 60, 65, 70].map((h, i) => (
                <rect key={i} x={i * 19 + 6} y={200 - h * 2.5} width={14} height={h * 2.5} fill={i === 29 ? "var(--accent)" : "var(--primary)"} rx={2} opacity={i === 29 ? 1 : 0.85}/>
              ))}
            </svg>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}><span>30 Mar</span><span>15 Abr</span><span>28 Abr</span></div>
          </div>
          <div className="itx-card" style={{ padding: 20 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 600, margin: "0 0 14px" }}>Cursos com mais inscrições</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {COURSES.slice(0, 5).map((c, i) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 12, color: "var(--ink-3)", width: 16 }}>{i + 1}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.title}</div>
                    <div style={{ height: 4, background: "var(--paper-3)", borderRadius: 999, marginTop: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(c.students / 412) * 100}%`, background: "var(--primary)", borderRadius: 999 }}/>
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color: "var(--ink-2)", fontVariantNumeric: "tabular-nums" }}>{c.students}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="itx-card" style={{ padding: 20, marginTop: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 600, margin: 0 }}>Inscrições recentes</h3>
            <a onClick={() => onNav("enroll")} style={{ fontSize: 13, color: "var(--primary)", cursor: "pointer" }}>Ver todas →</a>
          </div>
          <table className="bo-table" style={{ border: "none" }}>
            <thead><tr><th>Ref</th><th>Aluno</th><th>Curso</th><th>Data</th><th>Estado</th><th style={{ textAlign: "right" }}>Valor</th></tr></thead>
            <tbody>{ENROLLMENTS.slice(0, 5).map(e => (
              <tr key={e.id}><td className="kbd" style={{ fontSize: 11 }}>{e.id}</td><td>{e.student}</td><td>{e.course}</td><td>{e.date}</td><td><span className={`itx-pill ${e.status === "Pago" ? "itx-pill-success" : e.status === "Pendente" ? "itx-pill-warn" : e.status === "Aprovado" ? "itx-pill-info" : "itx-pill-danger"}`}>{e.status}</span></td><td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{fmtEUR(e.amount)}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  </div></div>
);

const BoCourses = ({ onNav, onEdit }) => (
  <div className="itx-page"><div className="bo-shell">
    <BoSidebar active="courses" onNav={onNav}/>
    <div className="bo-main">
      <BoTopbar title="Cursos" action={<button className="itx-btn itx-btn-primary itx-btn-sm" onClick={() => onEdit(COURSES[0])}><Icon name="plus" size={13}/>Novo curso</button>}/>
      <div className="bo-content">
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          {["Todos", ...AREAS].map((a, i) => <button key={a} className="itx-pill" style={{ cursor: "pointer", border: "1px solid", borderColor: i === 0 ? "var(--primary)" : "var(--line-2)", background: i === 0 ? "var(--primary-soft)" : "white", color: i === 0 ? "var(--primary-ink)" : "var(--ink-2)" }}>{a} <span style={{ opacity: .6 }}>{i === 0 ? COURSES.length : COURSES.filter(c => c.area === a).length}</span></button>)}
        </div>
        <table className="bo-table">
          <thead><tr><th>Curso</th><th>Área</th><th>Formato</th><th>Início</th><th>Vagas</th><th>Inscritos</th><th>Preço</th><th></th></tr></thead>
          <tbody>{COURSES.map(c => (
            <tr key={c.id} style={{ cursor: "pointer" }} onClick={() => onEdit(c)}>
              <td><div style={{ display: "flex", gap: 10, alignItems: "center" }}><div className="itx-img" style={{ backgroundImage: `url(${c.img})`, width: 36, height: 36, borderRadius: 6 }}/><div><b>{c.title}</b><div style={{ fontSize: 11, color: "var(--ink-3)" }}>{c.level} · {c.hours}h</div></div></div></td>
              <td><span className="itx-pill itx-pill-primary">{c.area}</span></td>
              <td>{c.format}</td>
              <td>{c.start}</td>
              <td><span className="itx-pill itx-pill-success">{20 - (c.students % 12)}/20</span></td>
              <td style={{ fontVariantNumeric: "tabular-nums" }}>{c.students}</td>
              <td style={{ fontVariantNumeric: "tabular-nums" }}>{fmtEUR(c.price)}</td>
              <td><button className="itx-btn itx-btn-ghost itx-btn-sm" onClick={(e) => { e.stopPropagation(); onEdit(c); }}><Icon name="edit" size={13}/></button></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  </div></div>
);

const BoCourseEdit = ({ course, onNav, onClose }) => {
  const [c, setC] = React.useState(course);
  const [tab, setTab] = React.useState("info");
  const [saved, setSaved] = React.useState(false);
  const set = (k, v) => setC({ ...c, [k]: v });
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 1800); };
  return (
    <div className="itx-page"><div className="bo-shell">
      <BoSidebar active="courses" onNav={onNav}/>
      <div className="bo-main">
        <BoTopbar title="Editar curso" action={<><button className="itx-btn itx-btn-secondary itx-btn-sm" onClick={onClose}>Cancelar</button><button className="itx-btn itx-btn-primary itx-btn-sm" onClick={save}><Icon name="check" size={13}/>{saved ? "Guardado!" : "Guardar"}</button></>}/>
        <div className="bo-content">
          <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 8 }}><a onClick={onClose} style={{ cursor: "pointer", color: "inherit" }}>Cursos</a> › <span style={{ color: "var(--ink)" }}>{c.title}</span></div>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 180, position: "sticky", top: 0 }}>
              {[["info", "Informação"], ["program", "Programa"], ["pricing", "Preços e turmas"], ["media", "Imagens"], ["seo", "SEO"]].map(([k, l]) => (
                <a key={k} className={tab === k ? "active" : ""} onClick={() => setTab(k)} style={{ padding: "8px 12px", borderRadius: 6, fontSize: 13, color: tab === k ? "var(--primary-ink)" : "var(--ink-2)", background: tab === k ? "var(--primary-soft)" : "transparent", cursor: "pointer" }}>{l}</a>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              {tab === "info" && (
                <div className="itx-card">
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>Informação básica</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div style={{ gridColumn: "span 2" }}><label className="itx-label">Título</label><input className="itx-input" value={c.title} onChange={e => set("title", e.target.value)}/></div>
                    <div style={{ gridColumn: "span 2" }}><label className="itx-label">Descrição curta</label><textarea className="itx-textarea" rows={3} value={c.short} onChange={e => set("short", e.target.value)}/></div>
                    <div><label className="itx-label">Área</label><select className="itx-select" value={c.area} onChange={e => set("area", e.target.value)}>{AREAS.map(a => <option key={a}>{a}</option>)}</select></div>
                    <div><label className="itx-label">Formato</label><select className="itx-select" value={c.format} onChange={e => set("format", e.target.value)}>{FORMATS.map(f => <option key={f}>{f}</option>)}</select></div>
                    <div><label className="itx-label">Nível</label><select className="itx-select" value={c.level} onChange={e => set("level", e.target.value)}><option>Iniciante</option><option>Intermédio</option><option>Avançado</option><option>Secundário</option></select></div>
                    <div><label className="itx-label">Duração (horas)</label><input className="itx-input" type="number" value={c.hours} onChange={e => set("hours", +e.target.value)}/></div>
                    <div style={{ gridColumn: "span 2", display: "flex", gap: 16, fontSize: 13, marginTop: 4 }}>
                      <label style={{ display: "flex", gap: 8, alignItems: "center" }}><input type="checkbox" checked={c.certified} onChange={e => set("certified", e.target.checked)} style={{ accentColor: "var(--primary)" }}/>Certificação DGERT</label>
                      <label style={{ display: "flex", gap: 8, alignItems: "center" }}><input type="checkbox" defaultChecked style={{ accentColor: "var(--primary)" }}/>Visível no site</label>
                      <label style={{ display: "flex", gap: 8, alignItems: "center" }}><input type="checkbox" style={{ accentColor: "var(--primary)" }}/>Inscrições fechadas</label>
                    </div>
                  </div>
                </div>
              )}
              {tab === "program" && (
                <div className="itx-card">
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>Programa</h3>
                  {["Módulo 1 · Introdução e fundamentos", "Módulo 2 · Casos práticos", "Módulo 3 · Aprofundamento técnico", "Módulo 4 · Projeto final"].map((m, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                      <Icon name="menu" size={14} color="var(--ink-3)"/>
                      <input className="itx-input" defaultValue={m} style={{ flex: 1 }}/>
                      <input className="itx-input" defaultValue={`${Math.floor(c.hours / 4)}h`} style={{ width: 80 }}/>
                      <button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="trash" size={13}/></button>
                    </div>
                  ))}
                  <button className="itx-btn itx-btn-secondary itx-btn-sm" style={{ marginTop: 14 }}><Icon name="plus" size={13}/>Adicionar módulo</button>
                </div>
              )}
              {tab === "pricing" && (
                <div className="itx-card">
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>Preços e turmas</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                    <div><label className="itx-label">Preço (€)</label><input className="itx-input" type="number" value={c.price} onChange={e => set("price", +e.target.value)}/></div>
                    <div><label className="itx-label">Vagas</label><input className="itx-input" type="number" defaultValue={20}/></div>
                    <div><label className="itx-label">Permite prestações</label><select className="itx-select"><option>Até 3× sem juros</option><option>Sem prestações</option></select></div>
                  </div>
                  <h4 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 600, margin: "20px 0 10px" }}>Próximas turmas</h4>
                  <table className="bo-table" style={{ border: "1px solid var(--line)" }}>
                    <thead><tr><th>Início</th><th>Horário</th><th>Local</th><th>Vagas</th><th></th></tr></thead>
                    <tbody>
                      <tr><td>{c.start}</td><td>{c.schedule}</td><td>Lisboa, Saldanha</td><td>14/20</td><td><button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="edit" size={13}/></button></td></tr>
                      <tr><td>15 Set 2026</td><td>{c.schedule}</td><td>Lisboa, Saldanha</td><td>20/20</td><td><button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="edit" size={13}/></button></td></tr>
                    </tbody>
                  </table>
                </div>
              )}
              {tab === "media" && (
                <div className="itx-card">
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>Imagens</h3>
                  <div className="itx-img" style={{ backgroundImage: `url(${c.img})`, height: 200, borderRadius: 12, marginBottom: 12 }}/>
                  <button className="itx-btn itx-btn-secondary itx-btn-sm"><Icon name="upload" size={13}/>Carregar imagem</button>
                </div>
              )}
              {tab === "seo" && (
                <div className="itx-card">
                  <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>SEO</h3>
                  <div style={{ display: "grid", gap: 12 }}>
                    <div><label className="itx-label">Slug</label><input className="itx-input" defaultValue={c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/></div>
                    <div><label className="itx-label">Meta title</label><input className="itx-input" defaultValue={`${c.title} · Intellectus`}/></div>
                    <div><label className="itx-label">Meta description</label><textarea className="itx-textarea" rows={3} defaultValue={c.short}/></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

const BoEnroll = ({ onNav }) => {
  const [items, setItems] = React.useState(ENROLLMENTS);
  const [filter, setFilter] = React.useState("Todas");
  const filtered = filter === "Todas" ? items : items.filter(e => e.status === filter);
  const action = (id, status) => setItems(items.map(e => e.id === id ? { ...e, status } : e));

  return (
    <div className="itx-page"><div className="bo-shell">
      <BoSidebar active="enroll" onNav={onNav}/>
      <div className="bo-main">
        <BoTopbar title="Inscrições" action={<button className="itx-btn itx-btn-secondary itx-btn-sm"><Icon name="download" size={13}/>Exportar CSV</button>}/>
        <div className="bo-content">
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {["Todas", "Pendente", "Pago", "Aprovado", "Cancelado"].map(s => (
              <button key={s} className="itx-pill" onClick={() => setFilter(s)} style={{ cursor: "pointer", border: "1px solid", borderColor: filter === s ? "var(--primary)" : "var(--line-2)", background: filter === s ? "var(--primary-soft)" : "white", color: filter === s ? "var(--primary-ink)" : "var(--ink-2)" }}>{s} <span style={{ opacity: .6 }}>{s === "Todas" ? items.length : items.filter(e => e.status === s).length}</span></button>
            ))}
          </div>
          <table className="bo-table">
            <thead><tr><th><input type="checkbox" style={{ accentColor: "var(--primary)" }}/></th><th>Ref</th><th>Aluno</th><th>Curso</th><th>Data</th><th>Pagamento</th><th>Estado</th><th style={{ textAlign: "right" }}>Valor</th><th>Ações</th></tr></thead>
            <tbody>{filtered.map(e => (
              <tr key={e.id}>
                <td><input type="checkbox" style={{ accentColor: "var(--primary)" }}/></td>
                <td className="kbd" style={{ fontSize: 11 }}>{e.id}</td>
                <td><div><b>{e.student}</b><div style={{ fontSize: 11, color: "var(--ink-3)" }}>{e.email}</div></div></td>
                <td>{e.course}</td>
                <td>{e.date}</td>
                <td>{e.payment}</td>
                <td><span className={`itx-pill ${e.status === "Pago" ? "itx-pill-success" : e.status === "Pendente" ? "itx-pill-warn" : e.status === "Aprovado" ? "itx-pill-info" : "itx-pill-danger"}`}>{e.status}</span></td>
                <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{fmtEUR(e.amount)}</td>
                <td>
                  <div style={{ display: "flex", gap: 4 }}>
                    {e.status === "Pendente" && <>
                      <button className="itx-btn itx-btn-sm" style={{ background: "var(--primary-soft)", color: "var(--primary-ink)" }} onClick={() => action(e.id, "Aprovado")}>Aprovar</button>
                      <button className="itx-btn itx-btn-ghost itx-btn-sm" onClick={() => action(e.id, "Cancelado")} style={{ color: "var(--danger)" }}>Rejeitar</button>
                    </>}
                    <button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="eye" size={13}/></button>
                  </div>
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div></div>
  );
};

const BoPay = ({ onNav }) => (
  <div className="itx-page"><div className="bo-shell">
    <BoSidebar active="pay" onNav={onNav}/>
    <div className="bo-main">
      <BoTopbar title="Pagamentos" action={<button className="itx-btn itx-btn-secondary itx-btn-sm"><Icon name="download" size={13}/>Exportar SAF-T</button>}/>
      <div className="bo-content">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 18 }}>
          {[["Recebido (mês)", fmtEUR(38420)], ["A receber", fmtEUR(4280)], ["Cancelados", fmtEUR(0)], ["Reembolsos", fmtEUR(180)]].map(([l, v]) => (
            <div key={l} className="bo-stat"><div className="lbl">{l}</div><div className="val">{v}</div></div>
          ))}
        </div>
        <table className="bo-table">
          <thead><tr><th>Data</th><th>Ref</th><th>Aluno</th><th>Método</th><th>Estado</th><th style={{ textAlign: "right" }}>Valor</th><th></th></tr></thead>
          <tbody>{ENROLLMENTS.filter(e => e.amount > 0).map(e => (
            <tr key={e.id}><td>{e.date}</td><td className="kbd" style={{ fontSize: 11 }}>PAG-{e.id.slice(-4)}</td><td>{e.student}</td><td>{e.payment}</td><td><span className={`itx-pill ${e.status === "Pago" ? "itx-pill-success" : "itx-pill-warn"}`}>{e.status === "Pago" ? "Recebido" : "Pendente"}</span></td><td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{fmtEUR(e.amount)}</td><td><button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="file" size={13}/></button></td></tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  </div></div>
);

const BoReports = ({ onNav }) => (
  <div className="itx-page"><div className="bo-shell">
    <BoSidebar active="reports" onNav={onNav}/>
    <div className="bo-main">
      <BoTopbar title="Relatórios" action={<select className="itx-select itx-btn-sm" style={{ width: 160 }}><option>Abril 2026</option><option>Março 2026</option><option>Trimestre</option></select>}/>
      <div className="bo-content">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div className="itx-card" style={{ padding: 20 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 600, margin: "0 0 14px" }}>Receita por área</h3>
            {[["Tecnologia", 14820, 85], ["Línguas", 9240, 55], ["Marketing", 7200, 42], ["Gestão", 5800, 34], ["Design", 3380, 22]].map(([n, v, w]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                <span style={{ fontSize: 13, width: 100 }}>{n}</span>
                <div style={{ flex: 1, height: 8, background: "var(--paper-3)", borderRadius: 999, overflow: "hidden" }}><div style={{ height: "100%", width: `${w}%`, background: "var(--primary)" }}/></div>
                <span style={{ fontSize: 12, width: 80, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{fmtEUR(v)}</span>
              </div>
            ))}
          </div>
          <div className="itx-card" style={{ padding: 20 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 600, margin: "0 0 14px" }}>Funil de conversão</h3>
            {[["Visitas ao site", 12480, 100, "var(--ink-2)"], ["Páginas de curso", 4290, 34, "var(--primary)"], ["Início de checkout", 312, 2.5, "var(--accent)"], ["Inscrições concluídas", 142, 1.1, "var(--success)"]].map(([n, v, w, c]) => (
              <div key={n} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}><span>{n}</span><span style={{ fontVariantNumeric: "tabular-nums" }}>{v.toLocaleString("pt-PT")} <span style={{ color: "var(--ink-3)" }}>({w}%)</span></span></div>
                <div style={{ height: 24, background: "var(--paper-3)", borderRadius: 6, overflow: "hidden" }}><div style={{ height: "100%", width: `${w}%`, background: c }}/></div>
              </div>
            ))}
          </div>
          <div className="itx-card" style={{ padding: 20, gridColumn: "span 2" }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 18, fontWeight: 600, margin: "0 0 14px" }}>Receita mensal — 2026</h3>
            <svg viewBox="0 0 600 180" style={{ width: "100%", height: 180 }}>
              <polyline fill="none" stroke="var(--primary)" strokeWidth="2" points="20,140 80,120 140,90 200,100 260,70 320,50 380,80 440,60 500,40 560,30"/>
              <polyline fill="var(--primary-soft)" stroke="none" opacity="0.5" points="20,140 80,120 140,90 200,100 260,70 320,50 380,80 440,60 500,40 560,30 560,180 20,180"/>
              {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"].map((m, i) => <text key={m} x={20 + i * 60} y={172} fontSize="10" fill="var(--ink-3)" textAnchor="middle">{m}</text>)}
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div></div>
);

const BoCMS = ({ onNav }) => (
  <div className="itx-page"><div className="bo-shell">
    <BoSidebar active="cms" onNav={onNav}/>
    <div className="bo-main">
      <BoTopbar title="Páginas (CMS)" action={<button className="itx-btn itx-btn-primary itx-btn-sm"><Icon name="plus" size={13}/>Nova página</button>}/>
      <div className="bo-content">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { title: "Início", path: "/", blocks: 6, status: "Publicado", updated: "27 Abr 2026" },
            { title: "Sobre", path: "/sobre", blocks: 4, status: "Publicado", updated: "12 Abr 2026" },
            { title: "Cursos para empresas", path: "/empresas", blocks: 5, status: "Rascunho", updated: "26 Abr 2026" },
            { title: "Termos e condições", path: "/termos", blocks: 1, status: "Publicado", updated: "01 Mar 2026" },
            { title: "Privacidade", path: "/privacidade", blocks: 1, status: "Publicado", updated: "01 Mar 2026" },
            { title: "Contactos", path: "/contactos", blocks: 3, status: "Publicado", updated: "08 Abr 2026" },
          ].map(p => (
            <div key={p.path} className="itx-card" style={{ padding: 18, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--mono)", marginTop: 2 }}>{p.path}</div>
                </div>
                <span className={`itx-pill ${p.status === "Publicado" ? "itx-pill-success" : "itx-pill-warn"}`}>{p.status}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, fontSize: 12, color: "var(--ink-3)" }}>
                <span>{p.blocks} blocos · atualizado {p.updated}</span>
                <div style={{ display: "flex", gap: 4 }}>
                  <button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="eye" size={13}/></button>
                  <button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="edit" size={13}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="itx-card" style={{ padding: 20, marginTop: 14 }}>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 20, fontWeight: 600, margin: "0 0 12px" }}>Editor de página · "Início"</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 14 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[["Hero", "Título + subtítulo + CTA"], ["Cursos em destaque", "3 cursos selecionados"], ["Estatísticas", "4 KPIs"], ["Áreas de formação", "Lista de áreas"], ["Testemunhos", "3 testemunhos rotativos"], ["Newsletter", "Formulário de subscrição"]].map(([n, d], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: 12, background: "var(--paper-2)", borderRadius: 8, border: "1px solid var(--line)" }}>
                  <Icon name="menu" size={14} color="var(--ink-3)"/>
                  <div style={{ flex: 1 }}><b style={{ fontSize: 13 }}>{n}</b><div style={{ fontSize: 11, color: "var(--ink-3)" }}>{d}</div></div>
                  <button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="edit" size={13}/></button>
                </div>
              ))}
              <button className="itx-btn itx-btn-secondary itx-btn-sm" style={{ alignSelf: "flex-start" }}><Icon name="plus" size={13}/>Adicionar bloco</button>
            </div>
            <div style={{ background: "var(--paper-2)", borderRadius: 8, padding: 14, border: "1px solid var(--line)" }}>
              <h4 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink-3)", margin: "0 0 10px" }}>Blocos disponíveis</h4>
              {["Texto rico", "Imagem", "Galeria", "Vídeo", "FAQ", "Formulário", "CTA"].map(b => (
                <div key={b} style={{ padding: "8px 10px", fontSize: 13, borderRadius: 6, cursor: "grab", background: "white", marginBottom: 6, border: "1px solid var(--line)" }}>+ {b}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
);

export { BoLogin, BoDash, BoCourses, BoCourseEdit, BoEnroll, BoPay, BoReports, BoCMS };
