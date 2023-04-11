import React, { useState } from "react";
import "./Card.css";
import axios from "axios";
import ReactLoading from "react-loading";

const Card = () => {
  const [subject, setSubject] = useState();
  const [topic, setTopic] = useState();
  const [type, setType] = useState();
  const [quant, setQuantity] = useState();
  const [Data, setData] = useState();
  const [flag, setFlag] = useState(false);
  const getques = async () => {
    setFlag(true);
    const req = `create ${quant} ${type} questions based on ${subject} and the following topics ${topic} in json format`;
    try {
      const res = await axios.post("http://localhost:8000", { prompt: req });
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="form-parent">
      <div className="form">
        <div>
          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <br />
        <br />

        <div>
          <label for="topics">Topic Names:</label>
          <input
            type="text"
            id="topics"
            name="topics"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <br />
        <br />

        <div>
          <label for="num-questions">Number of Questions:</label>
          <input
            type="number"
            id="num-questions"
            name="num-questions"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <br />
        <br />

        <div>
          <label for="question-type">Type of Question:</label>
          <input
            type="text"
            id="type"
            name="Type of question"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={getques}
          className="form-button"
        />
        <div id="output">
          {!Data && flag && (
            <ReactLoading type={"spin"} color={"#000"} height={"5%"} />
          )}
          {Data &&
            Data.questions.map((question, index) => (
              <div key={index}>
                <p>
                  Question {index + 1}: {question.question}
                </p>
                {question.options.map((a, i) => (
                  <div>
                    {i + 1} : {a}
                  </div>
                ))}
                <p>Answer: {question.answer}</p>
                <br />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
