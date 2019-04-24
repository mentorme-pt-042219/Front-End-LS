import React from "react";
import { connect } from "react-redux";

import QCardsList  from "../Questions/QCardsList";

class QuestionCards extends React.Component {
    constructor() {
      super();
    }
  
    // componentDidMount() {
    //   //call our action
    //   this.props.getData();
    // }
  
    render() {
    
   
        // return something here to indicate that you are fetching data
    
      return (
        <div className="CardsList_wrapper">
           {/* {this.props.fetchingFriend? <h1>Loading</h1> : null} */}
            <ul>
            {this.props.questions.map(question => {
        return <QCardsList key={question.user} question={question}/>;
      })}
      </ul>
          {/* <UpdateFriendContainer friends={this.props.friends}/> */}
        </div>
      );
    }
  }
  
  // our mapStateToProps needs to have two properties inherited from state
  // the characters and the fetching boolean
  
  const mstp = state => {
    return {
    questions: state.questions
     
    }
  }
  
  export default connect(
   (mstp), 
  )(QuestionCards);
  