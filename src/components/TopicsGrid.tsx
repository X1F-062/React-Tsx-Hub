import { Topic } from "../types";
import { topics } from "../data";

interface TopicCardProps {
  topic: Topic;
  onClick: (id: string) => void;
}

const levelColors: Record<Topic["level"], string> = {
  Başlangıç: "#10b981",
  Orta: "#f59e0b",
  İleri: "#ef4444",
};

const TopicCard = ({ topic, onClick }: TopicCardProps) => {
  return (
    <button className="topic-card" onClick={() => onClick(topic.id)}>
      <div
        className="topic-icon-wrap"
        style={{ background: topic.color + "22", border: `1px solid ${topic.color}44` }}
      >
        <span className="topic-icon">{topic.icon}</span>
      </div>
      <div className="topic-info">
        <h3 className="topic-title">{topic.title}</h3>
        <p className="topic-desc">{topic.description}</p>
      </div>
      <span
        className="topic-level"
        style={{
          color: levelColors[topic.level],
          background: levelColors[topic.level] + "22",
        }}
      >
        {topic.level}
      </span>
    </button>
  );
};

interface TopicsGridProps {
  onSelectTopic: (id: string) => void;
}

const TopicsGrid = ({ onSelectTopic }: TopicsGridProps) => {
  return (
    <section className="section" id="topics">
      <div className="section-header">
        <h2 className="section-title">📚 Konular</h2>
        <p className="section-subtitle">
          Konu başlığına tıklayarak detaylı örneklere ulaşabilirsin
        </p>
      </div>
      <div className="topics-grid">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onClick={onSelectTopic} />
        ))}
      </div>
    </section>
  );
};

export default TopicsGrid;
