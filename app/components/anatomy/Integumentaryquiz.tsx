'use client';
import React, { useState, useEffect } from 'react';
import { integumentarydata } from './integumentarydata'; // Import the quiz data



const Integumentaryquiz: React.FC = () => {
  const { questions } = integumentarydata;
  
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
  // , [timerRunning]

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
          
          <h1>Integumentary System</h1>
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

export default Integumentaryquiz;







// 'use client';
// import React, { useState, useEffect } from 'react';
// import { introanatomydata } from './introanatomydata'; // Import the quiz data

// const IntroAnatomyQuiz: React.FC = () => {
//   const { questions } = introanatomydata;
  
//   const [activeQuestion, setActiveQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
//   const [checked, setChecked] = useState<boolean>(false);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState<boolean>(false);
//   const [result, setResult] = useState({
//     score: 0,
//     correctAnswers: 0,
//     wrongAnswers: 0,
//   });
//   const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds for each question
//   const [timerRunning, setTimerRunning] = useState<boolean>(false);

//   const { question, answers, correctAnswer } = questions[activeQuestion];

//   useEffect(() => {
//     if (timerRunning) {
//       const interval = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             handleTimeout(); // Move to next question if time runs out
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [timerRunning]);

//   const handleTimeout = () => {
//     setChecked(true);
//     setSelectedAnswer(false); // Incorrect since time ran out
//     setSelectedAnswerIndex(null); 
//     nextQuestion(); // Automatically move to next question
//   };

//   const onAnswerSelected = (answer: string, idx: number): void => {
//     setSelectedAnswer(answer === correctAnswer); // True if the selected answer is correct
//     setSelectedAnswerIndex(idx);
//     setChecked(true);
//     setTimerRunning(false); // Stop the timer when an answer is selected
//   };

//   const nextQuestion = (): void => {
//     setResult((prev) => 
//       selectedAnswer 
//         ? {
//             ...prev,
//             score: prev.score + 1,
//             correctAnswers: prev.correctAnswers + 1,
//           }
//         : {
//             ...prev,
//             wrongAnswers: prev.wrongAnswers + 1,
//           }
//     );

//     if (activeQuestion < questions.length - 1) {
//       setActiveQuestion((prev) => prev + 1);
//       setTimeLeft(30); // Reset time for the next question
//       setTimerRunning(true); // Start timer again for next question
//     } else {
//       setShowResult(true);
//     }

//     // Reset state for the next question
//     setSelectedAnswerIndex(null);
//     setChecked(false);
//   };

//   // Start timer on initial render and when activeQuestion changes
//   useEffect(() => {
//     setTimeLeft(30); // Reset time for the new question
//     setTimerRunning(true); // Start the timer
//   }, [activeQuestion]);

//   const progressBarWidth = (activeQuestion / questions.length) * 100;

//   return (
//     <div className='container flex flex-col justify-center items-center mx-auto mt-10'>
//       <h1>Introduction to General Anatomy</h1>
//       <div>
//         <h2>
//           Question: {activeQuestion + 1} 
//           <span>/{questions.length}</span>
//         </h2>
//         <div className='progress-bar' style={{ width: `${progressBarWidth}%` }} />
//         <p>Time left: {timeLeft} seconds</p>
//       </div>

//       {!showResult ? (
//         <div className='quiz-container'>
//           <h3>{question}</h3>
//           <ul>
//             {answers.map((answer: string, idx: number) => (
//               <li
//                 key={idx}
//                 onClick={() => onAnswerSelected(answer, idx)}
//                 className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
//               >
//                 <span>{answer}</span>
//               </li>
//             ))}
//           </ul>

//           <button 
//             onClick={nextQuestion} 
//             className={`btn ${checked ? '' : 'btn-disabled'}`} 
//             disabled={!checked}
//           >
//             {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       ) : (
//         <div className='quiz-container'>
//           <h3>Results</h3>
//           <p>Total Questions: <span>{questions.length}</span></p>
//           <p>Total Score: <span>{result.score}</span></p>
//           <p>Correct Answers: <span>{result.correctAnswers}</span></p>
//           <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
//           {/* Uncomment to show percentage score */}
//           {/* <h3>Overall: {((result.score / questions.length) * 100).toFixed(2)}%</h3> */}
//           <button onClick={() => window.location.reload()}>Restart</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IntroAnatomyQuiz;










// without auto move to next question
// 'use client';
// import React, { useState, useEffect } from 'react';
// import { introanatomydata } from './introanatomydata'; // Import the quiz data

// const IntroAnatomyQuiz: React.FC = () => {
//   const { questions } = introanatomydata;
  
