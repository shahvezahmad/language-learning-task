import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { quizData } from "../Question/quiz.model";
import "./Home.css";

export function Home() {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();
  const playHandler = (id: string) => {
    navigate("/rules");
    sessionStorage.setItem("quizId", id);
  };

  useEffect(() => {
    dispatch({ type: "RESET" });
    sessionStorage.removeItem("quizId");
  }, [dispatch]);

  return (
    <>
      <div className="quiz-home-container">
        <div className="main-header">
          <div className="home-text">
            <h1>Want to test your Language proficiency?</h1>
            <h1>Attempt the Quiz and ace the</h1>
            <h1>leaderboards</h1>
            <a href="#explore" className="link-btn">
              Explore Quiz
            </a>
          </div>
          <div>
            <img
              className="home-img"
              src="https://res.cloudinary.com/depmzczni/image/upload/v1649998229/quiz_rrrtco.png"
              alt="Bulb"
            />
          </div>
        </div>

        <div className="category-home-container flex-center">
          <div className="category">
            <header className="category-header">Category</header>
            <main className="category-main" id="explore">
              {quizData.map((quiz) => {
                return (
                  <div key={quiz.id} className="card text-overlay">
                    <div className="img-content">
                      <img className="card-img" src={quiz.img} alt={quiz.category} />
                    </div>
                    <div className="card-info">
                      <h3>{quiz.category}</h3>
                      <div className="card-info-bottom">
                        <p className="paragraph-sm">
                          <i className="fa fa-tag" aria-hidden="true"></i> Take this quiz to test
                          yourself.
                        </p>
                        <p className="paragraph-sm">
                          <i className="fa fa-tag" aria-hidden="true"></i> {quiz.questions.length}{" "}
                          Questions
                        </p>
                        <div
                          className="link-btn take-quiz-btn"
                          onClick={() => playHandler(`${quiz.id}`)}
                        >
                          Play Now
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </main>
          </div>
        </div>
      </div>
      
    </>
  );
}
