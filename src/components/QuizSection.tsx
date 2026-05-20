import { useState } from "react";
import { quizQuestions } from "../data";

type QuizState = "idle" | "playing" | "finished";

const QuizSection = () => {
  const [quizState, setQuizState] = useState<QuizState>("idle");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const question = quizQuestions[currentIdx];
  const total = quizQuestions.length;

  const handleStart = () => {
    setQuizState("playing");
    setCurrentIdx(0);
    setScore(0);
    setAnswers([]);
    setSelectedOption(null);
    setAnswered(false);
  };

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelectedOption(idx);
    setAnswered(true);
    if (idx === question.correctIndex) {
      setScore((s) => s + 1);
    }
    setAnswers((prev) => [...prev, idx]);
  };

  const handleNext = () => {
    if (currentIdx + 1 >= total) {
      setQuizState("finished");
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  const getOptionClass = (idx: number) => {
    if (!answered) return "option-btn";
    if (idx === question.correctIndex) return "option-btn option-correct";
    if (idx === selectedOption) return "option-btn option-wrong";
    return "option-btn option-dim";
  };

  const scorePercent = Math.round((score / total) * 100);
  const scoreEmoji =
    scorePercent >= 80 ? "🏆" : scorePercent >= 60 ? "👍" : "📚";

  if (quizState === "idle") {
    return (
      <section className="section" id="quiz">
        <div className="section-header">
          <h2 className="section-title">🧠 Bilgini Test Et</h2>
          <p className="section-subtitle">
            {total} soruluk quiz ile React TSX bilgini ölç
          </p>
        </div>
        <div className="quiz-idle">
          <div className="quiz-card quiz-start-card">
            <div className="quiz-start-icon">🧠</div>
            <h3>React TSX Quiz</h3>
            <p>
              {total} soru · Çoktan seçmeli · Açıklamalı cevaplar
            </p>
            <div className="quiz-topics-preview">
              {["Bileşenler", "Props", "State", "useEffect", "Context"].map(
                (t) => (
                  <span key={t} className="preview-tag">
                    {t}
                  </span>
                )
              )}
            </div>
            <button className="btn-primary" onClick={handleStart}>
              Quize Başla →
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (quizState === "finished") {
    return (
      <section className="section" id="quiz">
        <div className="section-header">
          <h2 className="section-title">🧠 Quiz Sonucu</h2>
        </div>
        <div className="quiz-idle">
          <div className="quiz-card quiz-result-card">
            <div className="result-icon">{scoreEmoji}</div>
            <div className="result-score">
              {score}/{total}
            </div>
            <div className="result-percent">{scorePercent}%</div>
            <p className="result-msg">
              {scorePercent >= 80
                ? "Harika! React TSX konusunda çok iyisin."
                : scorePercent >= 60
                ? "İyi iş! Birkaç konuyu tekrarlamak faydalı olabilir."
                : "Devam et! Konuları tekrar incelemeyi öneririz."}
            </p>

            <div className="answers-summary">
              {quizQuestions.map((q, i) => (
                <div
                  key={q.id}
                  className={`answer-row ${
                    answers[i] === q.correctIndex
                      ? "answer-correct"
                      : "answer-wrong"
                  }`}
                >
                  <span className="answer-num">S{i + 1}</span>
                  <span className="answer-icon">
                    {answers[i] === q.correctIndex ? "✓" : "✗"}
                  </span>
                  <span className="answer-text">{q.question}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={handleStart}>
              Tekrar Dene
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="quiz">
      <div className="section-header">
        <h2 className="section-title">🧠 Quiz</h2>
        <p className="section-subtitle">
          Soru {currentIdx + 1} / {total}
        </p>
      </div>

      <div className="quiz-playing">
        {/* Progress */}
        <div className="quiz-progress">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIdx) / total) * 100}%` }}
          />
        </div>

        <div className="quiz-card">
          <p className="question-text">{question.question}</p>

          <div className="options-list">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                className={getOptionClass(idx)}
                onClick={() => handleSelect(idx)}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            ))}
          </div>

          {answered && (
            <div className="explanation-box">
              <span className="explanation-icon">💡</span>
              <p>{question.explanation}</p>
            </div>
          )}

          {answered && (
            <button className="btn-primary" onClick={handleNext}>
              {currentIdx + 1 >= total ? "Sonucu Gör →" : "Sonraki Soru →"}
            </button>
          )}
        </div>

        <div className="quiz-score-live">
          ✓ {score} doğru
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
