import { useContext } from 'react';
import { QuizContext } from '../context/quiz';


import Teste from '../image/teste.jpg';
import './welcome.css';
const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Ola user, bem vindo!</h2>
        <p>clique no botão para dar inicio ao quizz.</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src = {Teste} alt=""/>
    </div>
  );
};

export default welcome;