//   const [activeQuestion, setActiveQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
//   const [checked, setChecked] = useState<boolean>(false);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState<boolean>(false);
//   const [result, setResult] = useState({
//     score: 0,
//     correctAnswers: 0,
//     wrongAnswers: 0,
//   });
//   const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds for each question
//   const [timerRunning, setTimerRunning] = useState<boolean>(false);

//   const { question, answers, correctAnswer } = questions[activeQuestion];

//   useEffect(() => {
//     if (timerRunning) {
//       const interval = setInterval(() => {
//         setTimeLeft((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             handleTimeout(); // Handle timeout case
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [timerRunning]);

//   const handleTimeout = () => {
//     setChecked(true); // Mark the question as checked
//     setSelectedAnswer(false); // Incorrect since time ran out
//     setSelectedAnswerIndex(null); // Clear any selection
//   };

//   const onAnswerSelected = (answer: string, idx: number): void => {
//     setSelectedAnswer(answer === correctAnswer); // True if the selected answer is correct
//     setSelectedAnswerIndex(idx);
//     setChecked(true);
//     setTimerRunning(false); // Stop the timer when an answer is selected
//   };

//   const nextQuestion = (): void => {
//     setResult((prev) => 
//       selectedAnswer 
//         ? {
//             ...prev,
//             score: prev.score + 1,
//             correctAnswers: prev.correctAnswers + 1,
//           }
//         : {
//             ...prev,
//             wrongAnswers: prev.wrongAnswers + 1,
//           }
//     );

//     if (activeQuestion < questions.length - 1) {
//       setActiveQuestion((prev) => prev + 1);
//       setTimeLeft(30); // Reset time for the next question
//       setTimerRunning(true); // Start timer again for next question
//     } else {
//       setShowResult(true);
//     }

//     // Reset state for the next question
//     setSelectedAnswerIndex(null);
//     setChecked(false);
//   };

//   // Start timer on initial render and when activeQuestion changes
//   useEffect(() => {
//     setTimeLeft(30); // Reset time for the new question
//     setTimerRunning(true); // Start the timer
//   }, [activeQuestion]);

//   const progressBarWidth = (activeQuestion / questions.length) * 100;

//   return (
//     <div className='container flex flex-col justify-center items-center mx-auto mt-10'>
//       <h1>Introduction to General Anatomy</h1>
//       <div>
//         <h2>
//           Question: {activeQuestion + 1} 
//           <span>/{questions.length}</span>
//         </h2>
//         <div className='progress-bar' style={{ width: `${progressBarWidth}%` }} />
//         <p>Time left: {timeLeft} seconds</p>
//       </div>

//       {!showResult ? (
//         <div className='quiz-container'>
//           <h3>{question}</h3>
//           <ul>
//             {answers.map((answer: string, idx: number) => (
//               <li
//                 key={idx}
//                 onClick={() => onAnswerSelected(answer, idx)}
//                 className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
//               >
//                 <span>{answer}</span>
//               </li>
//             ))}
//           </ul>

//           <button 
//             onClick={nextQuestion} 
//             className={`btn ${checked ? '' : 'btn-disabled'}`} 
//             disabled={!checked}
//           >
//             {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       ) : (
//         <div className='quiz-container'>
//           <h3>Results</h3>
//           <p>Total Questions: <span>{questions.length}</span></p>
//           <p>Total Score: <span>{result.score}</span></p>
//           <p>Correct Answers: <span>{result.correctAnswers}</span></p>
//           <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
//           {/* Uncomment to show percentage score */}
//           {/* <h3>Overall: {((result.score / questions.length) * 100).toFixed(2)}%</h3> */}
//           <button onClick={() => window.location.reload()}>Restart</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IntroAnatomyQuiz;





// original working code without timer and progress bar 
// 'use client';
// import React, { useState } from 'react';
// import { introanatomydata } from './introanatomydata'; // Import the quiz data

// const IntroAnatomyQuiz: React.FC = () => {
//   const { questions } = introanatomydata;
  
//   const [activeQuestion, setActiveQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
//   const [checked, setChecked] = useState<boolean>(false);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState<boolean>(false);
//   const [result, setResult] = useState({
//     score: 0,
//     correctAnswers: 0,
//     wrongAnswers: 0,
//   });

//   const { question, answers, correctAnswer } = questions[activeQuestion];

//   const onAnswerSelected = (answer: string, idx: number): void => {
//     setSelectedAnswer(answer === correctAnswer); // True if the selected answer is correct
//     setSelectedAnswerIndex(idx);
//     setChecked(true);
//   };

//   const nextQuestion = (): void => {
//     setResult((prev) => 
//       selectedAnswer 
//         ? {
//             ...prev,
//             score: prev.score + 1,
//             correctAnswers: prev.correctAnswers + 1,
//           }
//         : {
//             ...prev,
//             wrongAnswers: prev.wrongAnswers + 1,
//           }
//     );

