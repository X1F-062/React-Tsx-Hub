interface HeroProps {
  onStart: () => void;
}

const Hero = ({ onStart }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-tag">🚀 Modern Web Geliştirme</div>
        <h1 className="hero-title">
          React <span className="gradient-text">TSX</span> ile
          <br />
          Modern UI Geliştir
        </h1>
        <p className="hero-desc">
          Bileşen tabanlı mimari, TypeScript tip güvenliği ve React hook'larını
          interaktif örneklerle öğren. Başlangıçtan ileri seviyeye kadar
          kapsamlı bir rehber.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onStart}>
            Öğrenmeye Başla →
          </button>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Dokümantasyon ↗
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">6</span>
            <span className="stat-label">Konu</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">12+</span>
            <span className="stat-label">Kod Örneği</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5</span>
            <span className="stat-label">Quiz Sorusu</span>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="code-window">
          <div className="code-window-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="code-window-title">App.tsx</span>
          </div>
          <pre className="code-window-body">
            <code>{`import { useState } from "react";

interface Props {
  isim: string;
}

const Hosgeldin = ({ isim }: Props) => {
  const [aktif, setAktif] = useState(false);

  return (
    <div>
      <h1>Merhaba, {isim}!</h1>
      <button onClick={() => setAktif(!aktif)}>
        {aktif ? "Aktif ✓" : "Tıkla"}
      </button>
    </div>
  );
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
