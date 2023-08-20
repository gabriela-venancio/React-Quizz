import { useContext, useEffect } from "react";
import Welcome from "./components/welcome";
import Questions from "./components/questions";
import GameOver from "./components/gameOver";

import "./App.css";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
      dispatch({type: "REORDER_QUESTIONS"})
  }, [])


  return (
      <div className='quizz-app'>
        <h1>QUIZ</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Questions />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
       
  );
}

export default App;
