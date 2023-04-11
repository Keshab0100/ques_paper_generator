import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="form-parent">

    <form className="form-container">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="form-input"
      />

      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="form-input"
        />

      <label for="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        className="form-input"
        />

      <label for="message">Message:</label>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Enter your message"
        className="form-input"
        />

      <input type="submit" value="Submit" className="form-button" />
    </form>
        </div>
  );
};

export default Card;
{
  /* <ul className='form-list'>
                <li>Enter your topics </li> 
                <input classname="input" type='text'></input>

                <li>Enter number of questions</li>
                <input  classname="input" type='number'></input>
            
                <li>enter marks of each question</li>
                <input  classname="input" type='number'></input>
        
                <li>enter type</li>
                <input  classname="input" type='text'></input>

            </ul> */
}
