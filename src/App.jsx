import { useContext } from "react";
import Welcome from "./components/welcome";
import Questions from "./components/questions";
import "./App.css";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
      <div className='quizz-app'>
        <h1>QUIZ</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Questions />}
      </div>
       
  );
}

export default App;
