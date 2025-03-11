import './App.css';
import QuestionsComponent from './components/questions';
import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

import 'bootstrap/dist/css/bootstrap.css';

const ENDPOINT = "http://localhost:8080";
const socket = openSocket(ENDPOINT, { transports: ['websocket'] });


function App() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    socket.on("quiz", data => {
      setQuestions(data.quiz);
    });
  }, []);

  return ( 
    <div className="App">
     <div className="container">
      <div className = "row" >
        <div className=" col header">
            <h1 className="display-1 fw-bold">Kwizzz</h1>
            <p className="display-5"> Interactive and Multi-User Quizz.</p>
        </div>
      </div>
    </div>

      <QuestionsComponent questions={questions} socket={socket}></QuestionsComponent>
          
      <div className="Container">
        <div className = "row" >
        <footer id="site-footer">
          <p>Copyright &copy;KWIZZZ 2022</p>
      </footer>
      </div>
      </div>
    </div>
  );
}

export default App;
