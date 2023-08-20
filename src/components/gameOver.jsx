import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import "./gameOver.css";
import Teste from '../image/teste.jpg';


const gameOver = () => {
    const [quizState, dispatch] =useContext(QuizContext);
  return (
    <div id="gameOver">
        <h2>Game Over</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Voce acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={Teste} alt ="fim de jogo" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default gameOver