//     if (activeQuestion < questions.length - 1) {
//       setActiveQuestion((prev) => prev + 1);
//     } else {
//       setShowResult(true);
//     }

//     // Reset state for the next question
//     setSelectedAnswerIndex(null);
//     setChecked(false);
//   };

//   return (
//     <div className='container flex flex-col justify-center items-center mx-auto mt-10'>
//       <h1>Introduction to General Anatomy</h1>
//       <div>
//         <h2>
//           Question: {activeQuestion + 1} 
//           <span>/{questions.length}</span>
//         </h2>
//       </div>

//       {!showResult ? (
//         <div className='quiz-container'>
//           <h3>{question}</h3>
//           <ul>
//             {answers.map((answer: string, idx: number) => (
//               <li
//                 key={idx}
//                 onClick={() => onAnswerSelected(answer, idx)}
//                 className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
//               >
//                 <span>{answer}</span>
//               </li>
//             ))}
//           </ul>

//           <button 
//             onClick={nextQuestion} 
//             className={`btn ${checked ? '' : 'btn-disabled'}`} 
//             disabled={!checked}
//           >
//             {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       ) : (
//         <div className='quiz-container'>
//           <h3>Results</h3>
//           <p>Total Questions: <span>{questions.length}</span></p>
//           <p>Total Score: <span>{result.score}</span></p>
//           <p>Correct Answers: <span>{result.correctAnswers}</span></p>
//           <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
//           {/* Uncomment to show percentage score */}
//           {/* <h3>Overall: {((result.score / questions.length) * 100).toFixed(2)}%</h3> */}
//           <button onClick={() => window.location.reload()}>Restart</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IntroAnatomyQuiz;




// 'use client';
// import React, { useState } from 'react';
// import { introanatomydata } from './introanatomydata'; // Import the quiz data



// const IntroAnatomyQuiz: React.FC = () => {
//   const [activeQuestion, setActiveQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<boolean | string>('');
//   const [checked, setChecked] = useState<boolean>(false);
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState<boolean>(false);
//   const [result, setResult] = useState({
//     score: 0,
//     correctAnswers: 0,
//     wrongAnswers: 0,
//   });

//   const { questions } = introanatomydata;
//   const { question, answers, correctAnswer } = questions[activeQuestion];

//   const onAnswerSelected = (answer: string, idx: number): void => {
//     setChecked(true);
//     setSelectedAnswerIndex(idx);

//     if (answer === correctAnswer) {
//       setSelectedAnswer(true); // Correct answer
//     } else {
//       setSelectedAnswer(false); // Incorrect answer
//     }
//   };

//   const nextQuestion = (): void => {
//     setSelectedAnswerIndex(null);

//     setResult((prev) => 
//       selectedAnswer 
//         ? {
//             ...prev,
//             score: prev.score + 1,
//             correctAnswers: prev.correctAnswers + 1,
//           }
//         : {
//             ...prev,
//             wrongAnswers: prev.wrongAnswers + 1,
//           }
//     );

//     if (activeQuestion !== questions.length - 1) {
//       setActiveQuestion((prev) => prev + 1);
//     } else {
//       setActiveQuestion(0);
//       setShowResult(true);
//     }

//     setChecked(false);
//   };

//   return (
//     <div className='container flex flex-col justify-center items-center mx-auto mt-10'>
//       <h1>introduction to General Anatomy</h1>
//       <div>
//         <h2>
//           Question: {activeQuestion + 1} 
//           <span>/{questions.length}</span>
//         </h2>
//       </div>

//       {!showResult ? (
//         <div className='quiz-container'>
//           <h3>{questions[activeQuestion].question}</h3>
//           {answers.map((answer: string, idx: number) => (
//             <li
//               key={idx}
//               onClick={() => onAnswerSelected(answer, idx)}
//               className={selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'}
//             >
//               <span>{answer}</span>
//             </li>
//           ))}

//           {checked ? (
//             <button onClick={nextQuestion} className='btn'>
//               {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           ) : (
//             <button disabled className='btn-disabled'>
//               {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           )}
//         </div>
//       ) : (
//         <div className='quiz-container'>
//           <h3>Results</h3>
//           {/* <h3>Overall {(result.score / 25) * 100}%</h3> */}
//           <p>Total Questions: <span>{questions.length}</span></p>
//           <p>Total Score: <span>{result.score}</span></p>
//           <p>Correct Answers: <span>{result.correctAnswers}</span></p>
//           <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
//           <button onClick={() => window.location.reload()}>Restart</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IntroAnatomyQuiz;
