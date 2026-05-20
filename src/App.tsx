import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopicsGrid from "./components/TopicsGrid";
import LearnSection from "./components/LearnSection";
import LiveDemo from "./components/LiveDemo";
import QuizSection from "./components/QuizSection";
import Footer from "./components/Footer";
import "./index.css";

type ActiveSection = "home" | "topics" | "learn" | "quiz";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");
  const [selectedTopicId, setSelectedTopicId] = useState<string>("components");

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleNavigate = (section: string): void => {
    setActiveSection(section as ActiveSection);
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollTo(section);
    }
  };

  const handleTopicSelect = (topicId: string): void => {
    setSelectedTopicId(topicId);
    setActiveSection("learn");
    scrollTo("learn");
  };

  return (
    <div className="app">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        <Hero onStart={() => handleNavigate("topics")} />
        <TopicsGrid onSelectTopic={handleTopicSelect} />
        <LearnSection key={selectedTopicId} initialTopicId={selectedTopicId} />
        <LiveDemo />
        <QuizSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
