import "./App.css";
import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import questions from "./data";

function App() {
  return (
    <main>
      <div className="container">
        <h4>questions and answers for login</h4>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
