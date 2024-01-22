import { useState } from "react";

const InputForm = () => {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState(null);
  const quizAnswer = "Dhaka";

  const checkAnswer = () => {
    if (answer.toLowerCase() === quizAnswer.toLowerCase()) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      checkAnswer();
    }, 3000);
  };

  const handleChange = (e) => {
    setStatus(null);
    setAnswer(e.target.value);
  };

  if (status === "success") {
    return <h2> The Answer is correct! </h2>;
  }
  return (
    <div>
      <h2>Answer the Quiz</h2>
      <p>What is the capital of Bangladesh?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          disabled={status === "loading"}
          value={answer}
          cols="40"
          rows="7"
        ></textarea>
        <br />
        <button
          disabled={answer.length === 0 || status === "loading"}
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
      {status === "loading" && <p> Loading.... </p>}
      {status === "error" && <p>Try Again! The Answer is Wrong </p>}
    </div>
  );
};

export default InputForm;
