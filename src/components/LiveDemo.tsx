import { useState } from "react";

type DemoTab = "counter" | "form" | "list";

interface LiveDemoProps {
  defaultTab?: DemoTab;
  title?: string;
}

const LiveDemo = ({
  defaultTab = "counter",
  title = "Canlı Demo",
}: LiveDemoProps) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [todos, setTodos] = useState<string[]>(["React öğren", "TSX kullan"]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [activeTab, setActiveTab] = useState<DemoTab>(defaultTab);

  const addTodo = (): void => {
    if (newTodo.trim()) {
      setTodos((prev) => [...prev, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (idx: number): void => {
    setTodos((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">🎮 {title}</h2>
        <p className="section-subtitle">
          React hook'larının gerçek zamanlı çalışmasını gözlemle
        </p>
      </div>

      <div className="demo-container">
        <div className="demo-tabs">
          {(["counter", "form", "list"] as DemoTab[]).map((tab) => (
            <button
              key={tab}
              className={`demo-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "counter" && "⚡ Sayaç"}
              {tab === "form" && "📝 Form"}
              {tab === "list" && "📋 Liste"}
            </button>
          ))}
        </div>

        <div className="demo-panel">
          {activeTab === "counter" && (
            <div className="demo-counter">
              <div
                className="counter-display"
                style={{
                  color:
                    count > 0 ? "#10b981" : count < 0 ? "#ef4444" : "inherit",
                }}
              >
                {count}
              </div>
              <div className="counter-btns">
                <button
                  className="counter-btn minus"
                  onClick={() => setCount((p) => p - 1)}
                >
                  −
                </button>
                <button
                  className="counter-btn reset"
                  onClick={() => setCount(0)}
                >
                  Sıfırla
                </button>
                <button
                  className="counter-btn plus"
                  onClick={() => setCount((p) => p + 1)}
                >
                  +
                </button>
              </div>
              <p className="demo-note">
                <code>useState&lt;number&gt;(0)</code> ile yönetiliyor
              </p>
            </div>
          )}

          {activeTab === "form" && (
            <div className="demo-form">
              <input
                className="demo-input"
                type="text"
                placeholder="Adınızı girin..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="form-preview">
                {name ? (
                  <p>
                    👋 Merhaba, <strong>{name}</strong>!
                  </p>
                ) : (
                  <p className="placeholder-text">Yukarıya bir şeyler yaz…</p>
                )}
              </div>
              <p className="demo-note">
                <code>onChange</code> her tuş basışında{" "}
                <code>setName</code>'i çağırıyor
              </p>
            </div>
          )}

          {activeTab === "list" && (
            <div className="demo-list">
              <div className="todo-input-row">
                <input
                  className="demo-input"
                  type="text"
                  placeholder="Yeni görev ekle..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTodo()}
                />
                <button className="btn-primary btn-sm" onClick={addTodo}>
                  Ekle
                </button>
              </div>
              <ul className="todo-list">
                {todos.map((todo, i) => (
                  <li key={i} className="todo-item">
                    <span>✓ {todo}</span>
                    <button
                      className="todo-remove"
                      onClick={() => removeTodo(i)}
                    >
                      ×
                    </button>
                  </li>
                ))}
                {todos.length === 0 && (
                  <p className="placeholder-text">Liste boş</p>
                )}
              </ul>
              <p className="demo-note">
                <code>setTodos(prev =&gt; [...prev, yeni])</code> ile ekleniyor
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
