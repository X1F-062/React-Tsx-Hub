interface FooterProps {
  siteName?: string;
  year?: number;
}

const Footer = ({
  siteName = "React TSX Learning Hub",
  year = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">⚛</span>
          <span className="footer-title">{siteName}</span>
        </div>
        <p className="footer-desc">
          React ve TypeScript öğrenmek için hazırlanmış interaktif eğitim platformu.
        </p>
        <div className="footer-links">
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            React Docs
          </a>
          <span className="footer-divider">·</span>
          <a
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noreferrer"
          >
            TypeScript Docs
          </a>
          <span className="footer-divider">·</span>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            Vite
          </a>
        </div>
        <p className="footer-copy">
          © {year} {siteName} · Eğitim Amaçlı
        </p>
      </div>
    </footer>
  );
};

export default Footer;
