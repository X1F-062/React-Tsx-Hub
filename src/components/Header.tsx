import { Theme } from "../types";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "topics", label: "Konular" },
  { id: "learn", label: "Öğren" },
  { id: "quiz", label: "Quiz" },
];

const Header = ({
  theme,
  onToggleTheme,
  activeSection,
  onNavigate,
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => onNavigate("home")}>
          <span className="logo-icon">⚛</span>
          <span className="logo-text">
            React<span className="logo-accent">TSX</span>
          </span>
          <span className="logo-badge">Learning Hub</span>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${activeSection === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Tema değiştir"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;
