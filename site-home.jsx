// Three homepage variants — distinct hero treatments

const HomeA = ({ onNav, onAdd }) => (
  <div className="itx-page">
    <div className="scroll">
      <SiteNav active="home" onNav={onNav} />
      {/* Editorial hero with image */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", borderBottom: "1px solid var(--line)", minHeight: 540, alignItems: "stretch" }}>
        <div style={{ padding: "80px 40px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="itx-pill itx-pill-primary" style={{ marginBottom: 20 }}>Inscrições abertas · Maio 2026</div>
          <h1 style={{ fontFamily: "var(--display)", fontSize: 84, lineHeight: 0.98, letterSpacing: "-0.02em", margin: 0, fontWeight: 600, textWrap: "balance" }}>
            Aprender é <em style={{ color: "var(--primary)", fontWeight: 800 }}>seguir</em><br/>em frente.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: 620, marginTop: 28, textWrap: "pretty" }}>
            Há 18 anos a formar profissionais, empresas e estudantes em Lisboa. Mais de 60 cursos certificados, presenciais, online e híbridos.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <button className="itx-btn itx-btn-primary" onClick={() => onNav?.("catalog")}>Ver catálogo<Icon name="arrow" size={14}/></button>
            <button className="itx-btn itx-btn-secondary">Falar connosco</button>
          </div>
        </div>
        <div className="itx-img" style={{ backgroundImage: `url(${HERO_IMG})`, minHeight: 540 }}/>
      </div>
      {/* Featured 3 */}
      <div style={{ padding: "60px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--display)", fontSize: 36, margin: 0, fontWeight: 600 }}>Cursos em destaque</h2>
          <a onClick={() => onNav?.("catalog")} style={{ fontSize: 14, color: "var(--primary)", cursor: "pointer" }}>Ver todos →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {COURSES.slice(0, 3).map(c => <CourseCard key={c.id} course={c} variant="v1" onAdd={onAdd} onOpen={() => onNav?.("course", c.id)} />)}
        </div>
      </div>
      {/* Stats strip */}
      <div style={{ padding: "40px 40px", background: "var(--paper-3)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {[["+2.400", "alunos formados"], ["+60", "cursos no catálogo"], ["18", "anos de experiência"], ["94%", "taxa de satisfação"]].map(([n, l], i) => (
            <div key={i}>
              <div style={{ fontFamily: "var(--display)", fontSize: 48, lineHeight: 1, color: "var(--primary)" }}>{n}</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Areas */}
      <div style={{ padding: "60px 40px" }}>
        <h2 style={{ fontFamily: "var(--display)", fontSize: 36, margin: "0 0 24px", fontWeight: 600 }}>Áreas de formação</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {AREAS.map(a => (
            <div key={a} className="itx-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => onNav?.("catalog")}>
              <div>
                <div style={{ fontFamily: "var(--display)", fontSize: 22 }}>{a}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>{COURSES.filter(c => c.area === a).length} cursos</div>
              </div>
              <Icon name="arrow" size={18} color="var(--primary)" />
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  </div>
);

const HomeB = ({ onNav, onAdd }) => (
  <div className="itx-page">
    <div className="scroll">
      <SiteNav active="home" onNav={onNav} />
      {/* Catalog-first hero with image background */}
      <div style={{ padding: "80px 40px 60px", position: "relative", overflow: "hidden", color: "white", borderBottom: "1px solid var(--line)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(180deg, rgba(20,20,30,.55), rgba(20,20,30,.85)), url(${HERO_IMG_ALT})`, backgroundSize: "cover", backgroundPosition: "center" }}/>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <h1 style={{ fontFamily: "var(--display)", fontSize: 56, lineHeight: 1.05, margin: 0, fontWeight: 700, letterSpacing: "-.03em", color: "white" }}>Encontra o curso certo para o que vem a seguir.</h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.85)", marginTop: 16 }}>Pesquisa entre 60+ cursos certificados.</p>
          <div style={{ display: "flex", gap: 8, marginTop: 24, padding: 8, background: "white", borderRadius: 14, border: "1px solid var(--line-2)", boxShadow: "var(--sh-2)" }}>
            <Icon name="search" size={18} color="var(--ink-3)" />
            <input className="itx-input" style={{ border: "none", padding: "6px 0" }} placeholder="Excel, Inglês, Marketing Digital…" defaultValue="" />
            <select className="itx-select" style={{ border: "none", width: 140 }}><option>Todas as áreas</option>{AREAS.map(a => <option key={a}>{a}</option>)}</select>
            <button className="itx-btn itx-btn-primary itx-btn-sm">Procurar</button>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Popular:</span>
            {["Excel", "Inglês B2", "Marketing Digital", "JavaScript"].map(t => (
              <span key={t} className="itx-pill" style={{ background: "rgba(255,255,255,.15)", color: "white", cursor: "pointer", border: "1px solid rgba(255,255,255,.2)" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Grid of courses */}
      <div style={{ padding: "48px 40px" }}>
        <h2 style={{ fontFamily: "var(--display)", fontSize: 32, margin: "0 0 24px", fontWeight: 600 }}>Próximas turmas</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {COURSES.slice(0, 6).map(c => <CourseCard key={c.id} course={c} variant="v3" onAdd={onAdd} onOpen={() => onNav?.("course", c.id)} />)}
        </div>
      </div>
      {/* CTA empresas */}
      <div style={{ margin: "0 40px 60px", padding: "40px", background: "var(--ink)", color: "white", borderRadius: 16, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "center" }}>
        <div>
          <div className="itx-pill" style={{ background: "rgba(255,255,255,.1)", color: "oklch(0.85 0.02 155)", marginBottom: 14 }}>Empresas</div>
          <h3 style={{ fontFamily: "var(--display)", fontSize: 36, margin: 0, fontWeight: 600, lineHeight: 1.1 }}>Formação à medida da sua equipa.</h3>
          <p style={{ opacity: .8, fontSize: 15, marginTop: 12, maxWidth: 460 }}>Programas desenhados em conjunto, no seu espaço ou no nosso. Avaliação de impacto incluída.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="itx-btn itx-btn-accent">Pedir proposta<Icon name="arrow" size={14}/></button>
        </div>
      </div>
      <SiteFooter />
    </div>
  </div>
);

const HomeC = ({ onNav, onAdd }) => (
  <div className="itx-page">
    <div className="scroll">
      <SiteNav active="home" onNav={onNav} />
      {/* Storytelling hero — split with testimonial */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: 520 }}>
        <div style={{ padding: "80px 40px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="itx-pill itx-pill-accent" style={{ marginBottom: 18 }}>Centro de formação · Lisboa</div>
          <h1 style={{ fontFamily: "var(--display)", fontSize: 64, lineHeight: 1, margin: 0, fontWeight: 700, letterSpacing: "-.03em", textWrap: "balance" }}>
            Cursos que se traduzem em trabalho, salário e confiança.
          </h1>
          <p style={{ fontSize: 17, color: "var(--ink-2)", marginTop: 20, maxWidth: 480, textWrap: "pretty" }}>
            Não vendemos teoria. Os nossos cursos são desenhados com empresas e validados por quem contrata.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <button className="itx-btn itx-btn-primary" onClick={() => onNav?.("catalog")}>Ver cursos</button>
            <button className="itx-btn itx-btn-ghost"><Icon name="play" size={14}/>Ver vídeo (1 min)</button>
          </div>
        </div>
        <div className="itx-img" style={{ backgroundImage: `url(${HERO_IMG})`, minHeight: 520 }}/>
      </div>
      {/* Testimonial band */}
      <div style={{ padding: "60px 40px", background: "var(--paper-3)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Icon name="quote" size={28} color="var(--primary)" />
          <p style={{ fontFamily: "var(--display)", fontSize: 30, lineHeight: 1.3, margin: "12px 0 20px", textWrap: "balance" }}>
            "Mudei de carreira aos 38. O curso de Programação Web abriu-me as portas — três meses depois estava contratada."
          </p>
          <div style={{ fontSize: 14, color: "var(--ink-2)" }}>Mariana Costa · Front-end Developer @ Critical TechWorks</div>
        </div>
      </div>
      {/* Featured */}
      <div style={{ padding: "60px 40px" }}>
        <h2 style={{ fontFamily: "var(--display)", fontSize: 32, margin: "0 0 8px", fontWeight: 600 }}>Mais procurados este mês</h2>
        <p style={{ fontSize: 14, color: "var(--ink-3)", margin: "0 0 24px" }}>Atualizado a 28 Abril 2026</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {COURSES.slice(0, 4).map(c => <CourseCard key={c.id} course={c} variant="v2" onAdd={onAdd} onOpen={() => onNav?.("course", c.id)} />)}
        </div>
      </div>
      <SiteFooter />
    </div>
  </div>
);

Object.assign(window, { HomeA, HomeB, HomeC });
