import React, { useContext } from 'react'
import { createContext, useReducer } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./option";
import './questions.css';


const questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

const selectOption = () =>{
  console.log(TestE);
};

  return (
    <div id="questions">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
           {currentQuestion.options.map((option) => (
            <Option option = {option} 
            key = {option} 
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption()} />
           ))}
        </div>
            {quizState.answerSelected && (
              <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
                Continuar
              </button>
            )}
    </div>
  );
};

export default questions