import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])
  const [index, setIndex] = useState(null)
  const [answer, setAnswer] = useState(null)

  const handleSubmittedAnswer = (submittedAnswer) => {
    if (index) {
      setAnswersList([...answersList.slice(0, index), submittedAnswer, ...answersList.slice(index + 1)])
      setIndex(null)
      setAnswer(null)
    } else {
      setAnswersList([...answersList, submittedAnswer])
    }
  }

  const handleEditAnswer = (index) => {
    setIndex(index)
    setAnswer(answersList[index])
    console.log(`handleEditAnswer -- answersList[${index}]: ${answersList[index]}`)
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answersList}
          handleEditAnswer={handleEditAnswer}
        />
      </section>
      <section className="main__form">
        <Form
          answer={answer}
          handleSubmittedAnswer={handleSubmittedAnswer}
        />
      </section>
    </main>
  );
}

export default Main;
