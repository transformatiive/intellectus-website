// Student area — login + dashboard with enrolled courses + materials
import React from 'react';
import { COURSES, Icon } from './data.jsx';
import { SiteNav, SiteFooter } from './site-shared.jsx';

const StudentArea = ({ onNav }) => {
  const [tab, setTab] = React.useState("courses");
  const myCourses = COURSES.slice(0, 3);
  return (
    <div className="itx-page"><div className="scroll">
      <SiteNav onNav={onNav}/>
      <div style={{ background: "var(--ink)", color: "white", padding: "32px 40px" }}>
        <div className="itx-pill" style={{ background: "rgba(255,255,255,.1)", color: "oklch(0.85 0.02 155)" }}>Área de aluno</div>
        <h1 style={{ fontFamily: "var(--display)", fontSize: 38, margin: "10px 0 0", fontWeight: 600 }}>Olá, Mariana 👋</h1>
        <p style={{ opacity: .7, fontSize: 14, margin: "6px 0 0" }}>Tens 2 cursos a decorrer e 1 concluído.</p>
      </div>
      <div style={{ padding: "0 40px", borderBottom: "1px solid var(--line)", background: "white", display: "flex", gap: 24 }}>
        {[["courses", "Os meus cursos"], ["materials", "Materiais"], ["billing", "Faturação"], ["profile", "Perfil"]].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} style={{ background: "none", border: "none", padding: "16px 0", fontSize: 14, color: tab === k ? "var(--ink)" : "var(--ink-3)", borderBottom: "2px solid", borderColor: tab === k ? "var(--primary)" : "transparent", fontWeight: tab === k ? 500 : 400 }}>{l}</button>
        ))}
      </div>
      <div style={{ padding: "32px 40px" }}>
        {tab === "courses" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {myCourses.map((c, i) => (
              <div key={c.id} className="itx-card" style={{ padding: 0, overflow: "hidden" }}>
                <div className="itx-img" style={{ backgroundImage: `url(${c.img})`, height: 120 }}/>
                <div style={{ padding: 16 }}>
                  <span className="itx-pill itx-pill-primary">{c.area}</span>
                  <div style={{ fontFamily: "var(--display)", fontSize: 19, margin: "8px 0 10px" }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 6 }}>Progresso · {[40, 75, 100][i]}%</div>
                  <div style={{ height: 6, background: "var(--paper-3)", borderRadius: 999, overflow: "hidden", marginBottom: 14 }}><div style={{ height: "100%", width: `${[40, 75, 100][i]}%`, background: i === 2 ? "var(--success)" : "var(--primary)" }}/></div>
                  <button className="itx-btn itx-btn-primary itx-btn-sm" style={{ width: "100%", justifyContent: "center" }}>{i === 2 ? "Ver certificado" : "Continuar curso"}</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "materials" && (
          <div className="itx-card">
            <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 14px" }}>Materiais e gravações</h3>
            {[["Aula 8 — Tabelas dinâmicas (gravação)", "MP4 · 1h12m"], ["Exercícios módulo 3.pdf", "PDF · 2.4 MB"], ["Slides aula 7.pdf", "PDF · 1.1 MB"], ["Dataset exercícios.xlsx", "XLSX · 320 KB"]].map(([n, m]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                <div style={{ width: 36, height: 36, background: "var(--paper-3)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="file" size={16} color="var(--ink-2)"/></div>
                <div style={{ flex: 1 }}><b style={{ fontSize: 14 }}>{n}</b><div style={{ fontSize: 11, color: "var(--ink-3)" }}>{m}</div></div>
                <button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="download" size={14}/></button>
              </div>
            ))}
          </div>
        )}
        {tab === "billing" && (
          <table className="bo-table">
            <thead><tr><th>Data</th><th>Curso</th><th>Método</th><th>Estado</th><th style={{ textAlign: "right" }}>Valor</th><th></th></tr></thead>
            <tbody>{ENROLLMENTS.slice(0, 3).map(e => <tr key={e.id}><td>{e.date}</td><td>{e.course}</td><td>{e.payment}</td><td><span className="itx-pill itx-pill-success">Pago</span></td><td style={{ textAlign: "right" }}>{fmtEUR(e.amount)}</td><td><button className="itx-btn itx-btn-ghost itx-btn-sm"><Icon name="download" size={13}/></button></td></tr>)}</tbody>
          </table>
        )}
        {tab === "profile" && (
          <div className="itx-card" style={{ maxWidth: 600 }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 22, fontWeight: 600, margin: "0 0 14px" }}>Perfil</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div><label className="itx-label">Nome</label><input className="itx-input" defaultValue="Mariana Costa"/></div>
              <div><label className="itx-label">Email</label><input className="itx-input" defaultValue="mariana.c@gmail.com"/></div>
              <div><label className="itx-label">Telefone</label><input className="itx-input" defaultValue="+351 912 345 678"/></div>
              <div><label className="itx-label">NIF</label><input className="itx-input" defaultValue="123 456 789"/></div>
            </div>
            <button className="itx-btn itx-btn-primary itx-btn-sm" style={{ marginTop: 14 }}>Guardar</button>
          </div>
        )}
      </div>
    </div></div>
  );
};

export { StudentArea };
