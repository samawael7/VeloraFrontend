import React, { useState } from "react";
import acne from '../assets/acne.jpg';
import darkspots from '../assets/darkspots.png';
import redness from '../assets/redness.jpg';
import wrinkles from '../assets/wrinkles.jpg';
import dullness from '../assets/dullness.jpg';
import uneven from '../assets/uneven.jpg';
import "../styles/QuizForm.css";

const QuizForm = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    skinType: '',
    acneProne: '',
    drynessFrequency: '',
    oilyQuickly: '',
    skinConcern: '',
    skinSensitivity: '',
    ageGroup: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (value) => {
    setAnswers({ ...answers, skinType: value });
  };

  return (
    <div className="quiz-container">
      {/* ✅ PROGRESS BAR */}
      <div className="progress-wrapper">
        <h3 className="quiz-title">Skin quiz</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 8) * 100}%` }}
          ></div>
        </div>
      </div>

      
      {step === 1 && (
        <div className="quiz-card fade-in">
          <h2 className="quiz-question">What is your skin type?</h2>
          <div className="quiz-options">
            {['Normal', 'Dry', 'Oily', 'Combination'].map((type) => (
              <button
                key={type}
                className={`option-btn ${answers.skinType === type ? 'selected' : ''}`}
                onClick={() => handleChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button className="nav-btn disabled" disabled>Back</button>
            <button className="nav-btn" onClick={answers.skinType ? handleNext : null}>Continue</button>
          </div>
        </div>
      )}

      
      {step === 2 && (
        <div className="quiz-card fade-in">
          <h2 className="quiz-question">Is your skin acne-prone?</h2>
          <div className="quiz-options">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                className={`option-btn ${answers.acneProne === option ? 'selected' : ''}`}
                onClick={() => setAnswers({ ...answers, acneProne: option })}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button className="nav-btn" onClick={handleBack}>Back</button>
            <button className="nav-btn" onClick={answers.acneProne ? handleNext : null}>Continue</button>
          </div>
        </div>
      )}

     
      {step === 3 && (
        <div className="quiz-card fade-in">
          <h2 className="quiz-question">How often does your skin feel dry?</h2>
          <div className="quiz-options">
            {['Rarely', 'Sometimes', 'Often', 'Always'].map((option) => (
              <button
                key={option}
                className={`option-btn ${answers.drynessFrequency === option ? 'selected' : ''}`}
                onClick={() => setAnswers({ ...answers, drynessFrequency: option })}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button className="nav-btn" onClick={handleBack}>Back</button>
            <button className="nav-btn" onClick={answers.drynessFrequency ? handleNext : null}>Continue</button>
          </div>
        </div>
      )}

      
      {step === 4 && (
        <div className="quiz-card fade-in">
          <h2 className="quiz-question">Does your skin get oily quickly?</h2>
          <div className="quiz-options">
            {['Yes', 'No'].map((option) => (
              <button
                key={option}
                className={`option-btn ${answers.oilyQuickly === option ? 'selected' : ''}`}
                onClick={() => setAnswers({ ...answers, oilyQuickly: option })}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button className="nav-btn" onClick={handleBack}>Back</button>
            <button className="nav-btn" onClick={answers.oilyQuickly ? handleNext : null}>Continue</button>
          </div>
        </div>
      )}

      
{step === 5 && (
  <div className="quiz-card fade-in">
    <h2 className="quiz-question">What is your primary skin concern? (Select all that apply)</h2>
    <div className="quiz-grid">
      {[
        { label: 'Acne', img: acne },
        { label: 'Dark Spots', img: darkspots },
        { label: 'Redness', img: redness },
        { label: 'Wrinkles', img: wrinkles },
        { label: 'Dullness', img: dullness },
        { label: 'Uneven Tone', img: uneven },
      ].map((option) => {
        const isSelected = answers.skinConcern.includes(option.label);
        return (
          <div
            key={option.label}
            className={`image-option ${isSelected ? 'selected' : ''}`}
            onClick={() => {
              const updatedConcerns = isSelected
                ? answers.skinConcern.filter((c) => c !== option.label)
                : [...answers.skinConcern, option.label];
              setAnswers({ ...answers, skinConcern: updatedConcerns });
            }}
          >
            <img src={option.img} alt={option.label} />
            <p>{option.label}</p>
          </div>
        );
      })}
    </div>
    <div className="quiz-nav">
      <button className="nav-btn" onClick={handleBack}>Back</button>
      <button
        className="nav-btn"
        onClick={() => answers.skinConcern.length > 0 && setStep(step + 1)}
        disabled={answers.skinConcern.length === 0}
      >
        Continue
      </button>
    </div>
  </div>
)}

    
      {step === 6 && (
        <div className="quiz-card fade-in">
          <h2 className="quiz-question">How sensitive is your skin?</h2>
          <div className="quiz-options">
            {['Not Sensitive', 'Slightly Sensitive', 'Very Sensitive', 'Extremely Sensitive'].map((option) => (
              <button
                key={option}
                className={`option-btn ${answers.skinSensitivity === option ? 'selected' : ''}`}
                onClick={() => setAnswers({ ...answers, skinSensitivity: option })}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button className="nav-btn" onClick={handleBack}>Back</button>
            <button className="nav-btn" onClick={answers.skinSensitivity ? handleNext : null}>Continue</button>
          </div>
        </div>
      )}

    
      {step === 7 && (
        <div className="quiz-card fade-in">
          <h2 className="quiz-question">What is your age group?</h2>
          <div className="quiz-options">
            {['Under 18', '18-24', '25-34', '35-44', '45+'].map((group) => (
              <button
                key={group}
                className={`option-btn ${answers.ageGroup === group ? 'selected' : ''}`}
                onClick={() => setAnswers({ ...answers, ageGroup: group })}
              >
                {group}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button className="nav-btn" onClick={handleBack}>Back</button>
            <button className="nav-btn" onClick={answers.ageGroup ? handleNext : null}>Continue</button>
          </div>
        </div>
      )}

     
      {step === 8 && (
        <div className="quiz-card fade-in final-recommendation">
          <h2 className="quiz-heading final-text">You're all set!</h2>
          <p className="quiz-subtext boom-sub">
            Click below to get your personalized skin care recommendation based on your answers.
          </p>
          <div className="quiz-nav">
            <button className="nav-btn back-btn" onClick={handleBack}>Back</button>
            <button className="nav-btn get-reco-btn" onClick={() => setStep(step + 1)}>Get Recommendation</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizForm;
