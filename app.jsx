/* global React, ReactDOM, Divider, CornerSpray, SparkleLayer, useReveal,
   IconChurch, IconGlasses, IconMap, IconWhatsApp, IconCamera, IconDove, IconMusic */
const { useState, useEffect, useRef, useCallback } = React;

/* ============================================================
   DATOS DEL EVENTO
   ============================================================ */
const EVENT = {
  name: "Nicole Jaquelin",
  dateLabel: "18 · Julio · 2026",
  dateLong: "Sábado 18 de Julio de 2026",
  target: new Date("2026-07-18T16:00:00-06:00"),
  father: "Rafael Antonio Vázquez",
  memory: "Brenda Karina Pérez de La Luz",
  whatsapp: "522351017853",
  whatsappPretty: "235 101 7853",
  ceremony: {
    time: "4:00 PM",
    place: "Parroquia de la Asunción",
    address: "Misantla, Veracruz",
    maps: "https://maps.app.goo.gl/miLvv1jKLY6CUwCd8",
  },
  reception: {
    time: "5:00 PM",
    place: "Salón Camino Real",
    address: "Plan de la Vieja, 93829 Misantla, Ver.",
    maps: "https://maps.app.goo.gl/miLvv1jKLY6CUwCd8",
  },
  timeline: [
    { time: "4:00 PM", name: "Misa", desc: "Ceremonia religiosa en la Parroquia de la Asunción." },
    { time: "5:00 PM", name: "Recepción", desc: "Coctel y bienvenida en el Salón Camino Real." },
    { time: "6:00 PM", name: "Vals", desc: "La entrada de Nicole y el baile sorpresa." },
    { time: "7:00 PM", name: "Cena", desc: "Compartimos la mesa y los buenos deseos." },
    { time: "9:00 PM", name: "¡A bailar!", desc: "La fiesta hasta el final de la noche." },
  ],
};

/* ---------- Personalización por URL ---------- */
function useGuest() {
  const [guest, setGuest] = useState({ name: null, seats: null });
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const raw = p.get("invitado") || p.get("guest");
    const seats = p.get("lugares") || p.get("seats");
    let name = null;
    if (raw) {
      name = decodeURIComponent(raw.replace(/\+/g, " ")).trim()
        .split(/\s+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
    }
    setGuest({ name, seats: seats ? parseInt(seats, 10) : null });
  }, []);
  return guest;
}

/* ============================================================
   COVER / GATE
   ============================================================ */
function Cover({ guest, onOpen }) {
  return (
    <div id="cover">
      <div className="reveal in" style={{ position: "relative", zIndex: 2 }}>
        <img className="seal" src="assets/seal.png" alt="Monograma NJ" />
        <div className="cover-eyebrow eyebrow" style={{ marginTop: 18 }}>
          {guest.name ? "Con cariño, te invitamos a celebrar" : "Tenemos el honor de invitarte"}
        </div>
        <div className="cover-sub">Mis XV Años</div>
        <h1 className="cover-name">Nicole<br />Jaquelin</h1>
        <Divider />
        <div className="cover-date">{EVENT.dateLabel}</div>
        <button className="btn-gold" onClick={onOpen}>
          Abrir invitación
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <header id="hero">
      <div className="hero-photo" />
      <div className="hero-veil" />
      <div className="hero-content">
        <div className="hero-eyebrow eyebrow">Mis XV Años</div>
        <h1 className="hero-name">Nicole Jaquelin</h1>
        <div className="hero-date">{EVENT.dateLabel}</div>
      </div>
      <div className="hero-scroll">Desliza ✦</div>
    </header>
  );
}

/* ============================================================
   CARTA PERSONALIZADA
   ============================================================ */
function Letter({ guest }) {
  const seats = guest.seats && guest.seats > 0 ? guest.seats : 2;
  return (
    <section className="section bg-cream" id="carta">
      <SparkleLayer count={6} seed={7} />
      <div className="inner reveal">
        <div className="letter-card">
          <span className="eyebrow section-eyebrow">{guest.name ? "Para" : "Con cariño, para ti"}</span>
          {guest.name && <div className="guest-name">{guest.name}</div>}
          <Divider />
          <p className="body-lg" style={{ marginTop: 4 }}>
            Con el amor que me rodea y el acompañamiento de mi familia,
            tengo el honor de invitarte a celebrar mis XV años.
          </p>

          <div className="blessing">
            <span className="blessing-title eyebrow">Con la bendición de mis seres queridos</span>
            <div className="fam-list">
              <div className="fam">
                <span className="fam-role">Mi padre</span>
                <span className="fam-name">{EVENT.father}</span>
              </div>
              <div className="fam">
                <span className="fam-role">Mis padrinos</span>
                <span className="fam-name">[Nombre padrino] &amp; [Nombre madrina]</span>
              </div>
            </div>
            <p className="fam-mem">
              Y siempre presente en mi corazón, mi mamá<br />
              <span>{EVENT.memory}</span>
            </p>
          </div>

          <p className="body-lg" style={{ marginTop: 30, fontStyle: "italic", color: "var(--wine-soft)" }}>
            Nos complacería contar con tu presencia en este día tan especial.
          </p>
          <div className="seats-pill">
            ✦ Hemos reservado <b>{seats}&nbsp;{seats === 1 ? "lugar" : "lugares"}</b> para ti
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
function Countdown() {
  const calc = useCallback(() => {
    const diff = Math.max(0, EVENT.target - new Date());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s, done: diff === 0 };
  }, []);
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);

  const cells = [
    { n: t.d, l: "Días" },
    { n: t.h, l: "Horas" },
    { n: t.m, l: "Min" },
    { n: t.s, l: "Seg" },
  ];
  return (
    <section className="section bg-rose" id="countdown">
      <SparkleLayer count={7} seed={11} />
      <div className="inner reveal">
        <span className="eyebrow section-eyebrow">La cuenta regresiva</span>
        <h2 className="section-title">Falta poco para soñar</h2>
        <Divider />
        {t.done ? (
          <p className="body-lg" style={{ marginTop: 10 }}>¡Hoy es el gran día! ✦</p>
        ) : (
          <div className="count-grid">
            {cells.map((c) => (
              <div className="count-cell" key={c.l}>
                <div className="count-num">{String(c.n).padStart(2, "0")}</div>
                <div className="count-label">{c.l}</div>
              </div>
            ))}
          </div>
        )}
        <p className="body-lg" style={{ marginTop: 26 }}>{EVENT.dateLong}</p>
      </div>
    </section>
  );
}

