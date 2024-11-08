'use client';
import React, { useState, useEffect } from 'react';
import { H4epitheliumdata } from './H4epitheliumdata'; // Import the quiz data



const H4epithelium: React.FC = () => {
  const { questions } = H4epitheliumdata;
  
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds for each question
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  const { question, answers, correctAnswer } = questions[activeQuestion];

  useEffect(() => {
    if (timerRunning) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleTimeout(); // Move to next question if time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  });

  const handleTimeout = () => {
    setChecked(true);
    setSelectedAnswer(false); // Incorrect since time ran out
    setSelectedAnswerIndex(null); 
    nextQuestion(); // Automatically move to next question
  };

  const onAnswerSelected = (answer: string, idx: number): void => {
    setSelectedAnswer(answer === correctAnswer); // True if the selected answer is correct
    setSelectedAnswerIndex(idx);
    setChecked(true);
    setTimerRunning(false); // Stop the timer when an answer is selected
  };

  const nextQuestion = (): void => {
    setResult((prev) => 
      selectedAnswer 
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setTimeLeft(30); // Reset time for the next question
      setTimerRunning(true); // Start timer again for next question
    } else {
      setShowResult(true);
    }

    // Reset state for the next question
    setSelectedAnswerIndex(null);
    setChecked(false);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
    setTimeLeft(30); // Set the timer for the first question
    setTimerRunning(true); // Start the timer
  };

  const progressBarWidth = (activeQuestion / questions.length) * 100;
  
  

  return (
    <div className="bg-slate-500 flex flex-col justify-center items-center mt-7">

      {!isQuizStarted ? (
        <div className='start-screen'>
          
          <h1>Epithelium</h1>
          <button onClick={startQuiz} className='btn-start flex mx-auto mt-2 bg-black text-white py-1 px-3 rounded-lg w-64'>Start Quiz</button>
        </div>
      ) : !showResult ? (
        <div className='quiz-container'>
          <div>
            <h2>
              Question: {activeQuestion + 1} 
              <span>/{questions.length}</span>
            </h2>
            <div className='progress-bar' style={{ width: `${progressBarWidth}%` }} />
            <p>Time left: {timeLeft} seconds</p>
          </div>
          <h3>{question}</h3>
          <ul>
            {answers.map((answer: string, idx: number) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
              >
                <span>{answer}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={nextQuestion} 
            className={`btn ${checked ? '' : 'btn-disabled'}`} 
            disabled={!checked}
          >
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div className='quiz-container'>
          <h3>Results</h3>
          <p>Total Questions: <span>{questions.length}</span></p>
          <p>Total Score: <span>{result.score}</span></p>
          <p>Correct Answers: <span>{result.correctAnswers}</span></p>
          <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
          {/* Uncomment to show percentage score */}
          {/* <h3>Overall: {((result.score / questions.length) * 100).toFixed(2)}%</h3> */}
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default H4epithelium;






