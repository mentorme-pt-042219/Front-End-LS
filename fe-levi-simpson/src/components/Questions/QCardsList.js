import React from "react";

const QCardsList = props => {
  return  (
    <div>
        <ul>
  <li>{props.question.user} </li>
  <li>{props.question.topic} </li>
  <li>{props.question.text}</li>  

  </ul>
              
                </div>
  
  )
};

export default QCardsList;