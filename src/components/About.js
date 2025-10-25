import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntext, setbtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setbtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setbtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About This Application</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is TextUtils?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils</strong> helps people perform quick text-related tasks like converting words to uppercase, lowercase, and removing extra spaces. It also includes both dark and light modes. I built this app so users can complete these text tasks in the minimum possible time.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              My Goal & Vision
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              My main goal is to help people save time on repetitive text formatting tasks. This application is designed to make such word-related work easier, faster, and more efficient for everyone.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              About the Developer
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Hi! I'm <strong>Prathamesh</strong> — a passionate web developer. I built this website using React to help people work smarter with text. I’m currently working solo, and I love building tools that make everyday digital tasks simpler.
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
