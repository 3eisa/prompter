import React, {  useState } from 'react'
import '../styles/Writer.css'


//ENV VAR
const url = 'https://baconipsum.com/api/?type=meat-and-filler'

export default function Questions({setPlan}) {

    //EXPORT QUESTION LIST!!!
    const questions = [
        { question: 'What is your name?', placeholder: 'Enter your name' },
        { question: 'What is your age?', placeholder: 'Enter your age' },
        { question: 'What is your occupation?', placeholder: 'Enter your occupation' },
        { question: 'What is your favorite color?', placeholder: 'Enter your favorite color' },
        { question: 'What is your favorite food?', placeholder: 'Enter your favorite food' },
        { question: 'What is your favorite movie?', placeholder: 'Enter your favorite movie' },
        { question: 'What is your favorite book?', placeholder: 'Enter your favorite book' },
        { question: 'What is your favorite hobby?', placeholder: 'Enter your favorite hobby' },
        { question: 'What is your favorite sport?', placeholder: 'Enter your favorite sport' },
        { question: 'What is your favorite destination?', placeholder: 'Enter your favorite destination' }
    ];
      

    //state of answers input 
    const [answers, setAnswers] = useState([]);
    
    const handleChange = (event, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    //form submit
    const handleSubmit = (e)=>{
        e.preventDefault()

        const fetchData = async ()=>{
            const result = await fetch(url) //fetch

            result.json().then(json=>{ //parse json
                setPlan(json.join(' ')) //update value
            })
        }
        fetchData() //call
    }

  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        {questions.map((question, index) => (
            <div className="question-container" key={index}>
                <div className="question">
                    <span className="question-circle">
                        {index + 1}
                    </span>
                    <p className="question-text">{question.question}</p>
                </div>
                <input
                className="question-input"
                    type="text"
                    onChange={e => handleChange(e, index)}
                    value={answers[index] || ""}
                    placeholder={question.placeholder}
                />
            </div>
        ))}
        <div className="question-container">
        <button className='question-button' >Generate My Plan</button>
        </div>
    </form>
        </>
  )
}
