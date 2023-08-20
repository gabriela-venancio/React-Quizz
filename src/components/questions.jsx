import React, { useContext } from 'react'
import { createContext, useReducer } from "react";
import { QuizContext } from '../context/quiz';


const questions = () => {
const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="questions">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>Pergunta atual</h2>
        <div id="options-container">
            <p>Opções</p>
        </div>
        <button>Continuar</button>
    </div>
  )
}

export default questions