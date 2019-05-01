import React from "react";
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


const QCardsList = props => {
  return  (
    <div>
        <div className="Question">
            <div className="header">
              <h3>{props.question.title}</h3>
            </div>
            <div className="body">
              <p className="author">asked by • {props.question.author}</p>
              <p>
                on {moment(props.question.created_at).format('MMM Do YY')}
              </p>
              <p>{props.question.body}</p>
            </div>

                </div>
                </div>
  
  )
};

export default QCardsList;