import { useState } from "react";
import { topics, codeExamples } from "../data";
import { Topic } from "../types";
import CodeBlock from "./CodeBlock";

interface LearnSectionProps {
  initialTopicId?: string;
}

const conceptMap: Record<string, { summary: string; points: string[] }> = {
  components: {
    summary:
      "Bileşenler, React uygulamasının temel yapı taşlarıdır. Her bileşen kendi HTML'ini döndüren bir JavaScript fonksiyonudur.",
    points: [
      "Fonksiyon adı büyük harfle başlamalıdır (PascalCase)",
      "Her bileşen tek bir kök eleman döndürmelidir",
      "JSX içinde JavaScript ifadeleri { } ile yazılır",
      "Bileşenler yeniden kullanılabilir ve birleştirilebilir",
    ],
  },
  props: {
    summary:
      "Props (properties), parent bileşenden child bileşene veri aktarmanın temel yoludur. TypeScript ile tip güvenli hale getirilir.",
    points: [
      "Props tek yönlü akar: yukarıdan aşağıya (one-way data flow)",
      "interface veya type ile prop tipleri tanımlanır",
      "Opsiyonel props için ? operatörü kullanılır",
      "children prop'u ile içerik aktarımı yapılır",
    ],
  },
  state: {
    summary:
      "State (durum), bileşen içinde zaman içinde değişebilecek verileri tutar. State değiştiğinde React bileşeni yeniden render eder.",
    points: [
      "useState hook'u ile state tanımlanır",
      "State doğrudan değil, setter fonksiyonuyla güncellenir",
      "TypeScript ile state tipi belirtilmelidir",
      "Önceki state'e bağlı güncellemelerde fonksiyon formu kullanılır",
    ],
  },
  effects: {
    summary:
      "useEffect, bileşenin render döngüsü dışında çalışması gereken yan etkileri (API çağrısı, subscription, DOM manipülasyonu) yönetir.",
    points: [
      "Boş dizi [] ile sadece mount'ta çalışır",
      "Bağımlılık dizisi ile ilgili değişkenlerde tetiklenir",
      "Temizleme fonksiyonu ile abonelikler iptal edilir",
      "async/await için iç fonksiyon tanımlanmalıdır",
    ],
  },
  context: {
    summary:
      "Context API, prop drilling sorununu çözmek için global durum yönetimi sağlar. Tema, dil, kullanıcı bilgisi gibi uygulama geneli veriler için idealdir.",
    points: [
      "createContext ile context nesnesi oluşturulur",
      "Provider bileşeni veriyi alt bileşenlere iletir",
      "useContext hook'u ile context tüketilir",
      "Özel hook ile daha güvenli kullanım sağlanır",
    ],
  },
  hooks: {
    summary:
      "Custom hook'lar, bileşen mantığını yeniden kullanılabilir fonksiyonlara çıkarmanızı sağlar. use öneki ile adlandırılmalıdır.",
    points: [
      "use ile başlamalıdır (useLocalStorage, useFetch...)",
      "Diğer hook'ları kullanabilir",
      "Bileşenden bağımsız, test edilebilir mantık",
      "TypeScript generic'leri ile esnek tip desteği",
    ],
  },
};

const levelBadge: Record<Topic["level"], string> = {
  Başlangıç: "badge-green",
  Orta: "badge-yellow",
  İleri: "badge-red",
};

const LearnSection = ({ initialTopicId = "components" }: LearnSectionProps) => {
  const [activeTopicId, setActiveTopicId] = useState(initialTopicId);
  const [activeExampleIdx, setActiveExampleIdx] = useState(0);

  const activeTopic = topics.find((t) => t.id === activeTopicId)!;
  const examples = codeExamples[activeTopicId] ?? [];
  const concept = conceptMap[activeTopicId];

  const handleTopicChange = (id: string) => {
    setActiveTopicId(id);
    setActiveExampleIdx(0);
  };

  return (
    <section className="section" id="learn">
      <div className="section-header">
        <h2 className="section-title">💡 Konu Anlatımı</h2>
        <p className="section-subtitle">
          Konuyu seç, kavramı öğren ve kod örneklerini incele
        </p>
      </div>

      <div className="learn-layout">
        {/* Sol: Konu Listesi */}
        <aside className="topic-sidebar">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={`sidebar-btn ${activeTopicId === topic.id ? "sidebar-btn-active" : ""}`}
              onClick={() => handleTopicChange(topic.id)}
              style={
                activeTopicId === topic.id
                  ? { borderLeftColor: topic.color }
                  : {}
              }
            >
              <span className="sidebar-icon">{topic.icon}</span>
              <span className="sidebar-label">{topic.title}</span>
            </button>
          ))}
        </aside>

        {/* Sağ: İçerik */}
        <div className="topic-content">
          {/* Konu Başlığı */}
          <div className="topic-content-header">
            <div className="topic-header-left">
              <span className="topic-content-icon">{activeTopic.icon}</span>
              <div>
                <h3 className="topic-content-title">{activeTopic.title}</h3>
                <p className="topic-content-desc">{activeTopic.description}</p>
              </div>
            </div>
            <span className={`badge ${levelBadge[activeTopic.level]}`}>
              {activeTopic.level}
            </span>
          </div>

          {/* Kavram Özeti */}
          <div className="concept-box">
            <p className="concept-summary">{concept.summary}</p>
            <ul className="concept-points">
              {concept.points.map((point, i) => (
                <li key={i} className="concept-point">
                  <span className="point-bullet">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Kod Örnekleri */}
          {examples.length > 0 && (
            <div className="examples-area">
              <div className="examples-tabs">
                {examples.map((ex, idx) => (
                  <button
                    key={ex.id}
                    className={`example-tab ${activeExampleIdx === idx ? "active" : ""}`}
                    onClick={() => setActiveExampleIdx(idx)}
                  >
                    {ex.title}
                  </button>
                ))}
              </div>

              <div className="example-content">
                <p className="example-desc">
                  {examples[activeExampleIdx].description}
                </p>
                <CodeBlock code={examples[activeExampleIdx].code} />
                {examples[activeExampleIdx].output && (
                  <div className="output-box">
                    <span className="output-label">🖥 Çıktı:</span>
                    <span className="output-text">
                      {examples[activeExampleIdx].output}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