/* ============================================================
   MEMORIAL
   ============================================================ */
function Memorial() {
  return (
    <section className="section" id="memorial">
      <div className="inner reveal">
        <div style={{ color: "var(--gold-deep)", display: "flex", justifyContent: "center" }}>
          <span style={{ width: 46, height: 46, display: "inline-block" }}><IconDove /></span>
        </div>
        <span className="eyebrow section-eyebrow" style={{ marginTop: 14 }}>En memoria amorosa de</span>
        <div className="memorial-name">{EVENT.memory}</div>
        <p className="memorial-quote body-lg">
          Aunque no estás aquí en cuerpo, tu amor vive en cada paso de Nicole
          y en cada flor de esta noche.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   PROGRAMA
   ============================================================ */
/* ============================================================
   (componente EventCard retirado: el programa ahora es timeline)
   ============================================================ */

function Program() {
  return (
    <section className="section bg-cream" id="programa">
      <SparkleLayer count={6} seed={5} />
      <div className="inner reveal">
        <span className="eyebrow section-eyebrow">El gran día</span>
        <h2 className="section-title">Programa</h2>
        <Divider />
        <div className="timeline">
          {EVENT.timeline.map((it) => (
            <div className="tl-item" key={it.time}>
              <span className="tl-dot" />
              <div className="tl-time">{it.time}</div>
              <div className="tl-name">{it.name}</div>
              <div className="tl-desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   UBICACIONES (foto en arco)
   ============================================================ */
function VenueCard({ slotId, photo, name, sub, addr, maps, placeholder }) {
  return (
    <div className="venue">
      <div className="venue-arch">
        <image-slot id={slotId} src={photo || undefined} shape="rect" fit="cover" placeholder={placeholder}></image-slot>
      </div>
      <div className="venue-name">{name}</div>
      <div className="venue-sub">{sub}</div>
      <div className="venue-addr">{addr}</div>
      <a className="btn-outline" href={maps} target="_blank" rel="noopener">
        <span style={{ width: 16, height: 16, display: "inline-flex" }}><IconMap /></span>
        Ver ubicación
      </a>
    </div>
  );
}

function Venues() {
  return (
    <section className="section bg-rose" id="ubicaciones">
      <SparkleLayer count={6} seed={9} />
      <div className="inner reveal">
        <span className="eyebrow section-eyebrow">¿Dónde nos vemos?</span>
        <h2 className="section-title">Ubicaciones</h2>
        <Divider />
        <div className="venues">
          <VenueCard
            slotId="foto-iglesia"
            name={EVENT.ceremony.place}
            sub={`Misa · ${EVENT.ceremony.time}`}
            addr={EVENT.ceremony.address}
            maps={EVENT.ceremony.maps}
            placeholder="Foto de la Parroquia"
          />
          <VenueCard
            slotId="foto-salon"
            name={EVENT.reception.place}
            sub={`Recepción · ${EVENT.reception.time}`}
            addr={EVENT.reception.address}
            maps={EVENT.reception.maps}
            placeholder="Foto del Salón"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PADRINOS
   ============================================================ */
function Padrinos() {
  return (
    <section className="section bg-cream" id="padrinos">
      <div className="inner reveal">
        <span className="eyebrow section-eyebrow">Con la bendición de</span>
        <h2 className="section-title">Mis seres queridos</h2>
        <Divider />
        <div className="padrino-grid">
          <div className="padrino-card">
            <div className="padrino-role">Padre</div>
            <div className="padrino-name">{EVENT.father}</div>
          </div>
          <div className="padrino-card">
            <div className="padrino-role">Padrino</div>
            <div className="padrino-name tbd">Por confirmar</div>
          </div>
          <div className="padrino-card">
            <div className="padrino-role">Madrina</div>
            <div className="padrino-name tbd">Por confirmar</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RSVP
   ============================================================ */
function Rsvp({ guest }) {
  const msg = encodeURIComponent(
    `¡Hola! Confirmo mi asistencia a los XV Años de Nicole Jaquelin. ` +
    (guest.name ? `Soy ${guest.name}. ` : "") +
    `¡Ahí estaré! 🌸`
  );
  const link = `https://wa.me/${EVENT.whatsapp}?text=${msg}`;
  return (
    <section className="section bg-cream" id="rsvp">
      <div className="inner reveal">
        <div className="rsvp-card">
          <SparkleLayer count={8} seed={21} />
          <span className="eyebrow section-eyebrow">Confirma tu asistencia</span>
          <h2 className="section-title">¿Nos acompañas?</h2>
          <p className="body-lg" style={{ marginTop: 8 }}>
            Tu confirmación nos ayuda a preparar cada detalle.
            Avísanos por WhatsApp.
          </p>
          <a className="btn-wine" href={link} target="_blank" rel="noopener">
            <span style={{ width: 22, height: 22, display: "inline-flex" }}><IconWhatsApp /></span>
            Confirmar por WhatsApp
          </a>
          <p className="rsvp-note">{EVENT.whatsappPretty}</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOTOS (QR placeholder)
   ============================================================ */
function PhotosQR() {
  return (
    <section className="section bg-rose" id="fotos">
      <SparkleLayer count={6} seed={31} />
      <div className="inner reveal">
        <div style={{ color: "var(--gold-deep)", display: "flex", justifyContent: "center" }}>
          <span style={{ width: 40, height: 40, display: "inline-block" }}><IconCamera /></span>
        </div>
        <span className="eyebrow section-eyebrow" style={{ marginTop: 12 }}>Comparte tus fotos</span>
        <h2 className="section-title">Tus recuerdos de esta noche</h2>
        <Divider />
        <p className="body-lg">
          Escanea el código y sube las fotos que tomes durante la fiesta.
          ¡Queremos verlas todas! ✦
        </p>
        <div className="qr-frame">
          <div className="qr-placeholder">
            Aquí irá el código QR<br />del álbum compartido
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GALERÍA
   ============================================================ */
function Gallery() {
  return (
    <section className="section bg-cream" id="galeria">
      <div className="inner reveal">
        <span className="eyebrow section-eyebrow">Galería</span>
        <h2 className="section-title">Momentos</h2>
        <Divider />
        <p className="body-lg" style={{ marginBottom: 18 }}>
          Algunas fotos de la sesión de Nicole — y muy pronto, los recuerdos de la fiesta.
        </p>
        <div className="gallery">
          <div className="tile photo" />
          <div className="tile"><image-slot id="gal-1" shape="rect" fit="cover" placeholder="Foto de la sesión"></image-slot></div>
          <div className="tile"><image-slot id="gal-2" shape="rect" fit="cover" placeholder="Foto de la sesión"></image-slot></div>
          <div className="tile"><image-slot id="gal-3" shape="rect" fit="cover" placeholder="Foto de la fiesta"></image-slot></div>
          <div className="tile"><image-slot id="gal-4" shape="rect" fit="cover" placeholder="Foto de la fiesta"></image-slot></div>
          <div className="tile"><image-slot id="gal-5" shape="rect" fit="cover" placeholder="Foto de la fiesta"></image-slot></div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer id="footer">
      <div className="reveal">
        <img className="seal sm" src="assets/seal.png" alt="Monograma NJ" />
        <div className="footer-name">Nicole Jaquelin</div>
        <Divider />
        <div className="footer-meta">Misantla, Veracruz · {EVENT.dateLabel}</div>
      </div>
    </footer>
  );
}

/* ============================================================
   MÚSICA
   ============================================================ */
function MusicToggle({ started }) {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = document.getElementById("bg-music");
  }, []);

  // Intenta reproducir al abrir la invitación
  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => setMuted(false)).catch(() => setMuted(true));
    }
  }, [started]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.volume = 0.4;
      a.play().then(() => setMuted(false)).catch(() => {});
    } else {
      a.pause();
      setMuted(true);
    }
  };

  return (
    <button
      id="music-toggle"
      className={(started ? "" : "hidden ") + (muted ? "paused" : "")}
      onClick={toggle}
      aria-label={muted ? "Reproducir música" : "Silenciar música"}
    >
      {!muted && <span className="music-ring" />}
      <IconMusic muted={muted} />
    </button>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const guest = useGuest();
  const [open, setOpen] = useState(false);
  useReveal();

  const handleOpen = () => {
    const cover = document.getElementById("cover");
    if (cover) cover.classList.add("lift");
    setOpen(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => { if (cover) cover.style.display = "none"; }, 1300);
  };

  return (
    <>
      {!open && <Cover guest={guest} onOpen={handleOpen} />}
      <Hero />
      <Letter guest={guest} />
      <Countdown />
      <Program />
      <Venues />
      <Rsvp guest={guest} />
      <PhotosQR />
      <Gallery />
      <Footer />
      <MusicToggle started={open} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
